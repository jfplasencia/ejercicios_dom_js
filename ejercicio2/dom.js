//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement('div');
document.body.appendChild(div);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divp = document.createElement('div');
let p = document.createElement('p');
p.textContent = 'Insercion de texto'
divp.appendChild(p);
document.body.appendChild(divp);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let p6 = document.createElement('div');
 for (let i = 0; i < 6; i++){
   let nuevoP = document.createElement('p');
   nuevoP.textContent = "Parrafo ${i}";
   p6.appendChild(nuevoP);
}
document.body.appendChild(p6);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Soy dinámico';
document.body.appendChild(nuevoParrafo);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (let i = 0; i < apps.length; i++){
  const li = document.createElement('li');
  li.textContent = apps[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeElement = document.querySelectorAll('fn-remove-me');
for (let i = 0; i < removeElement.length; i++){
  removeElement[i].parentNode.removeChild(removeElement[i]);
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let p_m = document.createElement('p');
p_m.textContent = 'Voy en medio!';
const div2 = document.querySelectorAll('div');
document.body.insertBefore(p_m, div2[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let t_divs = document.querySelectorAll('.fn-insert-here');
for (let i = 0; i < t_divs.length; i++){
  let t_p = document.createElement('p');
  t_p.textContent = 'Voy dentro!';
  t_divs[i].appendChild(t_p);
}
