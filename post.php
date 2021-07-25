<?php
    $txtEmpNombre = $_POST['txtEmpNombre'];
    $txtEmpRazonSocial = $_POST['txtEmpRazonSocial'];
    if($txtEmpNombre === '' || $txtEmpRazonSocial === ''){
        echo json_encode("Complete todos los campos");
    }else{
        echo json_encode("Correcto! <br>Nombre de la Empresa: ".$txtEmpNombre."<br>Razón Social: ".$txtEmpRazonSocial);
    }
?>