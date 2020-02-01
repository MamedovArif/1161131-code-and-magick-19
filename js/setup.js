'use strict';

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var closeUserDialog = userDialog.querySelector('.setup-close');
var coatColor = userDialog.querySelector('input[name = coat-color]');
console.log(coatColor);
coatColor.value = 'red';
console.log(coatColor);

setupOpen.addEventListener('click', function () {
  userDialog.classList.remove('hidden');
});

closeUserDialog.addEventListener('click', function () {
  userDialog.classList.add('hidden');
});
closeUserDialog.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    userDialog.classList.add('hidden');
  }
});
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    userDialog.classList.add('hidden');
  }
});
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    userDialog.classList.remove('hidden');
  }
});
rgb (101, 137, 164)
rgb (241, 43, 107)
rgb (146, 100, 161)
rgb (56, 159, 117)
rgb (215, 210, 55)
rgb (0, 0, 0)

document.querySelector('.setup-similar').classList.remove('hidden');

var getData = function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var mainObject = {
    name: names[randomInteger(0, names.length - 1)] + ' ' + surnames[randomInteger(0, surnames.length - 1)],
    coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
    eyesColor: eyesColors[randomInteger(0, eyesColors.length - 1)],
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
userDialog.querySelector('.setup-similar').classList.remove('hidden');


