## Regular Expressions and Hyphens
December 23, 2019

Regular expressions can be full of surprises for those who have never used them, but those of us
who've used them frequently can also run into unexpected pitfalls. And one time this happened to me
because of an oversight in how regular expressions treat hyphens.

I was working on some code that would look for URL-like strings inside a file with the goal of using
those extracted URLs as badness signals for malware detection in Chrome extensions. I searched for
some ways of doing this, and came across
[this](https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url)
StackOverflow article which detailed an overly complicated way (at least I thought so) of matching
every imaginable URL according to [RFC 3987](http://www.faqs.org/rfcs/rfc3987.html). I had a read of
the response and decided that that was overkill for our purposes. I decided I would write some quick
patterns to match schema, host, path, etc. with a sub-pattern that would match valid URL chars:

    URL_CHARS = r'[a-zA-Z0-9$-_@\.&+]'  # A subset of the valid URL chars.

We pushed this to production, and everything appeared to be working correctly until we would see
matches like:

    http://foo.com'>Text</a>

This was confusing at first because I thought that I had been explicit about which non-alphanumeric
characters should have been allowed:

    $ - _ @ . & +

This is where the mis-used hyphen comes in. The hyphen allows you to specify a range of characters
to match (e.g. a-z) to simplify pattern writing. I hadn't intended to add another range to my URL
matching pattern; I was trying to match the hyphen character! The range that I had accidentally
added was:

    $-_

(i.e. all the ascii characters between the dollar and underscore characters). Having a quick look at
the [ASCII table](http://www.lookuptables.com/) shows that that includes:

    $ % & ' ( ) * + , - . / 0-9 : ; < = > ? @ A-Z a-z [ \ ] ^ _

Clearly a much larger range of characters than I had intended. There are two simple fixes to this
issue. First, you can escape the hyphen:

    $\-_

Or you can move the hyphen to the end of the character matching block:

    [a-zA-Z0-9$_@\.&+_]

In the end, my colleague wrote a much more comprehensive set of patterns to include some of the URLs
that I had ignored in my original implementation.

As an aside, I had to look up what the difference was between a hyphen and a dash, and Grammarly
[came to the rescue](https://www.grammarly.com/blog/hyphens-and-dashes/). The more you know :)
