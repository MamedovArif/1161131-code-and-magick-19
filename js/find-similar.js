'use strict';
(function () {
  var jacketColor;
  var pupilsColor;
  var magicians = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === jacketColor) {
      rank += 2;
    }
    if (wizard.colorEyes === pupilsColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.render(magicians.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };
  //  Перезаписываем обработчики-пустышки,
  // объявленные в wizard.js
  window.wizard.onEyesChange = function (color) {
    pupilsColor = color;
    window.debounce(updateWizards);
  };

  window.wizard.onCoatChange = function (color) {
    jacketColor = color;
    window.debounce(updateWizards);
  };


  var successLoad = function (wizards) {
    magicians = wizards;
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
