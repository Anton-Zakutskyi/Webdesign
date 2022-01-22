$(document).ready(function () {
    $('.header_burger').click(function (event) {
        console.log(event);
        $('.header_burger,.header_menu ').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    navText: ['', ' '],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})