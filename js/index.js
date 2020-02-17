$(function(){
  $('.contact').on('click',function(){
    $('body').prepend('<div class="bg">');
    $('.bg').fadeIn();
    $('.contact-form').fadeIn();
    $('.bg').on('click',function(){
      $(this).fadeOut().queue(function(){
        $(this).remove();
      });
      $('.contact-form').fadeOut();
    });
  });
});