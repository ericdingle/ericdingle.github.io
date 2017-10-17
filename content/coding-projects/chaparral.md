## Chaparral
An interpreter library written in C++.

Links: [Source Code](https://github.com/ericdingle/chaparral)

This project expands on [Bonavista](#/coding-projects/bonavista) (a tokenizer and parser library)
by adding an execution layer. It also contains some helper classes for a variant type and an
invokable type (similar to IDispatch). I implemented a simple command line calculator using it as an
example.

The main motivation for creating this was to be used with [Altadore](#/coding-projects/altadore),
the ray tracer that I wrote, so that the compiled binary could create scenes based on an input
file. I could have used something like a CSV file, but I wanted it to be more robust. And this was
a lot more fun to code.
