$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('.navbar').addClass('sticky');
        $('.btn-menu-color').addClass('unvisible');
        $('.btn-menu-white').removeClass('unvisible');
    } else {
        $('.navbar').removeClass('sticky');
        $('.btn-menu-white').addClass('unvisible');
        $('.btn-menu-color').removeClass('unvisible');
    }
});

$('.toggle-menu').click(function(e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
});

$('.nav-link').click(function(e) {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('.menu').removeClass('active');
})

const swiperHeader = new Swiper('.headerSwiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },  
 });


 const swiperProjects = new Swiper('.projectSwiper', {
    // Optional parameters
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });