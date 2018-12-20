$(function () {
    $('.cursor').confettiButton();
});
$(document).mousemove(function (e) {
    $('.cursor').css({
        left: e.pageX,
        top: e.pageY,
    })
})