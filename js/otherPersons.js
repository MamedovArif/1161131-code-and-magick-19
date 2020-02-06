'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var getData = function () {
    var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

    var mainObject = {
      name: names[window.setup.randomInteger(0, names.length - 1)] + ' ' + surnames[window.setup.randomInteger(0, surnames.length - 1)],
      coatColor: window.dialog.coatColors[window.setup.randomInteger(0, window.dialog.coatColors.length - 1)],
      eyesColor: window.dialog.eyesColors[window.setup.randomInteger(0, window.dialog.eyesColors.length - 1)],
    };

    return mainObject;
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var wizards = [getData(), getData(), getData(), getData()];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  window.dialog.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
