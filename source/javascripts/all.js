//= require_tree
(function() {
  var body = document.querySelector('body'),
      handlePlay = function() {
        body.className = 'playing';
        setTimeout(setPlayed, 9000);
      },
      handleRewind = function() {
        body.className = '';
      },
      setPlayed = function () {
        body.className = body.className + ' played';
      };

  document.querySelector('button.play')
          .addEventListener('click', handlePlay);

  document.querySelector('button.rewind')
          .addEventListener('click', handleRewind);
})();
