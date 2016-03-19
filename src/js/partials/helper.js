//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //   Формы
    setTimeout(function() {
        $('input, select').styler();
    }, 100) ;

    //  \Формы\

   
    
    
    
    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {}

    // СЛАЙДЕР
    var slidBrend = new Swiper('.slid-brend', {
        pagination: '.slid-brend-pagination',
        slideNextClass: '.button-slid-next',
        slidePrevClass: '.button-slid-prev',
        nextButton: '.button-slid-next',
        prevButton: '.button-slid-prev',

        slidesPerView: 7,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 10,
    });

    // \СЛАЙДЕР\





        $(function() {
            $('.nav-mega .item').bind('mouseenter',function(){
                $(this).addClass('active');
            });
        });
        $(function() {
            $('.nav-mega .item').bind('mouseleave',function(){
                $('.nav-mega .item').removeClass('active');
            });
        });


        $(function() {
            $('.nav-mega .down').bind('mouseenter',function(){
                $(this).prev('.item').addClass('active');
            });
        });
        $(function() {
            $('.nav-mega .down').bind('mouseleave',function(){
                $('.nav-mega .item').removeClass('active');
            });
        });



        $('.list-sort .button-sort').bind('click',function(){
            $('.list-sort .button-sort').removeClass('active');
            $(this).addClass('active');
        });

});