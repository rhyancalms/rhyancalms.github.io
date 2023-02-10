const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

$('.1').click(function(){
    $('html, body').animate({
        scrollTop: $("#hero").offset().top
    }, 500, 'swing');
});

$('.2').click(function(){
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 500, 'swing');
});

$('.3').click(function(){
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 500, 'swing');
});

$('.4').click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500, 'swing');
});

$('.5').click(function(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500, 'swing');
});