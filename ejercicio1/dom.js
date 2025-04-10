// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const show = document.querySelector('.showme');
console.log(show);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const showH1 = document.querySelector('#pillado');
console.log(showH1);

// 1.3 Usa querySelector para mostrar por consola todos los p
const p = document.querySelectorAll('p');
console.log(p);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const dfunction = document.querySelectorAll('[data-function="testMe"]');
console.log(dfunction);


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const selectFunction = document.querySelectorAll('[data-function="testMe"]');
console.log(selectFunction[2]);