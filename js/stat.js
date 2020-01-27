'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var CLOUD_COLOR = '#fff';
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';
  var FONT_GAP = 10;
  var FONT_HEIGHT = 80;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;

  var renderRect = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderCloud = function (ctx, x, y, gap) {
    renderRect(ctx, x + gap, y + gap, SHADOW_COLOR);
    renderRect(ctx, x, y, CLOUD_COLOR);
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

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X, CLOUD_Y, GAP);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + (3 * FONT_GAP));

    var mainY = CLOUD_Y + FONT_HEIGHT + BAR_HEIGHT;
    var maxTime = getMaxElement(times);
    for (var i = 0; i < names.length; i++) {
      var rectColor = names[i] === 'Вы'
        ? 'rgba(255, 0, 0, 1)'
        : 'hsl(240, 100%, ' + (Math.random() * 100) + '%)';
      var height = BAR_HEIGHT * times[i] / maxTime;
      var currentX = CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i;

      ctx.fillStyle = 'black';
      ctx.fillText(names[i], currentX, mainY + FONT_GAP * 2);
      ctx.fillText(Math.ceil(times[i]), currentX, mainY - height - FONT_GAP);

      ctx.fillStyle = rectColor;
      ctx.fillRect(currentX, mainY - height, BAR_WIDTH, height);
    }
  };
})();
