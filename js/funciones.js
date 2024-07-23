let ancho_pantalla, alto_pantalla, alto_menu;

let acciones = {
    listo: function(){
        $("#lacarta .boton-rojo").click(acciones.clickBotonRojo);

        $(".cabecera .menu a[href*='#']").click(acciones.irancla);

        //$("#lacarta .contenedor-cuadrado").find("img").eq(0).click(acciones.obtenersrc);

        //$("#lacarta .contenedor-cuadrado").click(acciones.obtenersrc);

        $(".btn-enviar").click(acciones.enviar);

        $(".cabecera .hamb").click(acciones.abrirmenu);

        $(".cerrarimagen").click(acciones.cerrarimagen);

        $(".titulo-acordeon").click(acciones.acordeon);

        $(".flecha").click(acciones.irflecha);
    },

    irflecha: function(){
        let posicion = $(this).closest("section").next("section").offset().top;
        $("html,body").animate({
            "scrollTop":posicion
        },800);
    },

    acordeon: function(){
        $(".cuerpo-acordeon").stop().slideUp("slow");
        $(this).next(".cuerpo-acordeon").stop().slideToggle("slow");
        $(".titulo-acordeon").toggleClass("girar");
        $(".titulo-acordeon").not(this).removeClass("girar");
        
        /*
        if($(this).hasClass("girar")){
            $(this).removeClass("girar");
        }else{
            $(".titulo-acordeon").removeClass("girar");
            $(this).addClass("girar");
        };
        */
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
        let src = $(this).closest(".contenedor-cuadrado").find("img").attr("src");
        $(".cuerpoimagen").find("img").attr("src",src);
        
        $(".trama").fadeIn("slow",function(){
            $(".cuerpoimagen").fadeIn("fast");
        });

        //$(".trama").toggleFade("slow",function(){
        //});

    },

    cerrarimagen: function(e){
        e.preventDefault();
        $(".cuerpoimagen").fadeOut("slow",function(){
            $(".cuerpoimagen").find("img").attr("src","");
            $(".trama").fadeOut("fast");
        });
    },

    precarga: function(){

        setTimeout(function(){
            let ancla = window.location.hash;
            if($(ancla).length > 0){
                acciones.detalleancla(ancla);
            }
        },1000);

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
        let url = $(this).attr("href"); 
        
        if($(ancla).length > 0){
            acciones.detalleancla(ancla);
        }else{
            window.location.href = url;
        };
    },

    detalleancla : function(ancla){
        $("html, body").animate({
            "scrollTop": $(ancla).offset().top
        },800);
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

$(window).on("load",acciones.precarga);

$(window).resize(acciones.redimencionar);

$(window).scroll(acciones.scrollventana);

$(document).ready(acciones.listo);

