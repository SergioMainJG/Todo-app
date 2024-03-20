
function saludar( nombre, ){
    console.log( arguments );
    console.log('Hola ' + nombre);
    return [1,2];
}

const saludar2 = function( nombre, ){
    console.log('Hola 2 ' + nombre);
} 

const saludar3 = ( nombre, ) => {
    console.log('Hola => ' + nombre);
}

const retornoSaludar = saludar('Sergio');
// console.log( retornoSaludar[0], retornoSaludar[1] );
// saludar2('Sergio');
// saludar3('Sergio');

function sumar( a, b, ){
    return a+b;
}

const sumar2 = ( a, b ) =>  a+b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

// console.log( sumar( 1, 2 ) );
// console.log( sumar2( 1, 2 ) );
console.log( getAleatorio2() );