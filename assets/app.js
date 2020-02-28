const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click',()=> {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index)=> {
			if(link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease-in-out forwards ${index / 7 + .3}s`;
			}
		});

		burger.classList.toggle('toggle');
	});
}

navSlide();

var $win = $(window);
var $scrollBooks = $(".scroll-books");
var $scrollSocial = $(".scroll-social");
var $scrollIntro = $(".latest");
var $onScrollBooks = $scrollBooks.offset().top / 2;
var $onScrollSocial = $scrollSocial.offset().top / 2;
var $onScrollIntro = $scrollIntro.offset().top / 2;

var $navHeight = $("nav").height();
var $nav = $("nav");
var $onScroll = $nav.offset().top / 2;
var $fixedNav = $(".fixed");

$win.on("scroll", function() {
	if ($win.scrollTop() > $onScrollBooks)
		$scrollBooks.css("animation-play-state", "running");

	if ($win.scrollTop() > $onScrollIntro)
		$scrollIntro.css("opacity", "1");

	if ($win.scrollTop() > $onScrollSocial + 1000)
		$scrollSocial.css("animation-play-state", "running");

	if ($win.scrollTop() > $onScroll)
		$nav.addClass("fixed");

	console.log($fixedNav);
	console.log($navHeight);
});
