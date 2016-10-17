$(document).ready(function() {
var container = $("#container"), containerWidth = 0;
		var fotos = [
			"img/gaby1.jpg",
			"img/erika1.jpg",
			"img/gaby2.jpg",
			"img/gaby5.jpg",
			"img/gaby3.jpg",
			"img/erika3.jpg",
			"img/erika2.jpg",
			"img/gaby4.jpg"
		];
		//Aca llenamos las imagenes
			fotos.forEach(function(i,k){
				container.append('<img src="'+i+'">');
		    container[0].childNodes[k].onload = function() {
		      $(this).css("left", containerWidth);
		      containerWidth += $(this).width();
		    };
		  	});

		//Esta funcion evalua si una imagen esta fuera de la pantalla para luego colocarla al final
		//exactamente al lado de la ultima
		  function repeat(){
		    var left = this.style.left.slice(0, this.style.left.length-2);
		    if(left <= -550){
		      var lastImage = $("#container img").last();
		      var left = parseInt(lastImage.css("left")) + lastImage.width();
		      this.style.left = left + "px";
		      $(this).detach();
		      $("#container").append(this);
		    }
		  }
		//esta funcion mueve las imagenes a la izquierda
		  var slide = function(){
		    $("#container img").animate({left:"-=100px"}, 2000, "linear", repeat);
		  }

			window.setInterval(slide, 2000);
});
