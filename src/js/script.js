// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         // speed: 1000,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="./img/arrows/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="./img/arrows/right.png"></button>',
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 dots: true,
//                 arrows: false,
//             }
//         }]
//     });
// });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
        },
        700: {
            gutter: 30
        },
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev')
})
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next')
})