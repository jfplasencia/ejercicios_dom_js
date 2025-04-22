// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.createElement('button')
button.id = 'buttonClick'
button.textContent = 'Info Click'

function getEventInfo(event) {
  console.log('Info click: ', event)
}

button.addEventListener('click', getEventInfo)
document.body.appendChild(button)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
document.addEventListener("DOMContentLoaded", () => {
  const focusInput = document.querySelector('.focus');

  focusInput.addEventListener('focus', () => {
      console.log(focusInput.value);
  });
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document.addEventListener("DOMContentLoaded", () => {
  const focusInput = document.querySelector('.focus');

focusInput.addEventListener('input', () => {
  console.log(focusInput.value);
  });
});

// 1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let ul_new = document.createElement('ul');
for (let i = 0; i < albums.length; i++){
  let album = albums[i];
  let li = document.createElement('li');
  li.textContent = album;
  ul_new.appendChild(li);
}
document.body.appendChild(ul_new);
console.log(ul_new);