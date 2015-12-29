// ref: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/2880929#2880929
var urlParams;
(window.onpopstate = function () {
  var match,
      pl     = /\+/g, // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); },
      query  = window.location.search.substring(1);

  urlParams = {};
  while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);
})();

// Shuffle function
(function() {
  $.fn.shuffle = function() {
    var allElems = this.get(),
      getRandom = function(max) {
        return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function(){
        var random = getRandom(allElems.length),
            randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
     });

    this.each(function(i){
      $(this).replaceWith($(shuffled[i]));
    });

    return $(shuffled);
  };
})();

// Move counters according to query string
var counters = {};
if (urlParams.counter !== undefined) {
  counterArray = urlParams.counter.split(',');
  for (var i = 0; i < counterArray.length; i++) {
    // itemArray format:
    // 0: serial
    // 1: left
    // 2: top
    // 3: front/back
    itemArray = counterArray[i].split(':');
    $('#counter' + itemArray[0]).css({left: itemArray[1] + 'px', top: itemArray[2] + 'px'});
    if (itemArray[3] === 'f') {
      $('#counter' + itemArray[0]).removeClass('back').addClass('front');
    }
    if (itemArray[3] === 'b') {
      $('#counter' + itemArray[0]).removeClass('front').addClass('back');
    }
    counters[itemArray[0]] = itemArray[1] + ':' + itemArray[2] + ':' + itemArray[3];
  }
}
