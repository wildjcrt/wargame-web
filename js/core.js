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

  $('.card').draggable({delay: 200});
  $('.dice').on('click', function() {
    $(this).effect('highlight', {color: 'cyan'}, 'fast');
    var number = Math.floor(Math.random() * 6) + 1;
    $(this).attr('id', 'D'+number);
  });
});
