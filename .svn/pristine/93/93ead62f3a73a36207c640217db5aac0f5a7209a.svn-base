// JavaScript Document
$(document).ready(function(){
	$('.dropbtn').click(function(){
	   var drop=$(this).data("target");
	   if($(this).hasClass("btnactiv"))
	   {
		   $(drop).removeClass("activ");
		   $(drop).slideUp();
		   $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>');
		   $(this).removeClass("btnactiv");
	   }
	   else{
		  $(".btnactiv").html('<i class="fa fa-plus" aria-hidden="true"></i>');
	      $(".btnactiv").removeClass("btnactiv");
		  $(this).html('<i class="fa fa-minus" aria-hidden="true"></i>');
	      $(this).addClass("btnactiv");
		 
	      $('.activ').slideUp();
	      $(drop).addClass("activ");
	      $(drop).slideDown();
	   }
	})
});