'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;

  var CLOUD_X = 100; // начальные координаты
  var CLOUD_Y = 10;
  var GAP = 10; // отступ тени от облака
  var HOR_GAP = 25;
  var VERT_GAP = 35;
  var COLUMN = 40; // ширина столбца
  var DIST = 50; // расстояние между столбцами
  var coordY = CLOUD_HEIGHT - VERT_GAP; //
  var height = 150; // максимальная высота

  var distX1 = CLOUD_X + GAP + HOR_GAP;
  var distX2 = COLUMN + DIST;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var randomColor = function (hslValue) {
    var random = Math.random().toFixed(2) * 100;
    return 'hsl(' + hslValue + ',' + random + '%, 50%)';
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов: ', 120, 60);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(players[i], distX1 + i * distX2, CLOUD_HEIGHT - GAP);
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = randomColor(240);
      }
      ctx.fillRect(distX1 + i * distX2, coordY, COLUMN, -(height * times[i] / maxTime)); // чтобы столбец отсчитывался снизу вверх
      ctx.fillStyle = '#000000';
      ctx.fillText(Math.round(times[i]), distX1 + i * distX2, CLOUD_HEIGHT - GAP - VERT_GAP - (height * times[i] / maxTime));
    }
  };
})();
