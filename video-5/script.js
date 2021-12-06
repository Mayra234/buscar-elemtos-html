const lista = document.querySelector('#lista');

const arrayList = ['item 1', 'item 2', 'item 3'];

const template = document.querySelector('#template-li').content;

const fragment = document.createDocumentFragment();

// arrayList.forEach((item) => {
//   const li = document.createElement('li');
//   li.classList.add('list');
//   const b = document.createElement('b');
//   b.textContent = 'Nombre: ';
//   const span = document.createElement('span');
//   span.classList.add('text-danger');
//   span.textContent = item;
//   li.appendChild(b);
//   li.appendChild(span);
//   fragment.appendChild(li);
// });

// lista.appendChild(fragment);

let fragment = '';
arrayList.forEach((item) => {
  fragment += `
   <li class="list">
     <b>Nombre: </b><span class="text-danger">${item}</span>
   </li>
   `;
});
lista.innerHTML = fragment;

// TEMPLATE

// arrayList.forEach((item) => {
//   template.querySelector('.list span').textContent = item;
//   // template.querySelector('.text-danger').textContent = item;
//   // template.querySelector('span').textContent = item;
//   const clone = template.cloneNode(true);
//   fragment.appendChild(clone);
// });
// lista.appendChild(fragment);
