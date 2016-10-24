$(document).ready(function(){
	var windowSize;
	var responsive = function(){
		windowSize = $(window).width();
		if(windowSize < 500){
			$("#bar").removeClass('container');
			$('#bar ul').removeClass('nav-justified').addClass('nav-stacked');
		}
		else {
			$("#btn-menu").css("display", "none");
			if(!$("#bar ul").hasClass("nav-justified")){
				$("#bar ul").addClass("nav-justified");
			}
			if(!$("#bar ul").hasClass("container")){
				$("#bar ul").addClass("container")
			}
		}
	};


	$("#btn-menu").click(function(){
		$("#bar").toggleClass("open");
	});
	$("#fotos").click(function(){
		$("#bar").removeClass("open");
	});

	$(window).resize(responsive);
});
