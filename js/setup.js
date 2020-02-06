'use strict';
(function () {
  var KEY_ESCAPE = 27;
  var KEY_ENTER = 13;

  var escPressPopupHandler = function (evt) {
      if (evt.keyCode === KEY_ESCAPE) {
        closePopup();
      }
    };

  var closePopup = function () {
      window.dialog.userDialog.classList.add('hidden');
      document.removeEventListener('keydown', escPressPopupHandler);
    }

  window.setup = {
    KEY_ENTER: KEY_ENTER,
    KEY_ESCAPE: KEY_ESCAPE,
    randomInteger: function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
    escPressPopupHandler: escPressPopupHandler,
    openPopup: function () {
      window.dialog.userDialog.classList.remove('hidden');
      document.addEventListener('keydown', escPressPopupHandler);
    },
    closePopup: closePopup
  }

})();
