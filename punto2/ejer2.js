 let enlaces = document.getElementsByTagName('a');  
    if (enlaces.length > 0) {
    enlaces[0].href = "https://www.google.com";
}

let titulo = document.querySelector('.titulo');
titulo.textContent="titulo midificado"

document.body.style.backgroundColor= 'red';