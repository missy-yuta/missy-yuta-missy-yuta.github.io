

//scroll fadeIn-------------------------------------
$(function (){
    console.log($(window).scrollTop());
    $(window).scroll(function(){
        if($(window).scrollTop() > 900 && $(window).scrollTop() < 4500){
            $('#page_top').css('opacity', '1');
            $('#page_top').css('margin-top', '50px');
        }else{
            $('#page_top').css('opacity', '0');
            $('#page_top').css('margin-top', '0px');
        }
    });
});
//--------------------------------------------------


//ページ内でスクロール移動処理
$(function(){
   // #で始まるリンクをクリックしたら実行される
   $('a[href^="#"]').click(function() {
   // スクロールの速度
   var speed = 400; // ミリ秒で記述
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({scrollTop:position}, speed, 'swing');
   return false;
   });
});


var num_cont = true;
//スクロールの効果
$(function (){
    $('.parallax-window').parallax({imageSrc: 'images/img_top.jpg'});
    $('.parallax-window_s').parallax({imageSrc: 'images/img_about.jpg'});

    $(window).scroll(function(){
        var value = $(this).scrollTop();  //スクロール値を取得

        if(value > 1200){
            $('.cafe_img img').animate({
                top: 0,
                opacity: 1,
            }, 500,'swing');
        }
        if(value > 2000 && num_cont){
            $('.menu_list').css('background-color','rgba(255, 255, 255,0.8)' );
            num_cont = false;
        }
        if(value < 2000 && !num_cont){
            $('.menu_list').css('background-color','rgba(255, 255, 255,0)' );
            num_cont = true;
        }
        

    });
});


//swiper
$(function() {
    $('.swiper_master').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    　　arrows: true,
    slidesToShow:3, //768px以上のサイズに適用
    responsive: [
        {
         breakpoint: 768, //767px以下のサイズに適用
         settings: {
           slidesToShow:2
         }
        }
      ]
    });
});