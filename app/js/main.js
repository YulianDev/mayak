$(function(){
    $('.activity__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        adaptiveHeight: true,
    });
    $('.recreation__tab-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.recreation__tab-link').on('click', function(e){
        e.preventDefault();
        $('.recreation__tab-link').removeClass('recreation__tab-link--active');
        $(this).addClass('recreation__tab-link--active');
  
      
        /* $('.recreation__tab-card--active').addClass('recreation__tab-card--scroll'); */
        $('.recreation__tab-card').removeClass('recreation__tab-card--active');
        $($(this).attr('href')).addClass('recreation__tab-card--active');
        $('.recreation__tab-slider').slick('setPosition', 0);
      });
});

let map;
let contactMap;

function initRecreationMap() {
  map = new google.maps.Map(document.querySelector(".recreation__location-map"), {
    center: { lat: 45.52232881085169, lng: 29.6357916676683 },
    zoom: 16,
  });
};

function initContactMap() {
    contactMap = new google.maps.Map(document.querySelector(".contact__map"), {
    center: { lat: 45.47233956840752, lng: 29.25397999259441 },
    zoom: 16,
  });
}