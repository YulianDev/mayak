$(function(){
    $('.activity__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive:[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
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




/* Map init */
let map;
let contactMap;

function initRecreationMap() {
  const uluru = { lat: 45.52232881085169, lng: 29.6357916676683 };
  map = new google.maps.Map(document.querySelector(".recreation__location-map"), {
    center: uluru,
    zoom: 16,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
};

function initContactMap() {
    const uluru = { lat: 45.47233956840752, lng: 29.25397999259441 };
    contactMap = new google.maps.Map(document.querySelector(".contact__map"), {
    center: uluru,
    zoom: 16,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: contactMap,
  });
}


/* Menu-burger */

const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
if(menuIcon) {
  menuIcon.addEventListener('click', function(e) {
    toogleMenu();
  });
}

/* Check click out of menu */
document.addEventListener('click', (e) => {
  let target = e.target;
  let isMenu = target == menuList || menuList.contains(target);
  let isMenuBtn = target == menuIcon;
  let menuActive = menuList.classList.contains('menu__list--active');

  if(!isMenu && !isMenuBtn && menuActive) {
    toogleMenu();
  }
});

function toogleMenu() {
  document.body.classList.toggle('lock');
  menuIcon.classList.toggle('menu__icon--active');
  menuList.classList.toggle('menu__list--active');
}

/* Check device */
  const isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };


/* Scroll-top and change link state depend. on device  */
const scrollLink = document.querySelector('.scroll-top__link');
let headerHeight = document.querySelector('.header').offsetHeight;


/* Link state changing for mobile*/
if(isMobile.any()) {
  scrollLink.classList.remove('scroll-top__link--hover');
  scrollLink.classList.add('scroll-top__link--focus');
}


/* Display arrow */
window.addEventListener('scroll', () => {
  if(window.pageYOffset >= headerHeight) {
    scrollLink.style.display = "block";
  } else {
    scrollLink.style.display = "none";
  }
});

/* Arrow click func. */
if(scrollLink) {
  scrollLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  });
}