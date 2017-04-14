## Elboya
A web app torrent client.

Links: [Source Code](https://github.com/ericdingle/elboya)

Back when Phil worked for Intel, he got me a little Intel PC as a gift. I wanted to use it as a
headless media server, and stream stuff from it on my TV. The problem I tried to solve with this
was actually downloading torrents to the PC given that it was headless. I've heard that uTorrent
does something like this, but where's the fun in that?

I thought about writing the actual torrent software myself, but that probably would have been error
prone. I ended up using libtorrent to handle that layer, and I wrote a simple Python web server to
handle interface with that library remotely. The front-end is written using Polymer which makes XHRs
to the web server to grab the current torrent states. Sunny even contributed the feature of auto
deleting torrents after the download completes (cool, but admittedly but torrent etiquette).
