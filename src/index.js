import './sass/main.sass';
import $ from 'jquery';

$(document).ready(function() {
  $('#hamburger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('hamburger__active');
    $('#navigation').toggleClass('header__mobile-open');
  });
});
