(function($) {
'use strict';

  $(function() {

    // TODO => Refactor as a vanilla JS plugin with an options object for default variables
    var wrapper = $('#wrapper');
    var slider = $('#slider');
    var url = '/gifs';
    // Gifs are large so they need to be preloaded; use amount between 3 and 5
    var numberOfGifsToPreload = 3;
    var fileNamesArray;
    var winWidth;
    var winHeight;
    var viewsLeft;

    $.getJSON(url, function(data) {
      fileNamesArray = data.map(function(fileName) {
        return url + '/' + fileName;
      });

      viewsLeft = fileNamesArray.length;

      shuffle(fileNamesArray);

      preloadImages();

      slider.on('click', debounce(slide, 400, true));

      // add swipe functionality for mobile
      slider.on('swipeleft', slide);

      // add keyboard navigation
      $(document).on('keydown', debounce(function(e) {
        if (e.keyCode == 39) { // 39 == right arrow keyboard key
          slide();
          return false;
        }
      }, 400, true));

      function slide() {
        viewsLeft--;
        if (viewsLeft > 0) {
          popThenAddImage(fileNamesArray);
          removeFirstChild(slider);
        }
        else alert('Sorry no more gifs');
      }

      // Add 3-5 initial images. Gifs are large so they need to be preloaded.
      // One on main viewport, two hidden offscreen to the right.
      function preloadImages() {
        for (var i = 0; i < numberOfGifsToPreload; i++) {
          popThenAddImage(fileNamesArray);
        }
      }

      function popThenAddImage(array) {
        var image = document.createElement('img');
        image.setAttribute('src', array.pop() || '');
        image.setAttribute('width', winWidth);
        image.setAttribute('height', winHeight);
        slider.append(image);
      }

      function removeFirstChild(element) {
        $(element.children()[0]).animate({
          'margin-left': -(winWidth)}, 500, 'swing', function() {
          $(this).remove();
        })
      }

      function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }

      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this;
          var args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

    });

    function setWindowSize() {
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;

      wrapper.css('width', winWidth);
      wrapper.css('height', winHeight);
      slider.css('width', winWidth * 3);
    };

    window.addEventListener('resize', function() {
      setWindowSize();
      var imagesToResize = document.getElementsByTagName('img');
      Array.apply(null, imagesToResize).map(function(image){
        image.setAttribute('width', winWidth);
        image.setAttribute('height', winHeight);
      });
    }, false);

    setWindowSize();

  });

  // remove 'loading' text added by jQuery Mobile
  setTimeout(function() {
    $('body').find('.ui-loader h1').remove();
  }, 1000);

})( jQuery );
