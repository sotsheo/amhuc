   $(document).on('ready', function() {
	      
	      
	    
	       $(".lazys").slick({
	        lazyLoad: 'ondemand', // ondemand progressive anticipated
	        infinite: true
	      });
	       $('.regularss').slick({
			  dots: true,
			  infinite: false,
			  speed: 300,
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  responsive: [
			  {
			      breakpoint: 1600,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			   
			  ]
			});
	        $("#owl-detail").owlCarousel({
	                items : 4,
	                navigation : true,
	                pagination: false,
	                navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	                itemsDesktop  :  [1200,3],
	                itemsDesktopSmall :  [600,3],
	                itemsTablet :  [560,3],
	                itemsMobile :  [320,2]
	            });
	      
	    });