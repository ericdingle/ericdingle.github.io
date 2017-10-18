## Python Method Resolution Order
October 17, 2017

I was dealing with some strange inheritance pattern at work one day when some programming behavior
that (I think) is specific to Python came up. To help understand where I'm going with this, let's
quickly review inheritance in C++, Java and Python.

In C++, multiple inheritance is allowed and the constructor of parent is either invoked
automatically if it has no parameters or invoked explicitly by name if it does. For automatic
invocation, the order of invocation of the parents' constructors is determined by the order of the
parents in the class definition.

In Java, multiple inheritance is not allowed and a handy method called "super" is provided to invoke
the parent constructor if it has parameters (otherwise the parameter-less parent constructor is
invoked instead).

In Python, multiple inheritance is allowed and a "super" method exists! However, there are some
interesting pitfalls that need to be avoided when using this method. Here's an example:

    class A(object):
      def __init__(self):
        print "A"
    
    class B(object):
      def __init__(self):
        print "B"

    class C(A, B):
      def __init__(self):
        print "C"
        super(C, self).__init__()
    
    C()

This will print "CA". Not that surprising since A is the first parent, but what may be surprising is
that B's constructor never gets called :| There are two ways to fix this. First, you can call the
parent constructors explicitly:

    class C(A, B):
      def __init__(self):
        A.__init__(self)
        B.__init__(self)

Or you can take advantage of Python's
[method resolution order](https://www.python.org/download/releases/2.3/mro/). Now what the heck is
that? That link gives a lengthy rundown, so here's the gist: when a class is defined, a hierarchy
of parent classes is created. For C above, this looks something like [C, A, B, object]. When Python
tries to access a variable or method of a class, it'll look through the class hierarchy until it
finds it (or doesn't) essentially creating a priority order for the access. In our example, this
allows us to do:

    class A(object):
      def __init__(self):
        print "A"
        super(A, self).__init__()
    
    class B(object):
      def __init__(self):
        print "B"
        super(B, self).__init__()

    class C(A, B):
      def __init__(self):
        super(C, self).__init__()
        print "C"
    
    C()

Now this prints "CAB". The call to super(...) in A actually gives a hierarchy of [B, object] even
though B isn't a parent of A! So the call to init() passes to the next class in the hierarchy and
the parent classes are constructed as expected.

This got me wondering, though. If a class can call a parent method, but invoke the method of a
class that is not its parent, can unexpected things happen? Here's an example:

    class A(object):
      def __init__(self, arg):
        super(A, self).__init__()
    
    class B(A):
      def __init__(self):
        super(B, self).__init__("B")
    
    class C(A):
      def __init__(self):
        super(C, self).__init__("C")
    
    class D(B, C):
      def __init__(self):
        super(D, self).__init__()
    
    D()

This causes a runtime error when B tries to invoke init() on C while passing an argument. Maybe
this is a contrived example since both B and C inherit from A and it doesn't make sense if they
both try to construct A with different arguments. I decided not to think too hard of any other
examples because I do instinctively feel like this probably doesn't happen that much. And an
example like:

    class A(object):
      def __init__(self, arg):
        super(A, self).__init__()
    
    class B(object):
      def __init__(self):
        super(B, self).__init__()
    
    class C(A):
      def __init__(self):
        super(C, self).__init__("C")
    
    class D(C, B):
      def __init__(self):
        super(D, self).__init__()
    
    D()

works as expected (i.e. MRO = [D, C, A, B, object]). MRO = pretty cool feature.
