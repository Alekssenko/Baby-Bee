/**
 * Created by Саша on 31.03.2018.
 */

//                                    POPUP


$(".close").click(function () {
    $(".popup-container").css('visibility', 'hidden');
});
$(".model-box").click(function () {
    $(".popup-container").css('visibility', 'visible');
});

//                     ================== menu======================

$('.burger').click(function (e) {
    e.stopPropagation();
    $('.nav-block').addClass('nav-visible');
});
$('.nav-block').on('click',function (e) {
    e.stopPropagation();
});
$('body').on('click',function () {

    $('.nav-block').removeClass('nav-visible');

});






