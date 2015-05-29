//= require_tree
(function() {
  var handleClick = function() {
    document.querySelector('body')
            .setAttribute('class', 'playing');
  };

  document.querySelector('button')
          .addEventListener('click', handleClick);
})();
