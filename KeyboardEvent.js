// lowercase alphabet
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

document.body.addEventListener('keydown', function(event) {
    
  if (event.key === secretLetter) {

    const message = document.createElement('p');

    message.textContent = `SECRET KEY ${secretLetter.toUpperCase()} PRESSED`;

    document.body.appendChild(message);

    secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    }});
