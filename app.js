$(document).ready(function() {
	var tableWidth;
	var rellenarTabla = function(){
		var fotos = [
			"img/foto2.jpg",
			"img/foto1.jpg",
			"img/foto4.jpg",
			"img/foto3.jpg",
			"img/foto7.jpg",
			"img/foto6.jpg",
			"img/foto8.jpg",
			"img/foto5.jpg",
			"img/foto9.jpg"
		];
		fotos.forEach(function(i){
			$("#fotos tr").append('<td><img src="'+i+'"></td>');
		});
		//window.setInterval(slide, 30000);
	}
	var slide = function(){
			$("#fotos img").animate({left: '-4000px'}, 70000, 'linear').animate({left: '0px'}, 70000, 'linear');
	};
	rellenarTabla();
	slide();
	window.setInterval(slide, 140000);
});
