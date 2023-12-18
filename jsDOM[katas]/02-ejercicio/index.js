


// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);  //!



// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divp = document.createElement("div");
const p = document.createElement("p")

divp.appendChild(p);
document.body.appendChild(divp);



// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const div = document.createElement('div');

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  div.appendChild(p)
}

document.body.appendChild(div);



// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
const pdinamica = document.createElement('p');
pdinamica.textContent = 'Soy dinámico';





// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2 > .fn-insert-here'); //!
h2.textContent = 'Wubba Lubba dub dub';


// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const createUl = (array) => {
  const ul = document.createElement('ul');
  ul.innerHTML = "";                      //! para vaciar la función para cada uso

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    li.textContent = array[i];        //! textContent para indicar QUÉ estamos añadiendo

    ul.appendChild(li);
  }
}




// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const toDelete = document.querySelectorAll('.fn-remove-me');
toDelete.remove();


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const diVs = document.querySelectorAll("div");

const p1 = document.createElement("p");

p1.textContent = "Voy en medio!";

document.body.insertBefore(p1, diVs[1]);    //! primero lo que quieres insertar, luego la posición



//! pruebas
const p1 = document.createElement('p');
p1.textContent = 'Voy en medio!';

const body = document.querySelector('body');


body.insertBefore(p1, body.children[10]);




// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const fnInsertHere = document.querySelectorAll('.fn-insert-here')

for (const div of fnInsertHere) {
  const p2 = document.createElement("p");   //! tenemos que crearlo dentro del bucle for
  p2.textContent = "Voy dentro!";           //! para que itere dentro de la selección
  div.appendChild(p);                       //! y cree un p por elemento iterado
}