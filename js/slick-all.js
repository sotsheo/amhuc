
    $(document).on('ready', function() {
      
      
      $('.regular').slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  // autoplay:true,
  		//   autoplaySpeed:2500,
		  arrows:true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
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
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });

    

       
	 $('.lazy').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.vertical-center-4'
	});
	$('.vertical-center-4').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.lazy',
	  dots: true,
	  vertical: true,
      centerMode: true,
      autoplay:true,
  	  autoplaySpeed:3000,
      prevArrow:"<i class='fa fa-angle-left ' aria-hidden='true'></i>",
      nextArrow:"<i class='fa fa-angle-right ' aria-hidden='true'></i>",
      slidesToScroll: 2,
      responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		      	
			  infinite: true,
			  speed: 300,
			  slidesToShow: 3,
			  slidesToScroll: 1,
			   vertical: false,
		      }
		    },
		     {
		      breakpoint: 767,
		      settings: {

			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			   vertical: false,
		      }
		    },
		]
	});
    

       
      $('.regulars').slick({
		
		   dots: true,
		  infinite: true,
		  autoplay:true,
  		  autoplaySpeed:2500,
		  arrows:true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
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

      $('.regularss').slick({
		   dots: true,
		  infinite: true,
		  speed: 300,
		  autoplay:true,
  		  autoplaySpeed:2500,
		  slidesToShow: 6,
		  slidesToScroll: 1,
		   prevArrow:"<i class='fa fa-angle-left ' aria-hidden='true'></i>",
      nextArrow:"<i class='fa fa-angle-right ' aria-hidden='true'></i>",
		  responsive: [
		  {
		      breakpoint: 1600,
		      settings: {
		        slidesToShow: 4,
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
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		   
		  ]
		});


      $('.sliders').slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  autoplay:true,
  		  autoplaySpeed:2500,
		  slidesToShow: 6,
		  slidesToScroll: 1,
		  responsive: [
		  {
		      breakpoint: 1600,
		      settings: {
		        slidesToShow: 4,
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


      $('.slide-cuisine').slick({
		   dots: true,
		  infinite: true,
		  speed: 300,
		  autoplay:true,
  		  autoplaySpeed:2500,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		   prevArrow:"<i class='fa fa-angle-left ' aria-hidden='true'></i>",
      	nextArrow:"<i class='fa fa-angle-right ' aria-hidden='true'></i>",
		  responsive: [
		  
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
       $(".lazys").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
		
		  // autoplay:true,
  		//   autoplaySpeed:4000,
      });

       	 $('.category').slick({
		
		   dots: true,
		  infinite: true,
		  autoplay:true,
  		  autoplaySpeed:300,
		  arrows:true,
		  speed: 300,
		  slidesToShow: 6,
		  slidesToScroll: 1,
		  responsive: [
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
  
      
    });
