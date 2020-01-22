'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var rebderText = function(ctx, size, family, text, x, y) {
  ctx.font = size + ' ' + family;
  ctx.fillText(text, x, y)
}

window.renderStatistics = function(ctx, names, times) {
  rebderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  rebderCloud(ctx, 100, 10,, 'white');

  rebderText(ctx, '16px', 'PT Mono', 'Ура вы победили!', 0, 10);
  rebderText(ctx, '16px', 'PT Mono', 'Список результатов: ', 0, 30);

}
