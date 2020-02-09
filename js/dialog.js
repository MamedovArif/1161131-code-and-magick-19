'use strict';
(function () {
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
    'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userDialog = document.querySelector('.setup');
  var inputUserName = userDialog.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var closeUserDialog = userDialog.querySelector('.setup-close');

  inputUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', window.setup.escPressPopupHandler);
  });

  inputUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', window.setup.escPressPopupHandler);
  });

  setupOpen.addEventListener('click', window.setup.openPopup);

  closeUserDialog.addEventListener('click', window.setup.closePopup);
  closeUserDialog.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.setup.KEY_ENTER) {
      window.setup.closePopup();
    }
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.setup.KEY_ENTER) {
      window.setup.openPopup();
    }
  });

  var dialogHandler = userDialog.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

    window.dialog = {
    coatColors: coatColors,
    eyesColors: eyesColors,
    fireballColors: fireballColors,
    userDialog: userDialog
  };

})();
