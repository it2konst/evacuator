const swiper = new Swiper('.swiper', {
	// direction: 'vertical',
	loop: true,
	spaceBetween: 32,
	// slidesPerView: 2,
	// slidesPerGroup: 2,
	grabCursor: true,
	// centeredSlides: true,
	// initialSlide: 2,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// dynamicBullets: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },

	mousewheel: {
		sensitivity: 1,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		1400: {
			slidesPerGroup: 2,
			slidesPerView: 2,
		},
		// 992: {
		// 	slidesPerView: 3,
		// },
	},

	// zoom: {
	// 	maxRatio: 5,
	// 	minRatio: 1,
	// },
});

