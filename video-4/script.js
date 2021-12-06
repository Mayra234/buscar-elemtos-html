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

arrayItem.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;

  const childNode = fragment.firstChild;
  console.log(item, childNode);

  fragment.insertBefore(li, childNode);
});
list.appendChild(fragment);
