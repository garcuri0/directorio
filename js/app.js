//console.log('Funcionando');
var jFormulario = document.getElementById('formulario');
jFormulario.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log("Clic!!");
    var datos = new FormData(jFormulario);
    console.log(datos.get('txtEmpNombre'));
    console.log(datos.get('txtEmpRazonSocial'));
    fetch('/post.php',{
        method: 'POST',
        body: datos,
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)
        })
})



