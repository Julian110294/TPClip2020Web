function jugar_ahora() {

    var max = 10;
    var min = 1;
    var cant_intentos = 3;
    var acerto = false;
    var numero_aleatorio = Math.round(Math.random() * (max - min) + min);
    var numero;

    var nombre=document.getElementById("nombre").value;

    if(nombre=="")
    {
        alert("Por favor, ingrese su  nombre para JUGAR");
    }
    else
    {
        while(cant_intentos>0 && acerto!=true)
        {
            cant_intentos--;
            numero= parseInt( prompt("Ingrese Un Número"));
            if (numero==numero_aleatorio)
            {
                alert("Felicidades Adivinaste !!!");
                acerto=true;
                location.reload(); //Para Recargar la Pagina
            }
            else if (numero<numero_aleatorio)
            {
                alert("PISTA: es Mayor");
            }
            else if (numero>numero_aleatorio)
            {
                alert("PISTA: es Menor");
            }
            else
            {
                alert("Le Quedan " + cant_intentos + " Intentos");
            }

        }

        alert("Intenta de Nuevo !!!");

        document.getElementById("rdo").innerHTML="El Número era: <strong>" + numero_aleatorio + "</strong>"
    }

}
