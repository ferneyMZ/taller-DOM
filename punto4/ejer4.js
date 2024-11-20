let ndiv= document.createElement('div');
ndiv.textContent="soy un nuevo div";

let vdiv=document.querySelector('div');
vdiv.parentNode.replaceChild(ndiv,vdiv);
console.log('se remplazo el div',ndiv);