// ハンバーガーメニュー設定

(function() {
  'use strict';

  var show = document.getElementById('show');
  var hide = document.getElementById('hide');

  show.addEventListener('click', function() {
  document.body.className = 'menu-open';
  });

  hide.addEventListener('click', function() {
  document.body.className = '';
  });
})();


/*Swiper使用のスライド-----------------------------------------*/
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 10,
  autoplay:{
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-my-pagination',
    type: 'progressbar',
    clickable: true,
  },
});  


