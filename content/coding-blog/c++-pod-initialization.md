## C++ POD Initialization
February 11, 2017

C++ is full of interesting behaviors, and understanding all of these behaviors is a big stretch for
most devs. That's why there are lots of best practice guidelines out there to help avoid pitfalls
and lengthy debugging sessions. Plain old datatype (POD) initialization is a concept that falls
into this category. For example, what is the value of i here:

    int main() {
        int i;
        std::cout << i;
    }

The answer is... undefined behavior. For a detailed explanation as to why, have a look at
[this](http://stackoverflow.com/questions/6032638/default-variable-value) Stack Overflow response.
In more simple terms, variables with automatic storage duration (like local variables) are not
initialized while variables with static storage duration (like globals) are zero-initialized.
To avoid this pitfall, you simply have to define the value:

    int main() {
        int i = 0;
    }

This should be done for all types that don't have a constructor, and
[readability](https://google.github.io/styleguide/cppguide.html#Local_Variables) can even be
improved for types with a constructor by using brace initialization for types that support it.

So that brings us to the real reason that I wanted to write this post. How are PODs initialized when
they are created within a container that has automatic storage duration? For example:

    int main() {
        std::map<char, int> m;
        std::cout << m['a'];
    }

In this case, the behavior actually is defined: the value is value-initialized (see that SO post
above again) which equates to being zero-initialized for PODs. That means you can do stuff like:

    int main() {
        std::map<char, int> m;
        std::cout << ++m['a'];
    }

which adds the key to the map, zero-initializes the value, increments the value in the map and
finally returns the value so that it can be printed. That's a lot going on for only typing a few
characters. Basic rule of thumb: always initalize PODs in their declaration.
