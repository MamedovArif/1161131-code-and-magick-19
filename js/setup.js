'use strict';
var KEY_ESCAPE = 27;
var KEY_ENTER = 13;

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var inputUserName = userDialog.querySelector('.setup-user-name');
var fireball = userDialog.querySelector('.setup-fireball-wrap');
var tools = userDialog.querySelector('.setup-wizard');
var coatColor = tools.querySelector('.wizard-coat');
var eyesColor = tools.querySelector('.wizard-eyes');
var inputCoatColor = userDialog.querySelector('input[name = coat-color]');
var inputEyesColor = userDialog.querySelector('input[name = eyes-color]');
var inputFireballColor = fireball.querySelector('input[name = fireball-color]');
var setupOpen = document.querySelector('.setup-open');
var closeUserDialog = userDialog.querySelector('.setup-close');

coatColor.addEventListener('click', function () {
  coatColor.style.fill = coatColors[randomInteger(0, coatColors.length - 1)];
  inputCoatColor.value = coatColor.style.fill;
});

eyesColor.addEventListener('click', function () {
  eyesColor.style.fill = eyesColors[randomInteger(0, eyesColors.length - 1)];
  inputEyesColor.value = eyesColor.style.fill;
});

fireball.addEventListener('click', function () {
  fireball.style.background = fireballColors[randomInteger(0, fireballColors.length - 1)];
  inputFireballColor.value = fireball.style.background;
});

var escPressPopupHandler = function (evt) {
  if (evt.keyCode === KEY_ESCAPE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', escPressPopupHandler);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', escPressPopupHandler);
};

inputUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', escPressPopupHandler);
});

inputUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', escPressPopupHandler);
});

setupOpen.addEventListener('click', function () {
  openPopup();
});

closeUserDialog.addEventListener('click', function () {
  closePopup();
});
closeUserDialog.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    closePopup();
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    openPopup();
  }
});

document.querySelector('.setup-similar').classList.remove('hidden');

var getData = function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

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


