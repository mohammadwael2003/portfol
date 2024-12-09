
$(window).scroll(function() {
    let top = $(window).scrollTop();

    if (top > 500) {
        $('.top').fadeIn();
    }else {
        $('.top').fadeOut();
    }
})

$('.top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});



var x= aaaaa;
typeof(x);