const swiper = new Swiper('.swiper', {
	loop: true,
	spaceBetween: 32,
	grabCursor: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.myslider-next',
		prevEl: '.myslider-prev',
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
	},
});

