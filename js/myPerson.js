'use strict';
(function () {
  var fireball = window.dialog.userDialog.querySelector('.setup-fireball-wrap');
  var tools = window.dialog.userDialog.querySelector('.setup-wizard');
  var coatColor = tools.querySelector('.wizard-coat');
  var eyesColor = tools.querySelector('.wizard-eyes');
  var inputCoatColor = window.dialog.userDialog.querySelector('input[name = coat-color]');
  var inputEyesColor = window.dialog.userDialog.querySelector('input[name = eyes-color]');
  var inputFireballColor = fireball.querySelector('input[name = fireball-color]');

  var jacketColor;
  var pupilsColor;
  var magicians = []; //console.log(magicians)

  var updateWizards = function () {
    var sameCoatAndEyesMagicians = magicians.filter(function (item) {
      return item.colorCoat === jacketColor &&
        item.colorEyes === pupilsColor;
    });

    var sameCoatMagicians = magicians.filter(function(item) {
      return item.colorCoat === jacketColor;
    });
    var sameEyesMagicians = magicians.filter(function(item) {
      return item.colorEyes === pupilsColor;
    });

    var filteredMagicians = sameCoatAndEyesMagicians;
    filteredMagicians = filteredMagicians.concat(sameCoatMagicians);
    filteredMagicians = filteredMagicians.concat(sameEyesMagicians);
    filteredMagicians = filteredMagicians.concat(magicians);

    var uniqueMagicians =
    filteredMagicians.filter(function (item, index) {
      return filteredMagicians.indexOf(item) === index;
    });

    window.render.render(uniqueMagicians);
  }

  coatColor.addEventListener('click', function () {
    var newColor = window.dialog.coatColors[window.setup.randomInteger(0, window.dialog.coatColors.length - 1)];
    this.style.fill = newColor;
    inputCoatColor.value = this.style.fill;
    jacketColor = newColor;

    updateWizards();
  });

  eyesColor.addEventListener('click', function () {
    var newColor = window.dialog.eyesColors[window.setup.randomInteger(0, window.dialog.eyesColors.length - 1)];
    this.style.fill = newColor;
    inputEyesColor.value = this.style.fill;
    pupilsColor = newColor;

    updateWizards();
  });

  fireball.addEventListener('click', function () {
    fireball.style.background = window.dialog.fireballColors[window.setup.randomInteger(0, window.dialog.fireballColors.length - 1)];
    inputFireballColor.value = fireball.style.background;
  });

  var successLoad = function (wizards) {
    magicians = wizards;
    console.log(magicians);
    updateWizards();
  };

  var errorLoad = function (error) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = error;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successLoad, errorLoad);


  var succsessUpload = function () {
    window.dialog.userDialog.classList.add('hidden');
  };

  var unsuccessfulUpload = function (text) {
    window.dialog.userDialog.classList.remove('hidden');
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = text;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var form = window.dialog.userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), succsessUpload, unsuccessfulUpload);
    evt.preventDefault();
  });
})();
