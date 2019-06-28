console.log('Witaj!');
const name = 'Marta';
const age = 32;

console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat(a). Zapraszam na moją stronę.`);

const about = document.querySelector('.about__paragraph--js');
about.innerHTML = `Nazywam się ${name} i mam ${age} lat(a).`;