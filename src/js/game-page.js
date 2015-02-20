app.router.add('', function () {
  app.gamePage(8);
});

app.router.add('easy', function () {
  app.gamePage(8);
});

app.router.add('hard', function () {
  app.gamePage(16);
});

app.gamePage = function (numPairs) {
  var template = _.template($('#gameBoard').html(), { variable: 'm' });
  var html = template({
    cards: app.gameDeck(numPairs)
  });

  $('.main-content').html(html);
};
