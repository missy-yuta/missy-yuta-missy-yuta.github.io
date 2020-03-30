



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
   // #で始まるリンクをクリックしたら実行されます
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



var num_cont_about = 'true'

//スクロールの効果
$(function (){
    console.log($(window).scrollTop());
    
    $('#portfolio_title h1').animate({
        opacity: 1,
        top: 150
    }, 1000,'swing');
    $('#portfolio_title h2').animate({
        opacity: 1,
        top: 400
    }, 1200,'swing');

    $(window).scroll(function(){
        var value = $(this).scrollTop();  //スクロール値を取得
        //スクロール400px以上で表示 

        if(value > 300 && num_cont_about){
            $('#portfolio_title h1').animate({
                top: 250,
                opacity: 0
            }, 700,'swing');
            num_cont_about = false;
            $('#portfolio_title h2').animate({
                top: 500,
                opacity: 0
            }, 500,'swing');
            num_cont_about = false;
        }

        if(value < 300 && !num_cont_about){
            $('#portfolio_title h1').animate({
                top: 150,
                opacity: 1
            }, 500,'swing');
            $('#portfolio_title h2').animate({
                top: 400,
                opacity: 1
            }, 600,'swing');
            num_cont_about = true;
        }
        $('#scrollValue').text(value);
    });
});

