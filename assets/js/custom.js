 $(document).ready(function () {

     //--------------- slider-----------------//
     $('.case-study-carosel.owl-carousel').owlCarousel({
		loop:true,
		margin:20,
		 autoPlay: true,
		 nav: false,
		 dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots: true,
			},
			600:{
				items:1,
				nav:false,
				dots: true,
			},
			1000:{
				items:3,
				nav:false,
				loop:false,
				dots: true,
			}
		}
	});
	 $('.testimoniol-carosel.owl-carousel').owlCarousel({
		loop:true,
		margin:100,
		 autoPlay: true,
		 nav: false,
		 dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots: true,
			},
			600:{
				items:1,
				nav:false,
				dots: true,
			},
			1000:{
				items:1,
				nav:false,
				loop:false,
				dots: true,
			}
		}
	});
	  $('.logo-carosel.owl-carousel').owlCarousel({
		loop:true,
		margin:50,
		 autoPlay: true,
		 nav: false,
		 dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				nav:false,
				dots: true,
			},
			600:{
				items:3,
				nav:false,
				dots: true,
			},
			1000:{
				items:5,
				nav:false,
				loop:false,
				dots: true,
			}
		}
	});
	 
	 
	 $('.Homepage-sliders.owl-carousel').owlCarousel({
		loop:true,
		margin:50,
		 autoPlay: true,
		 nav: true,
		 navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
		 dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				dots: false,
			},
			600:{
				items:1,
				nav:true,
				dots: false,
			},
			1000:{
				items:1,
				nav:true,
				loop:false,
				dots: false,
			}
		}
	});
	 
	 //------------------Menu Toggole-----menu----offcanvas----------//
	 
	 $('.menu-triggers').on('click' , function(){
		$('.offcanvas-menu').addClass("show-offcanvas-menu");
		$('.offcanvas-menu-shade').addClass("active");
	});
	 
	$('.offcanvas-menu-close, .offcanvas-menu-shade').on('click' , function(){
		$('.offcanvas-menu').removeClass("show-offcanvas-menu");
		$('.offcanvas-menu-shade').removeClass("active");
	});
	 
	 //testimonial---------item------hover-----//
	 
	 $(".single-testimonial-item-text").hover(function() {
		$(".single-testimonial-item-text").removeClass("active"); 
		$(this).addClass("active"); 
	 });
	 
	 //---------search-bar-click function------//
	 
	 $('.search-bar-icon').on('click' , function(){
		$('.search-bar-item').addClass("active");
	});
	 
	$('.search-bar-close').on('click' , function(){
		$('.search-bar-item').removeClass("active");
	});
	 
	 
	 //popup Video//
	 
	 $(".video-play-btn").magnificPopup({
		 type: "video"
	 });
	 
	 $(".video-btn").magnificPopup({
		 type: "video"
	 });
	 
	 //mobile-menu//
	 
	 $("#traffic-menu").slicknav({
		prependTo : '.mobile-menu'
	 });
	 
	 	 
	 //---------Color nip ------//
	 
	 $('.boxed-layout').on('click' , function(){
		$('body').addClass("boxed-layout").removeClass("wide-layout");
		 $('.changer-layout span').removeClass("active");
		$(this).addClass("active");
	});
	 
	$('.wide-layout').on('click' , function(){
		$('body').addClass("wide-layout").removeClass("boxed-layout");
		$('.changer-layout span').removeClass("active");
		$(this).addClass("active");
	});

 });
