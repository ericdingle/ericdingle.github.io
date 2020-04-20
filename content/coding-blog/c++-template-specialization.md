## C++ Template Specialization
April 20, 2020

I've been using C++ more and more at work, and the more I use it, the more I like using it. I
understand the complaints: there's lots of pitfalls, it's verbose, so many anti-patterns to avoid.
I guess the enjoyment comes when you can avoid all of that from experience, and use all the new
powerful features and standard library additions that are coming out.

One feature I used recently in (what I felt was) an awesome way was C++ template specialization.
This isn't a new feature, and templates are so widely misused, so this falls into the category
above: it requires some experience to enjoy it :)

A quick review of C++ templates: this feature lets you write a function or class once while having
it generate code for multiple types. For example:

    template <typename T>
    T square(T t) {
      return t * t;
    }

    int i = square(1);
    double d = square(1.0);

In this case, we wrote the function implementation once, but it supports any type where the *
operator can operate with two operands of the same type and return that type. Here's an example from
the standard library.

    std::vector<int> vector_of_ints;
    std::vector<double> vector_of_doubles;

The standard library implements the vector class as a templated class so that it can support many
different types while not needing to rewrite the implementation for each type.

Now the point of this post is to talk about C++ template specialization, so what's that? This
feature is for special cases where you want to give an explicit implementation of a templated
function/class for a particular type. For example:

    template <typename T>
    bool is_int() {
      return false;
    }

    template<>
    bool is_int<int>() {  // template specialization
      return true;
    }

    std::cout << is_int<char>();  // prints "false"
    std::cout << is_int<int>();   // prints "true"

The implementation for any given type will return false except for int because we provided a
template specialization.

One example of template specializations from the standard library is std::vector<bool>. Because
sizeof(bool) == 1 (8 bits just to store 1 bit of information!) it becomes really inefficient to
store many of them in a contiguous block which the standard implementation of std::vector does for
most types. The template specialization for the bool type provides an implementation that will
store this information without the 7 bit overhead with a specialized implementation that uses each
bit in the allocated block to store the information.

Now what I really wanted to talk about today was how I was able to solve an interesting problem
using template specialization. The problem looked something like this:

    // Standard template declaration and definition.
    template <typename T, typename R, R(*FuncPtr)(T)>
    class MyClass {
     public:
      R operator()(T t) {
        return (*FuncPtr)(t);
      }
    };

    std::string func(const char* c) {
      std::string s(c);
      return s.substr(2);
    }

    int main() {
      MyClass<const char*, std::string, &func> m;
      std::string s = m("test");
      std::cout << s;
    }

This is a big simplification, but the annoying thing I was running into was that the function's
return type and types of its arguments had to be specified when instantiating the class. I thought
that since the type of the passed-in function itself determines those types, then there should be a
way to omit them and just write:

    MyClass<&func> m;

I consulted with JP, my C++ guru colleague, and he helped me determine that template specializations
can help solve this! Here's what we came up with:

    // Standard template declaraction with no definition.
    template <typename F, F f>
    class MyClass;

    // Template specialization that deduces the argument and return types.
    template <typename T, typename R, R(*FuncPtr)(T)>
    class MyClass<R(*)(T), FuncPtr> {
     public:
      R operator()(T t) {
        return (*FuncPtr)(t);
      }
    };

    std::string func(const char* c) {
      std::string s(c);
      return s.substr(2);
    }

    int main() {
      MyClass<decltype(&func), &func> m;
      std::string s = m("test");
      std::cout << s;
    }

You still have to provide the type of the function using decltype, but for cases where the types
are cumbersomely long or where there are a large number of them, this is definitely a more concise
way of writing them. And if the types change, there are fewer places to update. This was definitely
a satisfying thing to get working :)
