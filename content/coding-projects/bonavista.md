## Bonavista
A tokenizer and parser library written in C++.

Links: [Source Code](https://github.com/ericdingle/bonavista)

I never got to take a compilers course at Waterloo since CompEng didn't offer one. I could have
taken the CS one, but I decided to do graphics instead. All of my knowledge in this area comes
from a 2nd year CompEng course (though I can't seem to remember what it was about exactly), and
reading stuff on the internet. I found some article about writing a top-down parser in Python, and
it seemed easy enough. I was really trying to avoid the Lex and Yacc route that I had done in that
course, so this seemed like a good option.

The idea behind this project is that it's a library that allows you to write a tokenizer and parser
for any given language. The tokenizing can't be customized all that much, but the parsing is pretty
robust, allowing you to parser nested statements and expressions, and then generate an AST. I managed
to write a JSON parser as an example.

I've wondered if I could write a JavaScript parser using it, but I haven't tried that just yet.
The scoping rules have scared me away so far, but it'd be neat to see if this library is as robust
as I claim it is :)
