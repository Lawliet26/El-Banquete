let ancho_pantalla, alto_pantalla, alto_menu;

let acciones = {
    listo: function(){
        $("#lacarta .boton-rojo").click(acciones.clickBotonRojo);

        $(".cabecera .menu a[href*='#']").click(acciones.irancla);

        //$("#lacarta .contenedor-cuadrado").find("img").eq(0).click(acciones.obtenersrc);

        $("#lacarta .contenedor-cuadrado").click(acciones.obtenersrc);

        $(".btn-enviar").click(acciones.enviar);

        $(".cabecera .hamb").click(acciones.abrirmenu);
    },

    abrirmenu: function(e){
        e.preventDefault();
        //$(".cabecera .menu").addClass("abierto"); //agrega la clase abierto
        //$(".cabecera .menu").removeClass("abierto"); //quita la clase abierto
        $(".cabecera .menu").toggleClass("abierto"); //agrega o quita la clase abierto
        $("body").toggleClass("abierto"); //agrega o quita la clase abierto
        $(this).find("i").toggleClass("fa-xmark") //agrega o quita la clase fa-x

        /*
        if($(".cabecera .menu").hasClass("abierto")){
            $(".cabecera .menu").removeClass("abierto");
        }else{
            $(".cabecera .menu").addClass("abierto");
        }*/
    },

    clickBotonRojo: function(e){
        e.preventDefault();
        alert("Prueba de click en botón rojo");
    },

    precarga: function(){
        acciones.redimencionar();
    },

    redimencionar: function(){
        ancho_pantalla= $(window).width();
        //alto_pantalla= $(window).height();
        //console.log("Ancho: "+ancho_pantalla, "Alto:"+alto_pantalla);

        //alto_menu = $(".cabecera").height(); //solo el alto del contenido
        //alto_menu = $(".cabecera").innerHeight(); //alto del contenido + padding
        //alto_menu = $(".cabecera").outerHeight(); //alto del contenido + padding + borde
        //alto_menu = $(".cabecera").outerHeight(true); //alto del contenido + padding + borde + margen

        //$(".cabecera").height("200");
        //console.log("Alto menu: "+alto_menu);

        if(ancho_pantalla < 768){
            alto_menu = $(".cabecera").innerHeight();
            $(".cabecera .menu").css({"padding-top":alto_menu,"padding-bottom":alto_menu});
        }else{
            $(".cabecera .menu").css({"padding-top":0,"padding-bottom":0});
        }
    },

    scrollventana: function(){

        if($(window).scrollTop() > alto_menu){
            $(".cabecera").addClass("fondo");
        }else{
            $(".cabecera").removeClass("fondo");
        }
    },

    irancla: function(e){
        e.preventDefault();
        let ancla = this.hash;
        //alert(ancla);
    },

    obtenersrc: function(){
        //let src = $(this).find("img").attr("src"); //obtiene el atributo src de la imagen
        //let src = $(this).find("img").attr("src","img/img10.jpg"); //cambia el atributo src de la imagen
        //console.log(src);

        //let html = $(this).html(); //obtiene el contenido html
        //$(this).html("<p>Estes es un nuevo contenido</p>"); //cambia el contenido html
        //console.log(html);

        //let texto = $(this).find("h2").text(); //obtiene el texto del h2
        //console.log(texto);
        //$(this).find("h2").text("Prueba de seteo"); //cambia el texto del h2
        
    },

    enviar: function(){

        //$("#contacto").css({"background-color":"#ff0000","color":"#ffffff"}); //Modifica el css de un elemento
        //let nombre = $("#nombre").val();
        //let email = $("#email").val();
        //let asunto = $("#asunto").val();
        //let mensaje = $("#mensaje").val();
        //console.log(nombre+"-"+email+"-"+asunto+"-"+mensaje);

        //$("#nombre").val("Funciona la prueba");
    },
};

$(document).ready(acciones.listo);

$(window).on("load",acciones.precarga);

$(window).resize(acciones.redimencionar);

$(window).scroll(acciones.scrollventana);