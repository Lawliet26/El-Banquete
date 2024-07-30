<?php

require_once("config/database.php");
date_default_timezone_set("America/Bogota");

$database = new Database();
$db = $database -> getConnection();

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];
$fecha = date("Y-m-d H:i:s");

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

function is_ajax(){
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) and strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
        return true;
    }
    return false;
}

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

if(is_ajax()){
    if(count($listaerrores)>0){
        $respuesta["tipo"] = 2;
        $respuesta["errores"] = $listaerrores;
    }else{

        $declaracion = $db -> prepare("INSERT INTO tb_contacto(nombre, email, asunto, mensaje, fecha) VALUES(:nombre, :email, :asunto, :mensaje, :fecha)");

        $declaracion -> bindParam(":nombre", $nombre, PDO::PARAM_STR);
        $declaracion -> bindParam(":email", $email, PDO::PARAM_STR);
        $declaracion -> bindParam(":asunto", $asunto, PDO::PARAM_STR);
        $declaracion -> bindParam(":mensaje", $mensaje, PDO::PARAM_STR);
        $declaracion -> bindParam(":fecha", $fecha, PDO::PARAM_STR);
        $declaracion -> execute();

        $ultimoid = $db -> lastInsertId();

        if($ultimoid){
            $respuesta["tipo"] = 1;
            $respuesta["mensaje"] = "Se registro correctamente";
        }else{
            $respuesta["tipo"] = 3;
            $respuesta["mensaje"] = "Ocurrio un problema al registrar";
        }


    }
}else{
    $respuesta["tipo"] = 3;
    $respuesta["mensaje"] = "Ocurrio un problema en el servidor";
}
echo json_encode($respuesta);
?>