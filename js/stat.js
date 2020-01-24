'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 60;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var LINE_HEIGHT = 10;

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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var rectColor = names[i] === 'Вы'
      ? 'rgba(255, 0, 0, 1)'
      : 'hsl(240, 100%, '  + (Math.random() * 100)  + '%)';
    let height = BAR_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP * 2   + FONT_GAP + BAR_HEIGHT);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + FONT_GAP + BAR_HEIGHT - height + GAP   - LINE_HEIGHT);

    ctx.fillStyle = rectColor;
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + FONT_GAP + BAR_HEIGHT - height + GAP, BAR_WIDTH,  height);
  }
};

/* ctx.fillStyle = 'black';
ctx.fillText(playerName, CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 0, CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT);
ctx.fillStyle = 'rgba(255, 0, 0, 1)';
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 0, CLOUD_Y  + FONT_GAP, BAR_WIDTH, 150);

ctxllStyle = 'black';
ctx.fillText('Кекс', CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 1, CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT);
ctx.fillStyle = 'rgba(0, 0, 30, 1)';
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 1, CLOUD_Y  + FONT_GAP, BAR_WIDTH, 150);

ctx.fillStyle = 'black';
ctx.fillText('Катя', CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 2 , CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT);
ctx.fillStyle = 'rgba(0, 0, 195, 1)';
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 2, CLOUD_Y  + FONT_GAP, BAR_WIDTH, 150);

ctx.fillStyle = 'black';
ctx.fillText('Игорь', CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 3, CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT);
ctx.fillStyle = 'rgba(0, 0, 230, 1)';
ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * 3, CLOUD_Y  + FONT_GAP, BAR_WIDTH, 150);

}; */

