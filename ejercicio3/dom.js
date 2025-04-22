//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ul_new = document.createElement('ul');
for (let i = 0; i < countries.length; i++){
  let country = countries[i];
  let li = document.createElement('li');
  li.textContent = country;
  ul_new.appendChild(li);
}
document.body.appendChild(ul_new);
console.log(ul_new);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let remove = document.querySelector('.fn-remove-me');
document.body.removeChild(remove);

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let div = document.querySelector('div[data-function="printHere"]');
let ul_div = document.createElement('ul');
for (const car of cars){
  let li = document.createElement('li');
  li.textContent = car;
  ul_div.appendChild(li);
}
div.appendChild(ul_div);
console.log(ul_div);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries_image = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries_image.forEach(country => {
  const div = document.createElement('div');
  div.className = 'country-card';

  const title = document.createElement('h4');
  title.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;
  img.alt = country.title;

  div.appendChild(title);
  div.appendChild(img);
  document.body.appendChild(div);
});

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
document.getElementById('remove_button').addEventListener('click', () => {
  const cards = document.body.getElementsByClassName('country-card');
  if (cards.length > 0) {
    document.body.removeChild(cards[cards.length - 1]);
  }
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const countries_image2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries_image2.forEach(country => {
  const div = document.createElement('div');
  div.className = 'country-card';

  const title = document.createElement('h4');
  title.textContent = country.title;

  const img = document.createElement('img');
  img.src = country.imgUrl;
  img.alt = country.title;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.className = 'delete-button';

  deleteButton.addEventListener('click', () => {
    document.body.removeChild(div);
  });

  div.appendChild(title);
  div.appendChild(img);
  div.appendChild(detelteButton)
  document.body.appendChild(div);
});