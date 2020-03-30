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




{
  const menuItems = document.querySelectorAll('.menu_img li a');
  const contents = document.querySelectorAll('.content_1');
  menuItems.forEach(clickedItem =>{
    clickedItem.addEventListener('click', e =>{
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

