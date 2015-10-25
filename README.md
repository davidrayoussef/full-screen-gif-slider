# Full Screen Gif Slider
A slider for animated gifs that pulls gif files from a directory and displays them randomly, stretched out to fill the viewport. Features keyboard navigation and swipe functionality for mobile. Requires jQuery.

[View Demo](http://davidra.co/full-screen-gif-slider/)

# How it works
- 'fileNamesFromFolder.php' grabs image filenames from a directory, fills an array, shuffles it, and returns an array string of the filenames
- 'full-screen-gif-slider.js' loads the filenames with ajax and creates image tag elements with src="gif/filename.gif"
- Gif files are large, so in order to keep the gifs animating smoothly, loads 3 gifs initially to the DOM...
- 1 gif gets displayed on the viewport, and the other 2 are hidden offscreen to the right, so that by the time they're displayed on the viewport, they're fully loaded and looping
- Sliding the gifs works with the right arrow keyboard key ( -> ), clicking anywhere on screen, or swiping left on mobile
- After every slide, leftmost gif is removed from the dom and another is added on the right

# How to use
- Just add a folder of gifs (make sure the folder is called "gifs" ... all lowercase, no quotes)
- For best results...
  - only use horizontal, landscape images, since the images stretch to fit the screen. Vertical images will get distorted.
  - try to keep the filesizes to under 1 meg, so that they have time to load and animate

# TODO
- Refactor to vanilla JavaScript
- Add Node.js, Python and Ruby options to grab filenames from folder
- Add customization options for directory name, number of gifs to preload, welcome screen text, etc.
- Add a mobile option to choose portrait or landscape mode, one to pull from a folder of vertical gifs and the other to pull from a folder of horizontal ones