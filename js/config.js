// ref: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/2880929#2880929
var urlParams;
(window.onpopstate = function () {
  var match,
      pl     = /\+/g, // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
      query  = window.location.search.substring(1);

  urlParams = {};
  while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);
})();

// Move counters according to query string
var counters = {};
if (urlParams.counter !== undefined) {
  counter_array = urlParams.counter.split(',');
  for (var i = 0; i < counter_array.length; i++) {
    // item_array format:
    // 0: serial
    // 1: left
    // 2: top
    // 3: front/back
    item_array = counter_array[i].split(':');
    $('#counter' + item_array[0]).css({left: item_array[1] + 'px', top: item_array[2] + 'px'});
    if (item_array[3] === 'f') {
      $('#counter' + item_array[0]).removeClass('back').addClass('front');
    }
    if (item_array[3] === 'b') {
      $('#counter' + item_array[0]).removeClass('front').addClass('back');
    }
    counters[item_array[0]] = item_array[1] + ':' + item_array[2] + ':' + item_array[3];
  }
}
