let nombre = prompt ("ingresa tu nombre y apellido.");
let cantidad = prompt ("bienvenido" + nombre+ "ingresa la cantida de calificaciones ");
let suma = 0;
let nota = 0;


for ( let i =1 ; i <= cantidad ; i ++ ){
    let nota = parseInt(prompt( "ingresa la nota"))
    suma = suma+nota
};


    let promedio = suma/cantidad;
if ( promedio >= 7){
    alert ( "Felicitaciones" + " "+ nombre + "tu promedio es de"+ " " + promedio)

}

else{
    alert("Lo sentimos " + nombre + "tu promedio no fue suficiente")
}
