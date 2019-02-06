$(function() {


	//slick reviews
	if(jQuery('.reviews-slider').length) {
        $('.reviews-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: '<span class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50"><defs><path id="gov1a" d="M1357.021 2713.999c-13.78 0-25.021-11.197-25.021-25.022 0-13.824 11.197-24.978 25.021-24.978 13.825 0 24.979 11.197 24.979 24.978 0 13.782-11.197 25.022-24.979 25.022zm0-46.512c-11.843 0-21.49 9.647-21.49 21.49 0 11.844 9.647 21.49 21.49 21.49 11.844 0 21.49-9.646 21.49-21.49 0-11.843-9.646-21.49-21.49-21.49zm-2.368 33.98a1.725 1.725 0 0 1-1.25.517c-.43 0-.903-.173-1.248-.517a1.768 1.768 0 0 1 0-2.498l10.12-10.12-10.12-10.121a1.768 1.768 0 0 1 0-2.498 1.768 1.768 0 0 1 2.498 0l11.37 11.37c.344.344.516.775.516 1.248 0 .474-.172.904-.517 1.249z"/></defs><g><g transform="translate(-1332 -2664)"><use fill="#383838" xlink:href="#gov1a"/></g></g></svg></span>',
          prevArrow: '<span class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50"><defs><path id="gov1a" d="M1357.021 2713.999c-13.78 0-25.021-11.197-25.021-25.022 0-13.824 11.197-24.978 25.021-24.978 13.825 0 24.979 11.197 24.979 24.978 0 13.782-11.197 25.022-24.979 25.022zm0-46.512c-11.843 0-21.49 9.647-21.49 21.49 0 11.844 9.647 21.49 21.49 21.49 11.844 0 21.49-9.646 21.49-21.49 0-11.843-9.646-21.49-21.49-21.49zm-2.368 33.98a1.725 1.725 0 0 1-1.25.517c-.43 0-.903-.173-1.248-.517a1.768 1.768 0 0 1 0-2.498l10.12-10.12-10.12-10.121a1.768 1.768 0 0 1 0-2.498 1.768 1.768 0 0 1 2.498 0l11.37 11.37c.344.344.516.775.516 1.248 0 .474-.172.904-.517 1.249z"/></defs><g><g transform="translate(-1332 -2664)"><use fill="#383838" xlink:href="#gov1a"/></g></g></svg></span>',
          fade: true,
          asNavFor: '.reviews-nav'
        });
        $('.reviews-nav').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.reviews-slider',
          dots: false,
          // centerMode: true,
          focusOnSelect: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 3
              }
            }

          ]
        });
      }
// MAP
    
ymaps.ready(init);
function init(){     
   var myMap = new ymaps.Map("map1", {
        center: [55.729012, 37.629215],
        zoom: 15
    }),
    
    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark([55.729012, 37.629215], {
     // Свойства.
     // Содержимое иконки, балуна и хинта.
     balloonContentBody: 'Микрозелень',
    balloonContentFooter: 'Москва, ул.Зацепа 41, офис 107',
    hintContent: 'АМикрозелень'
 }, {
     // Опции.
     // Своё изображение иконки метки.
     iconLayout: 'default#imageWithContent',
     iconImageHref: 'img/icons/marker.png',
     // Размеры метки.
     iconImageSize: [38, 58]
 });

// Добавляем все метки на карту.
myMap.geoObjects.add(myPlacemark1);
myMap.behaviors.disable('scrollZoom');

};
 // end MAP

	// //BEGIN map func
	// var $window      = $(window);
	// /* google map
	// ================================================== */
	// function _g_map ()
	// {
	// 	var maps = $('.g_map');

	// 	if ( maps.length > 0 )
	// 	{
	// 		$.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyB0wsyY6xwU9aKjmNg2pwGn3a1vchIqyBc&sensor=false&language=ru', function( data, textStatus, jqxhr ) {

	// 			maps.each(function() {
	// 				var current_map = $(this);
	// 				var latlng = new google.maps.LatLng(current_map.attr('data-longitude'), current_map.attr('data-latitude'));
	// 				var point = current_map.attr('data-marker');
	// 				var markerlatlng = new google.maps.LatLng(current_map.attr('data-markerlng'), current_map.attr('data-markerlat'));

	// 				if (jQuery(window).width() >= 801 ){
	// 					var myOptions = {
	// 						zoom: 17,
	// 						center: latlng,
	// 						mapTypeId: google.maps.MapTypeId.ROADMAP,
	// 						mapTypeControl: false,
	// 						scrollwheel: false,
	// 						draggable: true,
	// 						panControl: false,
	// 						zoomControl: false,
	// 						disableDefaultUI: true
	// 					};
	// 				} else {
	// 					var myOptions = {
	// 						zoom: 17,
	// 						center: markerlatlng,
	// 						mapTypeId: google.maps.MapTypeId.ROADMAP,
	// 						mapTypeControl: false,
	// 						scrollwheel: false,
	// 						draggable: true,
	// 						panControl: false,
	// 						zoomControl: false,
	// 						disableDefaultUI: true
	// 					};
	// 				}
	// 				var map = new google.maps.Map(current_map[0], myOptions);

	// 				var marker = new google.maps.Marker({
	// 					map: map,
	// 					icon: {
	// 						size: new google.maps.Size(36,48),
	// 						origin: new google.maps.Point(0,0),
	// 						anchor: new google.maps.Point(18,48),
	// 						url: point
	// 					},
	// 					position: markerlatlng
	// 				});

	// 				google.maps.event.addDomListener(window, "resize", function() {
	// 					var center = map.getCenter();
	// 					google.maps.event.trigger(map, "resize");
	// 					map.setCenter(center);
	// 				});
	// 			});
	// 		});
	// 	};
	// };

	// $window.on('load', function () {

	// 	/* google map
	// 	================================================== */
	// 	_g_map();
    // });
    
});



document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
        var mainWrap = document.querySelector('.main-wrap');
        mainWrap.classList.toggle('active');
    });

//scrolling

if( window.innerWidth > 720 || window.screen.width > 720){
    var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.25; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
} else {
var linkNav = document.querySelectorAll('.main-menu [href^="#"]'), //выбираем все ссылки к якорю на странице
V = 0; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
}

for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
        start = null;
    requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
            requestAnimationFrame(step)
        } else {
            location.hash = hash // URL с хэшем
        }
    }
    var nav = document.querySelector('.main-menu');
    nav.classList.toggle('active');
    if( window.innerWidth <= 720 || window.screen.width <= 720){
        var nav2 = document.querySelector('.main-wrap');
        nav2.classList.toggle('active');
        var nav3 = document.querySelector('.menu-toggle');
        nav3.classList.toggle('active');
    }

}, false);

}





});
