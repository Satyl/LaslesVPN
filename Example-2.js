const container = document.querySelector('.container');
const link = document.querySelectorAll('a');
const popup = document.querySelector('.popup');
const button = document.querySelector('.popup__button');
const headerBtn = document.querySelector('.header__enterance-border');
const introBtn = document.querySelector('.intro__button'); 
const planBtn = document.querySelectorAll('.plan__button');
const subscribeBtn = document.querySelector('.subscribe__button');

link.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
		container.classList.add('active');
		popup.classList.add('active');
	});
});

button.addEventListener('click', function(e) {
	popup.classList.remove('active');
	container.classList.remove('active');
});


headerBtn.addEventListener('click', function(e) {
	container.classList.add('active');
	popup.classList.add('active');
});

introBtn.addEventListener('click', function(e) {
	container.classList.add('active');
	popup.classList.add('active');
});

planBtn.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
		container.classList.add('active');
		popup.classList.add('active');
	});
});

subscribeBtn.addEventListener('click', function(e) {
	container.classList.add('active');
	popup.classList.add('active');
});

$('.slider__comments').slick({
	slideToShow: 3,
	slideToScroll: 1,
	autoPlat: false,
	prevArrow: $('.slider__prev'),
	nextArrow: $('.slider__next'),
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	swipe: false,
	touchMove: false,
	dots: true,
	appendDots: $('.slider__dots'),
});