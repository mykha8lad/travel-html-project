var owl = $('.owl-carousel');

owl.owlCarousel({
    items: 3,
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
});

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__btn--prev').click(function() {

    owl.trigger('prev.owl.carousel');
})