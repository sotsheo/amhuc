
		$(document).ready(function(){
			window.onscroll=function(){
				if(document.body.scrollTop > 50){
					$(".menu").css({"position":"fixed","top":"0"});
					$(".menu-left").css("padding","0");
					$(".menu .logo img").css({"width":"147","height":"68"});
					$(".menu .logo").css({"width":"160","height":"92","margin-top":"-5","padding-top":"3"});
					$(".menu-right").css("padding","0");
				}
				else{
					$(".menu ").css("position","relative");
					$(".menu-left").css("padding","35 0");
					$(".menu .logo img").css({"width":"200","height":"93"});
					$(".menu .logo").css({"width":"220","height":"140","margin-top":"0","padding-top":"20"});
					$(".menu-right").css("padding","35 0");
				}
			}


			$(".menu-btn-show").click(function(event){
				$(".menu-bar-mobile").toggle(500);				
				 event.stopPropagation();
			});
			$(".phone-hn").click(function(){
					$(this).children(".content-phone").toggle(1000);
			});	
			$(document).click(function(){
			   $(".menu-bar-mobile").hide(500);	
			});
				$("#up").click(function(){
					$("#number").val(parseInt($("#number").val())+1);

			});	
				$("#reduction").click(function(){
					if((parseInt($("#number").val())-1)>0){
					$("#number").val(parseInt($("#number").val())-1);
				}
					
					
			});	

		})
