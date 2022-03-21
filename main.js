 // 1. selecionar el nodo nav 
 let nav = document.querySelector('#nav');
 // 2. indivuar los pixeles para cambiar el color de la nav 
 // 3. anadir el event scroll 
 document.addEventListener('scroll', () => {
   if (window.pageYOffset > 50) {
     // 4. anadir clases dinamicas 
     nav.classList.remove('borderNav');
     nav.classList.add('bg-nav');
     nav.style.transition = `0.2s`;
   } else {
     nav.classList.remove('bg-nav')
     nav.classList.add('borderNav')
   }
 })