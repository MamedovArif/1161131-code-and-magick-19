'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var HOR_GAP = 25;
var VERT_GAP = 35;
var COLUMN = 40;
var DIST = 50;

var MAX_HEIGHT = 110;
var coordY = CLOUD_HEIGHT - VERT_GAP;
var height = 150;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000'
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = "#000000";
    ctx.fillText(players[i], CLOUD_X + GAP + HOR_GAP + i * (COLUMN + DIST), CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      var rando = Math.random().toFixed(2) * 100;
      alert(rando);
      ctx.fillStyle = 'hsl(240,' + rando + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + HOR_GAP + i * (COLUMN + DIST), coordY, COLUMN, -(height * times[i] / maxTime));
  }
}



