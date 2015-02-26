$(function () {
    $("#slider").excoloSlider({
        autoPlay: true,
        prevnextNav: true,
        prevnextAutoHide: true,
        pagerNav: true,
        touchNav: true,
        mouseNav: true,
        hoverPause: true,
        delay: 0,
        interval: 5000
    });
});

function project() {
    window.location = '#project';
}
function services() {
    window.location = '#services';
}