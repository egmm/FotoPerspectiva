$(document).ready(function(){
	var windowSize = $(window).width();
	var menuContent = "<div class=\"%clase%\" id=\"%id%\"></div>";
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
* HTML del formulario de contacto
*/
var contacto = {
	//encabezado: "<h2 class=\"text-center\">CONTACTO</h2>",
	form: "<div class=\"input-group contact\"></div>",
	contenido: {
		nombre: "<input id= \"cont-nombre\" type=\"text\" class=\"form-control\" placeholder=\"NOMBRE\" aria-describedby=\"basic-addon1\">",
		correo: "<input id= \"cont-correo\" type=\"text\" class=\"form-control\" placeholder=\"CORREO\" aria-describedby=\"basic-addon1\">",
		mensaje: "<textarea id= \"cont-mensaje\" type=\"text\" class=\"form-control\" placeholder=\"MENSAJE\" aria-describedby=\"basic-addon1\"></textarea>",
		boton: "<button type=\"button\" class=\"btn btn-default\">ENVIAR</button>"
	}
};
/*
* HTML de la galeria
*/
var galeria = {
	fotoParaMostrar: [
		"<img src=\"img/erika2.jpg\">",
		"<img src=\"img/gaby2.jpg\">",
		"<img src=\"img/gaby5.jpg\">",
		"<img src=\"img/erika1.jpg\">",
		"<img src=\"img/foto3.jpg\">",
		"<img src=\"img/gaby3.jpg\">"],
	thumbnail: "<div class=\"thumbnail\"></div>",
	columnas: "<div class=\"col-md-4\"></div>"
}
 /*
	* Esta funcion va a agregar el formulario de contacto
 */
 var createContact = function(){
	 var menuContact = menuContent.replace("%id%", "contacto");
	 $("#fotos").prepend(menuContact.replace("%clase%", "menu-contacto"));
	 for(var i in contacto.contenido){
		 $("#contacto").append(contacto.form);
		 $("#contacto div").last().append(contacto.contenido[i]);
	 }
 }
 /*
 * Esta funcion agrega la galeria
 */
 var createGaleria = function () {
	var menuGaleria = menuContent.replace("%id%", "galeria");
	$("#container").css("display", "none");
	$("#fotos").addClass("container");
 	$("#fotos").prepend(menuGaleria.replace("%clase%", "row"));
	for(var i = 0; i < 3; i++){
		$("#galeria").append(galeria.columnas);
		for(var k = 0; k < 2; k++){
			$("#galeria div").last().append(galeria.thumbnail);
			$("#galeria div div").last().append(galeria.fotoParaMostrar[i]);
		}
	}
 }
	/*
	* Esto controla la apertura del menu
	*/
	$("#btn-menu").click(function(){
		$("#bar").toggleClass("open");
	});
	$("#fotos").click(function(){
		$("#bar").removeClass("open");
	});
	/*
	* Volver al inicio de la pag
	*/
	$("#logo").click(function(){
		$("#contacto").remove();
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
				createGaleria();
			}
		} else if(this.textContent === "INFO"){
			if($("#info").length){
			} else {
			}
			$("#fotos").append(menuContent.replace(data, "info"));
		} else if(this.textContent === "CONTACTO"){
			if($("#contacto").length){
				//$("#contacto").remove();
			} else {
				createContact();
			}
		}
	});
	/*
	* Iniciamos el llenado de la pag
	*/
	$(window).load(responsive);
	$(window).resize(responsive);
});
