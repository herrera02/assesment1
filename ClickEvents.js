// button ref

const fooBtn = document.querySelector('#fooBtn');

const barBtn = document.querySelector('#barBtn');

const fooBarBtn = document.querySelector('#fooBarBtn');


// Click event listeners for each button

fooBtn.addEventListener('click', function() {

  const h3 = document.createElement('h3');

  h3.textContent = 'Foo';

  document.querySelector('main').appendChild(h3);});

barBtn.addEventListener('click', function() {

  const h3 = document.createElement('h3');

  h3.textContent = 'Bar';

  document.querySelector('main').appendChild(h3);});

fooBarBtn.addEventListener('click', function() {

  const h2 = document.createElement('h2');

  h2.textContent = 'FooBar';

  document.querySelector('main').appendChild(h2);});
