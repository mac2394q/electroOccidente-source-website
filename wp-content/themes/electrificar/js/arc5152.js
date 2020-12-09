 var $nav = jQuery('.navbar');
 var $navTop = $nav.offset().top;
 var pegarNav = function(){
 	var $scrollTop = jQuery(window).scrollTop();
 	if($scrollTop >= $navTop){
 		$nav.addClas('navbar-fixed-top efectos')

 	}
 	else{
 		$nav.removeClas('navbar-fixed-top')


 	}
 }

jQuery(window).on('scroll',pegarNav);

 

 
   
 
  


	


		





