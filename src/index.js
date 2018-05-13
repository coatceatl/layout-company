import './sass/main.sass';
console.log('webpack');

import $ from 'jquery';

$(document).ready(function() {
  $('#hamburger').on('click', function(e) {
    e.preventDefault();
    $('#navigation').toggleClass('header-nav__menu__mobile-open');
  });
});
