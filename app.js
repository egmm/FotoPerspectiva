$(document).ready(function() {
var container = $("#container"), containerWidth = 0;
		var fotos = [
			"img/Blanco y negro/Portada.jpg",
			"img/Photoshoot/Gaby.jpg",
			"img/Photoshoot/Carlos.jpg",
			"img/Photoshoot/Ber.jpg",
			"img/Retratos/Boy.jpg",
			"img/Photoshoot/Erika.jpg",
			"img/Retratos/Carlos.jpg",
			"img/Retratos/Mama.jpg",
			"img/Retratos/Gaby.jpg"
		];
		//Aca colocamos las imagenes
			fotos.forEach(function(i,k){
				container.append('<img src="'+i+'">');
			});
			//Aca se posicionan una al lado de la otra
			$(window).load(function(){
				$("#container img").each(function(){
					$(this).css("left", containerWidth);
					containerWidth += $(this).width();
				});
			});
		//Esta funcion evalua si una imagen esta fuera de la pantalla para luego colocarla al final
		//exactamente al lado de la ultima
		  function repeat(){
		    var left = this.style.left.slice(0, this.style.left.length-2);
		    if(left <= -600){
		      var lastImage = $("#container img").last();
		      var left = parseInt(lastImage.css("left")) + lastImage.width();
		      this.style.left = left + "px";
		      $(this).detach();
		      $("#container").append(this);
		    }
		  }
		//esta funcion mueve las imagenes a la izquierda
		  var slide = function(){
		    $("#container img").animate({left:"-=100px"}, 2500, "linear", repeat);
		  }

			window.setInterval(slide, 2500);
});
