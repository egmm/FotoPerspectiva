$(document).ready(function(){
	var windowSize = $(window).width();
	/*
	* La function responsive se encarga de quitar clases no necesarias para ciertos tamaños de pantalla
	*/
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
/*
	* Esta funcion va a agregar el formulario de contacto
 */
 var loadContact = function(){
	 $.get( "contacto.html", function( data ) {
			 $( "#fotos" ).prepend( data );
		 });
 }
 /*
 * Esta funcion agrega la galeria
 */
	var loadGalery = function(){
		$("#container").css("display", "none");
		$.get( "galeria.html", function( data ) {
				$( "#fotos" ).append( data );
			});
	}
	/*
	* Esto controla la apertura del menu
	*/
	$("#btn-menu").click(function(){
		$("#bar").toggleClass("open");
	});
	$("#fotos, #bar li").click(function(){
		$("#bar").removeClass("open");
	});
	/*
	* Volver al inicio de la pag
	*/
	$("#logo").click(function(){
		$("#contacto").remove();
		$("#galeria").remove();
		$("#container").css("display", "block");
	});
	/*
	* Aqui se controla el cambio de los menu
	*/
	$("#bar li").click(function(){
		//$("#container").css("display", "none");
		if(this.textContent === "GALERÍA"){
			if($("#galeria").length){
			} else {
				if($("#contacto").length || $("#info").length){
					$("#contacto").remove();
					$("#info").remove();
				}
				loadGalery();
			}
		} else if(this.textContent === "INFO"){
			if($("#info").length){
			} else {
			}
			$("#fotos").append(menuContent.replace(data, "info"));
		} else if(this.textContent === "CONTACTO"){
			if($("#contacto").length){
			} else {
				if($("#galeria").length || $("#info").length){
					$("#galeria").remove();
					$("#info").remove();
				}
				loadContact();
			}
		}
	});
	/*
	* Iniciamos el llenado de la pag
	*/
	$(window).load(responsive);
	$(window).resize(responsive);
});
