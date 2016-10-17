(function(){

	var responsive = function(){
		var windowSize = $(window).width();
		if(windowSize < 500){
			//console.log(windowSize);
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

	var windowSize = $(window).width();
	responsive();

	$("#btn-menu").click(function(){
		$("#bar").addClass("open");
	});
	$("main").click(function(){
		$("#bar").removeClass("open");
	});

})();
