// effect of navigation bar appear after a delay
// https://teamtreehouse.com/community/how-to-make-a-button-and-text-appear-after-a-delay

// smooth scrolling effect for when clicking on objects in the navigation bar:
// http://stackoverflow.com/questions/21835012/onclick-function-based-on-element-id

// showing my name letter by letter:
// http://stackoverflow.com/questions/7264974/show-text-letter-by-letter

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
    var $home = $('#home');
    $home.html($home.text().replace('|', '<span class="blinking">|</span>'));
  }
}

$(document).ready(function() {
  $("#nav_bar").hide().delay(2500).fadeIn();
  showText("#home", "Ahsan Azim|", 0, 250);
  $("#nav_home").click(function() {
    $('html, body').animate({
      scrollTop: $( "#home_proxy" ).offset().top
    }, 500);
    return false;
  });
  $("#nav_this_website").click(function() {
    $('html, body').animate({
      scrollTop: $( "#this_website" ).offset().top
    }, 500);
    return false;
  });
  $("#nav_contact").click(function() {
    $('html, body').animate({
      scrollTop: $( "#contact" ).offset().top + 200
    }, 500);
    return false;
  });
  $("#nav_about").click(function() {
    $('html, body').animate({
      scrollTop: $( "#about" ).offset().top - 50
    }, 500);
    return false;
  });
  var scroll_start = 0;
  var startchange = $('#about');
  var offset = startchange.offset();
   if (startchange.length){
  $(document).scroll(function() {
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top - 70) {
       $("#nav_bar").css('background-color', 'white');
       $(".nav_bar_items a").css('color', 'black');
       $(".nav_bar_items a i").css('color', 'black');
     } else {
       $("#nav_bar").css('background-color', '#18121E');
       $(".nav_bar_items a").css('color', 'white');
       $(".nav_bar_items a i").css('color', 'white');
     }
  });
   }
});

// needed the underscore to blink, code taken from following link:
// http://www.computerhope.com/issues/ch001651.htm
function blinker() {
  $('.blinking').fadeOut(650);
  $('.blinking').fadeIn(650);
}
setInterval(blinker, 1350);
