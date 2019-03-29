var showSetup = document.querySelector('.setup').classList.remove('hidden');
var playersNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var playersLastnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var nameRandom = function(arr) {
  var rand = Math.floor(Math.random() * (arr.length));
  return arr[rand];
};

var playersList = [
  {
    name: nameRandom(playersNames) + ' ' + nameRandom(playersLastnames)
  }
];

console.log(playersList);