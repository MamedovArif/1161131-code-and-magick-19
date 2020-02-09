'use strict';
(function () {
  var fireball = window.dialog.userDialog.querySelector('.setup-fireball-wrap');
  var tools = window.dialog.userDialog.querySelector('.setup-wizard');
  var coatColor = tools.querySelector('.wizard-coat');
  var eyesColor = tools.querySelector('.wizard-eyes');
  var inputCoatColor = window.dialog.userDialog.querySelector('input[name = coat-color]');
  var inputEyesColor = window.dialog.userDialog.querySelector('input[name = eyes-color]');
  var inputFireballColor = fireball.querySelector('input[name = fireball-color]');

  coatColor.addEventListener('click', function () {
    coatColor.style.fill = window.dialog.coatColors[window.setup.randomInteger(0, window.dialog.coatColors.length - 1)];
    inputCoatColor.value = coatColor.style.fill;
  });

  eyesColor.addEventListener('click', function () {
    eyesColor.style.fill = window.dialog.eyesColors[window.setup.randomInteger(0, window.dialog.eyesColors.length - 1)];
    inputEyesColor.value = eyesColor.style.fill;
  });

  fireball.addEventListener('click', function () {
    fireball.style.background = window.dialog.fireballColors[window.setup.randomInteger(0, window.dialog.fireballColors.length - 1)];
    inputFireballColor.value = fireball.style.background;
  });

  var form = window.dialog.userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      window.dialog.userDialog.classList.add('hidden');
    }, function (status) {
      window.dialog.userDialog.classList.remove('hidden');
      alert(status);
    });
    evt.preventDefault();
  });
})();
