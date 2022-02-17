"use strict";

document.addEventListener("DOMContentLoaded", () => {

  //scroll to top
  const toTop = document.querySelector('.totop');
  toTop.addEventListener('click', (e) => {
    e.preventDefault;
    window.scrollBy({
      top: 0,
      behavior: 'smooth'
    });
    
  });

  // service
  const services = document.querySelectorAll('.iservice-item'),
    servicesWrap = document.querySelector('.iservice__wrap'),
    servicesColor = document.querySelectorAll('.iservice-bg');
  services.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      for (let i = 0; i < services.length; i++){
        services[i].classList.remove('active');
      }
      for (let i = 0; i < servicesColor.length; i++) {
        servicesColor[i].style.width = `100%`;
        setTimeout(() => {
          servicesColor[i].style.width = `0`;
        }, 600);
      }

      const bg = item.getAttribute('data-bg');
      servicesWrap.style.background = `url(${bg})no-repeat`;
      servicesWrap.classList.remove('-overlay');
      item.classList.add('active');
    });
  });

  // map
  ymaps.ready(function () {
    const myMap = new ymaps.Map("map", {
      center: [47.18551107429099, 39.6564245],
      zoom: 8
    });
    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      balloonContent: 'г. Ростов-на-Дону, ул. 1-я Луговая, 42Я'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'i/myIcon.svg',
      // iconImageSize: [63, 63],
      // iconImageOffset: [-5, -38]
    }),
    myPlacemark2 = new ymaps.Placemark([47.76768907413668, 39.94057949999997], {
        balloonContent: 'г. Новошахтинск, ул. Харьковская, 4'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'i/myIcon.svg',
        // iconImageSize: [63, 63],
        // iconImageOffset: [-5, -38]
      }),
      myPlacemark3 = new ymaps.Placemark([47.528464574189286, 42.13425649999997], {
        balloonContent: 'г. Волгодонск, ул. Волгодонская, 2в'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'i/myIcon.svg',
        // iconImageSize: [63, 63],
        // iconImageOffset: [-5, -38]
      });
    myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemark2)
      .add(myPlacemark3);

    

  });










//   const itop = new Swiper('.itop__slider', {
//     loop: false,
//     speed: 800,
//     pagination: {
//       el: '.itop .swiper-pagination',
//       type: "custom",
//       renderCustom: function (itop, current, total) {
//         return '<span class="pagination-current">'+('0' + current).slice(-2) + '</span> / <span class="pagination-total">' + ('0' + total).slice(-2)+'</span>';
//       }
//     },
//     navigation: {
//       nextEl: '.itop .swiper-button-next',
//       prevEl: '.itop .swiper-button-prev',
//     },
//     scrollbar: {
//       el: ".itop .swiper-scrollbar",
//     },
//   });

//   const ireviews = new Swiper('.ireviews__carousel', {
//     loop: false,
//     speed: 800,
    
//     navigation: {
//       nextEl: '.ireviews .swiper-button-next',
//       prevEl: '.ireviews .swiper-button-prev',
//     },
//   });

//   const inews = new Swiper('.inews__carousel', {
//     loop: false,
//     speed: 800,
//     navigation: {
//       nextEl: '.inews .swiper-button-next',
//       prevEl: '.inews .swiper-button-prev',
//     },
//   });

//   const team = new Swiper('.team__slider', {
//     loop: false,
//     speed: 800,
//     slidesPerView: 4,
//     spaceBetween: 30,
//     navigation: {
//       nextEl: '.team .swiper-button-next',
//       prevEl: '.team .swiper-button-prev',
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       575: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 30
//       },
//       992: {
//         slidesPerView: 4,
//         spaceBetween: 40
//       }
//     }
//   });

//   const cert = new Swiper('.cert__slider', {
//     loop: false,
//     speed: 800,
//     slidesPerView: 4,
//     spaceBetween: 30,
//     navigation: {
//       nextEl: '.cert .swiper-button-next',
//       prevEl: '.cert .swiper-button-prev',
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       575: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 4,
//         spaceBetween: 30
//       },
//     }
//   });
//   const reviews = new Swiper('.reviews__carousel', {
//     loop: false,
//     speed: 800,
//     // slidesPerView: "auto",
//     slidesPerView: 3,
//     spaceBetween: 30,
//     navigation: {
//       nextEl: '.reviews .swiper-button-next',
//       prevEl: '.reviews .swiper-button-prev',
//     },
//     breakpoints: {
     
