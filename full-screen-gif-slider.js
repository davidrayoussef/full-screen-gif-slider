(function ($) {
'use strict';

  $(function() {

    var slider = $('#slider');
    var wrapper = $('#wrapper');
    var container = $('#images');
    var url = 'fileNamesFromFolder.php';
    var fileNamesText;
    var fileNamesArray;
    var winWidth;
    var winHeight;

    container.load(url, function() {
      fileNamesText = container.text();
      fileNamesText = JSON.parse("[" + fileNamesText + "]");
      fileNamesArray = fileNamesText.reduce(function(a,b) {
        return a.concat(b);
      }).map(function(v) {
        return 'gifs/' + v;
      });

      var viewsLeft = fileNamesArray.length;

      addThreeImages();

      slider.on('click', slide);

      // add swipe functionality for mobile
      slider.on('swipeleft', slide);

      // add keyboard navigation
      $(document).keydown(function(e) {
        if (e.keyCode == 39) { // 39 == right arrow keyboard key
          slide();
          return false;
        }
      });

      function slide() {
        viewsLeft--;
        if(viewsLeft > 0) {
          popAddImage(fileNamesArray);
          removeFirstChild(slider);
        }
        else alert('Sorry no more gifs');
      }

      // add 3 initial images. gifs are large so they need to be preloaded. one on main viewport, two hidden offscreen to the right.
      function addThreeImages() {
          for (var i = 0; i < 3; i++) {
          popAddImage(fileNamesArray);
        }
      }

      function popAddImage(array) {
        var image = document.createElement('img');
        image.setAttribute('src', array.pop());
        image.setAttribute('width', winWidth);
        image.setAttribute('height', winHeight);
        slider.append(image);
      }

      function removeFirstChild(element) {
        $(element.find('img:first')[0]).animate({
          'margin-left': -(winWidth)}, 500, 'linear', function() {
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
    });

    function setWindowSize() {
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;

      wrapper.css('width', winWidth);
      wrapper.css('height', winHeight);
      slider.css('width', winWidth * 3);
    };

    window.addEventListener("resize", function() {
      setWindowSize();
      var imagesToResize = document.getElementsByTagName("img");
      Array.apply(null, imagesToResize).map(function(image){
        image.setAttribute('width', winWidth);
        image.setAttribute('height', winHeight);
      });
    }, false);

    setWindowSize();

  });

  // remove 'loading' text
  setTimeout(function() {
    $('body').find('.ui-loader h1').remove();
  }, 1000);

})( jQuery );