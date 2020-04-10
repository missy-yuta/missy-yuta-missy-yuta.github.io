

//レーティング設定-------------------------------------
$(function (){
    function rating(name,rating,color,width,size,readonly){
        $(name).starRating({
            initialRating: rating,
            strokeColor: color,
            strokeWidth: width,
            starSize: size,
            readOnly: readonly
        });
    }
    var name =['.my-rating1','.my-rating2','.my-rating3','.my-rating4'];
    var rate = [3.5,3,2.5,2];
    for(var i=0;i < 4;i++){
        rating(name[i],rate[i],'＃894A00',5,25,true);
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


//スクロールの効果
var num_cont_about = 'true'
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

});

