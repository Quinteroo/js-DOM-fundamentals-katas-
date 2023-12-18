


// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const button = document.createElement('button');
button.textContent = 'click me!';
button.setAttribute('id', 'btnToClick');
button.addEventListener('click', (ev) => {
  console.log(ev)
});
document.body.appendChild(button);


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector(".focus");
input.addEventListener("focus", (e) => console.log(e.target.value))


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input1 = document.querySelector(".value");
input1.addEventListener("input", (e) => console.log(e.target.value))