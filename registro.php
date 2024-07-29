<?php

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];

/*
if(isset($nombre) and !empty($nombre)){
    if(isset($email) and !empty($email)){
        if(isset($asunto) and !empty($asunto)){
            if(isset($mensaje) and !empty($mensaje)){
                echo "Se ha enviado correctamente";               
            }else{
                echo "Ingrese el mensaje";
            }
        }else{
            echo "Ingrese el asunto";
        }
    }else{
        echo "Ingrese el email";
    }
}else{
    echo "Ingrese el nombre";
}
    */
/*
    $listaerrores = array();
    $respuesta = array();

    if(isset($nombre) and !empty($nombre)){
        if(isset($email) and !empty($email)){
            if(isset($asunto) and !empty($asunto)){
                if(isset($mensaje) and !empty($mensaje)){
                    $respuesta["tipo"] = 1;
                    $respuesta["mensaje"] = "Se ha enviado correctamente";            
                }else{
                    $respuesta["tipo"] = 2;
                    $respuesta["mensaje"] = "Ingrese el mensaje";    
                }
            }else{
                $respuesta["tipo"] = 2;
                $respuesta["mensaje"] = "Ingrese el asunto ";    
            }
        }else{
            $respuesta["tipo"] = 2;
            $respuesta["mensaje"] = "Ingrese el email";    
        }
    }else{
        $respuesta["tipo"] = 2;
        $respuesta["mensaje"] = "Ingrese el nombre";    
    }
*/

$listaerrores = array();
$respuesta = array();

if(!isset($nombre) or empty($nombre)){
    array_push($listaerrores, array(
        "id" => "nombre",
        "mensaje" => "Por favor ingresa tu nombre"
    ));
}

if(!isset($email) or empty($email)){
    array_push($listaerrores, array(
        "id" => "email",
        "mensaje" => "Por favor ingresa tu nombre"
    ));
}


if(!isset($asunto) or empty($asunto)){
    array_push($listaerrores, array(
        "id" => "asunto",
        "mensaje" => "Por favor ingrese el asunto"
    ));
}

if(!isset($mensaje) or empty($mensaje)){
    array_push($listaerrores, array(
        "id" => "mensaje",
        "mensaje" =>  "Por favor ingrese el mensaje"
    ));
}

if(count($listaerrores)>0){
    $respuesta["tipo"] = 2;
    $respuesta["errores"] = $listaerrores;
}else{
    $respuesta["tipo"] = 1;
    $respuesta["mensaje"] = "Se registro correctamente";
}

echo json_encode($respuesta);
?>