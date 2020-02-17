'use strict';
(function () {
  var fireball = window.dialog.userDialog.querySelector('.setup-fireball-wrap');
  var tools = window.dialog.userDialog.querySelector('.setup-wizard');
  var coatColor = tools.querySelector('.wizard-coat');
  var eyesColor = tools.querySelector('.wizard-eyes');
  var inputCoatColor = window.dialog.userDialog.querySelector('input[name = coat-color]');
  var inputEyesColor = window.dialog.userDialog.querySelector('input[name = eyes-color]');
  var inputFireballColor = fireball.querySelector('input[name = fireball-color]');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  coatColor.addEventListener('click', function () {
    var newColor = window.dialog.coatColors[window.setup.randomInteger(0, window.dialog.coatColors.length - 1)];
    this.style.fill = newColor;
    inputCoatColor.value = this.style.fill;
    wizard.onCoatChange(newColor);
  });

  eyesColor.addEventListener('click', function () {
    var newColor = window.dialog.eyesColors[window.setup.randomInteger(0, window.dialog.eyesColors.length - 1)];
    this.style.fill = newColor;
    inputEyesColor.value = this.style.fill;
    wizard.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    fireball.style.background = window.dialog.fireballColors[window.setup.randomInteger(0, window.dialog.fireballColors.length - 1)];
    inputFireballColor.value = fireball.style.background;
  });

  window.wizard = wizard;
})();
