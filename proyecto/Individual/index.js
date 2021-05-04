var aux=''; // variable global

function A(){
    var  a = 'Hola';
    aux = a; //asignamos a la variable global el valor de la variable local
}

A();
console.log(aux); // 