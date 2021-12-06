const list = document.getElementById('list');

const arrayElement = ['Primer elemnto', 'Segundo', 'Tercero'];

// arrayElement.forEach((item) => {
//   const li = document.createElement('li');
//   li.textContent = item;

//   list.appendChild(li);
// });

arrayElement.forEach((item) => {
  list.innerHTML += `<li>${item}</li>`;
});
