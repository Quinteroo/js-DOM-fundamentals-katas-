



// Utiliza el array
// para crear dinamicamente una lista ul > li
// de elementos en el div de html
// con el atributo data-function="printHere".


const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const printHere = document.querySelector('[data-function="printHere"]');
const ul = document.createElement('ul');

for (const place of places) {
  const li = document.createElement('li');
  li.textContent = place;
  ul.appendChild(li);
}

printHere.appendChild(ul);