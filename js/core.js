$(document).ready(function() {
  $('.counter')
    .draggable({delay: 200})
    .on('dblclick', function() {
      if ($(this).attr('class').indexOf('front') > 0) {
        $(this).removeClass('front').addClass('back');
      } else {
        $(this).removeClass('back').addClass('front');
      }
    });

  var eventCardCounter = 1;
  $('.card')
    .draggable({delay: 200})
    .on('dblclick', function() {
      if ($(this).attr('class').indexOf('front') > 0) {
        $(this).removeClass('front').addClass('back')
        eventCardCounter -= 1;
      } else {
        $(this).removeClass('back').addClass('front').css('z-index', eventCardCounter);
        eventCardCounter += 1;
      }
    });

  $('.dice').on('click', function() {
    $(this).effect('highlight', {color: 'cyan'}, 'fast');
    var number = Math.floor(Math.random() * 6) + 1;
    $(this).attr('id', 'D'+number);
  });

  // shuffle cards
  var cards = $('.card.back').shuffle();
  for (var i = 0; i < cards.length; i++) {
    $(cards[i]).css('z-index', i+1);
  }
});
