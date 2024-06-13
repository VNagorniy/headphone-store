import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	spaceBetween: 24,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// }
});

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import tagline from './modules/tagline.js';
tagline();
