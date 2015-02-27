/*
    Filename: PersonalPortfolioWebsite
    Author: Kristian Castaneda
    Website Name: Kristian Castaneda's Mobile Website
    File Description: A personal portfolio mobile website made using JQuery Mobile
*/

//Sider Settings
$(document).ready(function () {
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

//Redirect to project page function
function project() {
    window.location = '#project';
}

//Redirect to services page function
function services() {
    window.location = '#services';
}