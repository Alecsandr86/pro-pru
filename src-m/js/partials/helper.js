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
        //pagination: '.slid-brend-pagination',
        slideNextClass: '.button-slid-next',
        slidePrevClass: '.button-slid-prev',
        nextButton: '.button-slid-next',
        prevButton: '.button-slid-prev',

        slidesPerView: 7,
        slidesPerColumn: 2,
        //paginationClickable: true,
        spaceBetween: 10,
    });

    //////////////////////////////

    $(function() {

        //	wrap all thumbs in a <div> for the 3x3 grid
        $div = null;
        $('#thumbs').children().each(function(i) {
            if ( i % 9 == 0) {
                $div = $( '<div />' );
                $div.appendTo( '#thumbs' );
            }
            $(this).appendTo( $div );
            $(this).addClass( 'itm'+i );
            $(this).click(function() {
                $('#images').trigger( 'slideTo', [i, 0, true] );
            });
        });
        $('#thumbs img.itm0').addClass( 'selected' );

        //	the big-image carousel
        $('#images').carouFredSel({
            direction: 'up',
            circular: false,
            infinite: false,
            width: 310,
            height: 440,
            items: 1,
            auto: false,
            scroll: {
                fx: 'directscroll',
                onBefore: function() {
                    var pos = $(this).triggerHandler( 'currentPosition' );
                    $('#thumbs img').removeClass( 'selected' );
                    $('#thumbs img.itm'+pos).addClass( 'selected' );

                    var page = Math.floor( pos / 9 );
                    $('#thumbs').trigger( 'slideToPage', page );
                }
            }
        });

        //	the thumbnail-carousel
        $('#thumbs').carouFredSel({
            direction: 'up',
            circular: false,
            infinite: false,
            width: 295,
            height: 320,
            items: 1,
            align: false,
            auto: false,
        });
    });
    
    
    
    // \СЛАЙДЕР\

    // TABSELET
    
        $('.tabs').tabslet({
            animation: true
        });
    
    
    // \TABSELET\



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
        
        $('.nav-buyer').bind('click',function(){
            $(this).toggleClass('active').nextAll('.nav-mini').slideToggle(1000);
        });
        
        $('.nav-mega-mobail .item').bind('click',function(){
            $(this).toggleClass('active').next('.down').slideToggle(1000);
            
        });
});