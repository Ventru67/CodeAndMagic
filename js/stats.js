'use strict'

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_HEIGHT - GAP - BAR_HEIGHT - GAP - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);
  ctx.fillStyle = '#000';

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = '#B22222';
    } else {
      ctx.fillStyle = 'rgba(0, 50, 255, ' + (Math.random() * (1 - 0.5) + 0.5) + ')';
    }

    ctx.fillRect(CLOUD_X + GAP + (GAP + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP, TEXT_WIDTH, - ((barWidth * times[i]) / maxTime));
    ctx.fillStyle = '#000'


  }

  console.log(getMaxElement(times));
};
