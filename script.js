/**
 * Created by Саша on 31.03.2018.
 */

//                                    POPUP
//                                                 ПЕРВЫЙ ВАРИАНТ HIDE-SHOW
//        $(document).ready(popupHide());
//        function popupHide() {
//            $(".popup-conteiner").hide();
//        }
//        function popupShow() {
//            $(".popup-conteiner").show();
//        }
//        $(".model-box").click(function(){popupShow()});
//        $(".close").click(function(){popupHide()});
/* ВТОРОЙ ВАРИАНТ  НА СВОЙСТВЕ      CSS*/

$(".close").click(function () {
    $(".popup-conteiner").css('visibility', 'hidden');
});
$(".model-box").click(function () {
    $(".popup-conteiner").css('visibility', 'visible');
});
//$(".close").click(function () {
//    $(".popup-conteiner").css('display', 'none');
//});
//$(".model-box").click(function () {
//    $(".popup-conteiner").css('display', 'block');
//});
//                      МЕНЮ        КАЧЕЛИ

$('.burger').click(function (e) {
    e.stopPropagation();
    $('.nav-block').addClass('nav-visible');
});
$('.nav-block').on('click',function (e) {
    e.stopPropagation();
})
$('body').on('click',function () {

    $('.nav-block').removeClass('nav-visible');

});

//                       ПЕРВЫЙ ВАРИАНТ ПО ШИРИНЕ ОКНА БРАУЗЕРА
//    $(window).resize(function () {
//        if ($(window)>600){
//            $('nav').removeAttr('style');
//        }
//    })




