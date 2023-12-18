


// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const printCountries = (array) => {
  const ul = document.createElement('ul');
  ul.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    li.textContent = array[i];
    ul.appendChild(li);
  }
}



// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeMe = document.querySelector('.fn-remove-me');
removeMe.remove();



// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');
const ul = document.createElement('ul');


for (const car of cars) {
  const li = document.createElement('li');      //!
  li.textContent = car;
  ul.appendChild(li);
}

div.appendChild(ul);



// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries1 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const addDivs = (array) => {

  for (let i = 0; i < array.length; i++) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');

    h4.textContent = array[i].title;
    img.src = array[i].imgUrl;

    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);     //! tenemos que acabar metieéndolo en el 
  }                                     //! html como indica el enunciado
}
addDivs(countries1);



// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const button = document.createElement('button');
button.textContent = 'Botón de borrar';


const deleteNow = () => {
  const allDivs = document.querySelectorAll('div');   //! para seleccionar el último tenemos que 'agruparlos'
  allDivs[allDivs.length - 1].remove()
}

button.addEventListener('click', deleteNow);        //* ESTA PARTE DESPUÉS DE DECLARAR LA FUNCIÓN
document.body.appendChild(button);                  //! tenemos que añadir elbotón para poder cliclarlo 




// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.


const allDivs = document.querySelectorAll('div');

for (const div of allDivs) {
  const button = document.createElement('button');
  button.textContent = 'Botón de borrar';
  button.addEventListener('click', () => div.remove());
  div.appendChild(button);

}

