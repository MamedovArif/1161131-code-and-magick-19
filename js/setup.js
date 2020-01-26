'use strict';
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var catalog = document.querySelector('.setup');
catalog.classList.remove('hidden');

var persons = [];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

for (var i = 0; i < 4; i++) {
  var fullname = [`${names[randomInteger(0, names.length - 1)]}`, `${surnames[randomInteger(0, surnames.length - 1)]}`];
  var mainObject = {
    number: i,
    name: `${fullname[randomInteger(0, 1)]} ${fullname[randomInteger(0, 1)]}`,
    coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
    eyesColor: eyesColors[randomInteger(0, eyesColors.length - 1)],
  }

  persons.push(mainObject);
}

console.log(persons);
