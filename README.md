# Full Screen Gif Slider
A slider for animated gifs that pulls gif files from a directory and displays them randomly, stretched out to fill the viewport. Features keyboard navigation and swipe functionality for mobile. Requires jQuery.

[View Demo](http://davidra.co/full-screen-gif-slider/)

How to use
----------
```shell
$ git clone https://github.com/davidrayoussef/full-screen-gif-slider.git
$ Add a folder of gifs within the public folder (make sure the folder is called "gifs" ... all lowercase, no quotes)
$ cd full-screen-gif-slider
$ npm start
$ Point your browser to http://localhost:3000/
```
- For best results...
  * only use horizontal, landscape images, since the images stretch to fit the screen. Vertical images will get distorted.
  * try to keep the filesizes under 1 meg, so that they have time to load and animate

  TODO
  ----
  Refactor to vanilla JavaScript instead of jQuery.
