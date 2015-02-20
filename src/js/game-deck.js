// gameDeck will return an array with numPairs pairs
// of cards, randomized...
app.gameDeck = function (numPairs) {
  var cards = 'abcdefghijklmnop'.split('').slice(0, numPairs);

  // Double my array, so ['a', 'b', 'c'] becomes
  // ['a', 'b', 'c', 'a', 'b', 'c']
  cards = cards.concat(cards);

  function swap(arr, x, y) {
    var tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
  }

  function shuffle(arr) {
    for (var i = 0; i < arr.length; ++i) {
      var randomIndex = Math.floor(Math.random() * arr.length);
      swap(arr, i, randomIndex);
    }

    return arr;
  }

  return shuffle(cards);
};
