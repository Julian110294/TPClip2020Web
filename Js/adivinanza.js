var respuesta = "programar";
var cant_intentos = 3;
var acerto = false;

document.getElementById("boton").addEventListener("click", function(){
    var ingreso = document.getElementById("dato").value;

if(ingreso == respuesta){
    alert("Felicidades Estas en Lo Correcto!!!");
    location.reload(); //Para Recargar la Pagina
}else{
    alert("Fallaste!!! , La Respuesta era: " + respuesta);
    location.reload(); //Para Recargar la Pagina
}

})
