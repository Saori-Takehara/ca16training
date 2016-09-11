$(function(){

    var videoHeight;

    videoHeight = $('.wrapvideo').find('video').height();
    console.log(videoHeight);
    $('.wrapvideo').css({'height':videoHeight});

    var box = $(".nav6");
    var boxTop = box.offset().top;
    // console.log('boxTop'+boxTop);

    $(window).resize(function(){
      videoHeight = $('.wrapvideo').find('video').height();
      console.log(videoHeight);
      $('.wrapvideo').css({'height':videoHeight});


      boxTop = box.offset().top;
      // console.log('boxTop'+boxTop);

    });


    $(window).scroll(function () {

      console.log($(window).scrollTop());
        if($(window).scrollTop() >= boxTop) {
            box.addClass("fixed");


        } else {
            box.removeClass("fixed");

        }
    });
});
