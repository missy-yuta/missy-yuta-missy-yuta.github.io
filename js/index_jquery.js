

//レーティング設定-------------------------------------
$(function (){
    function sample(name,rating,color,width,size,readonly){
        $(name).starRating({
            initialRating: rating,
            strokeColor: color,
            strokeWidth: width,
            starSize: size,
            readOnly: readonly
        });
    }
    var name =[".my-rating1",".my-rating2",".my-rating3",".my-rating4"];
    var rate = [3.5,3,2.5,2];
    for(var i=0;i < 4;i++){
        sample(name[i],rate[i],'＃894A00',5,25,true);
    }

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


        if(value > 900 && value < 4500){
            $('#page_top').css('opacity', '1');
            $('#page_top').css('margin-top', '50px');
        }else{
            $('#page_top').css('opacity', '0');
            $('#page_top').css('margin-top', '0px');
        }

        $('#scrollValue').text(value);
    });
});

