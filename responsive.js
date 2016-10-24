$(document).ready(function(){
	var windowSize = $(window).width();
	var responsive = function(){
		windowSize = $(window).width();
		if(windowSize < 500){
			$("#bar").removeClass('container');
			$('#bar ul').removeClass('nav-justified').addClass('nav-stacked');
		}
		else {
			if(!$("#bar ul").hasClass("nav-justified")){
				$("#bar ul").addClass("nav-justified");
			}
			if(!$("#bar").hasClass("container")){
				$("#bar").addClass("container");
			}
			else if(windowSize <= 767){
				$("#bar").removeClass("container");
				$('#bar ul').removeClass('nav-justified');
			}
		}
	};


	$("#btn-menu").click(function(){
		$("#bar").toggleClass("open");
	});
	$("#fotos").click(function(){
		$("#bar").removeClass("open");
	});

	$(window).load(responsive);
	$(window).resize(responsive);
});
