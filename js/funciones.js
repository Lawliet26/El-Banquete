let ancho_pantalla, alto_pantalla, alto_menu;

let acciones = {
    listo: function(){
        $("#lacarta .boton-rojo").click(acciones.clickBotonRojo);

        $(".cabecera .menu a[href*='#']").click(acciones.irancla);

        //$("#lacarta .contenedor-cuadrado").find("img").eq(0).click(acciones.obtenersrc);

        $("#lacarta .contenedor-cuadrado").click(acciones.obtenersrc);
    },

    clickBotonRojo: function(e){
        e.preventDefault();
        alert("Prueba de click en botón rojo");
    },

    precarga: function(){
        acciones.redimencionar();
    },

    redimencionar: function(){
        //ancho_pantalla= $(window).width();
        //alto_pantalla= $(window).height();
        //console.log("Ancho: "+ancho_pantalla, "Alto:"+alto_pantalla);

        //alto_menu = $(".cabecera").height(); //solo el alto del contenido
        //alto_menu = $(".cabecera").innerHeight(); //alto del contenido + padding
        //alto_menu = $(".cabecera").outerHeight(); //alto del contenido + padding + borde
        //alto_menu = $(".cabecera").outerHeight(true); //alto del contenido + padding + borde + margen

        //$(".cabecera").height("200");
        //console.log("Alto menu: "+alto_menu);
    },

    scrollventana: function(){

    },

    irancla: function(e){
        e.preventDefault();
        let ancla = this.hash;
        //alert(ancla);
    },

    obtenersrc: function(){
        let src = $(this).find("img").attr("src"); //obtiene el atributo src de la imagen
        console.log(src);
    }
};

$(document).ready(acciones.listo);

$(window).on("load",acciones.precarga);

$(window).resize(acciones.redimencionar);

$(window).scroll(acciones.scrollventana);