//       320: {
//         slidesPerView: 1,
//       },
//       575: {
//         slidesPerView: 2,
//       },
//       992: {
//         slidesPerView: 3,
//       },
//     }
//   });
//   const news = new Swiper('.news__carousel', {
//     loop: false,
//     speed: 800,
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     navigation: {
//       nextEl: '.news .swiper-button-next',
//       prevEl: '.news .swiper-button-prev',
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       400: {
//         slidesPerView: "auto",
//       },
//     }
//   });

//   const getPaddingContainer = () => {
//     const fullContainer = document.querySelectorAll('.js-pl');
//     const paddingContainer = document.querySelector('.container').getBoundingClientRect();
//     console.log(paddingContainer);
//     fullContainer.forEach(item => {
//       console.log(item);
//       item.style.paddingLeft = `${paddingContainer.left+15}px`;
//     });
//   };
//   getPaddingContainer();
//   window.addEventListener('resize', getPaddingContainer, true);


//   const addPhoto = document.getElementById('r-photo');
//   addPhoto.addEventListener('change', (event) => {
//     const result = document.querySelector('.filename');
//     result.textContent = `${event.target.value}`;
//   });
  
//    // Add event listener
//    document.addEventListener("mousemove", parallax);
//    const elems = document.querySelectorAll(".parallax");

//    // Magic happens here
//    function parallax(e) {
//        let _w = window.innerWidth/2;
//        let _h = window.innerHeight/2;
//        let _mouseX = e.clientX;
//        let _mouseY = e.clientY;
//        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//      //console.log(x);
//      elems.forEach(item => {
//       item.style.backgroundPosition = x;
//      });
     
//   }
  

//   // news filter
//   if(document.querySelector('#news-month')){
//     const filterMonth = document.querySelector('#news-month'),
//       filterYear = document.querySelector('#news-year'),
//       newsParent = document.querySelector('#news-accord'),
//       newsItems = newsParent.querySelectorAll('.news__item');
    
//     function filterNews(month, year) {
//       newsItems.forEach(item => {
//         month = item.dataset.month;
//         year = item.dataset.year;
//         item.classList.remove('active');
//         if (month == filterMonth.value && year == filterYear.value) {
//           item.classList.add('active');
//         }
//       });
//     }
//     filterMonth.addEventListener('change', filterNews);
//     filterYear.addEventListener('change', filterNews);
//     filterNews(filterMonth.options[filterMonth.selectedIndex].value, filterYear.options[filterYear.selectedIndex].value);
//   }

//   // menu mobil
//   const menu = document.querySelector('#hmenu');
//   const trigger = menu.querySelectorAll('.sub-item.parent');
//   console.log(window.innerWidth);

//   if (window.innerWidth < 575) {
//     trigger.forEach((item) => {
//       item.addEventListener('click', (e) => {
//         e.preventDefault();
//         if (e.target.nextElementSibling.classList.contains('show')) {
//           e.target.nextElementSibling.classList.remove('show');
//         } else {
//           e.target.nextElementSibling.classList.add('show');
//         }
        
//         console.log(item.target.nextElementSibling);
//       });
//     });
  
//   }

//   // map
//   const regionsArray = [
//     "properties.iso3166 = 'RU-MOS'",
// ];
// ymaps.ready(init);

// function init() {

//     let projectMap  = new ymaps.Map('map', {
//         center: [55.58422718162347,37.38553349999997],
//         zoom: 8,
//         type: 'yandex#map',
//         controls: ["fullscreenControl"]
//     });

//     for (let i = 0, l = regionsArray.length; i < l; i++) {
//       ymaps.geoQuery(ymaps.borders.load("RU", {
//           lang: "ru",
//           quality: 2
//       })).search(regionsArray[i]).setOptions({
//           fillColor: "rgba(195,6,7, 0.1)",
//           strokeColor: "#ED7F01"
//       }).addToMap(projectMap);
//   }
// }



});