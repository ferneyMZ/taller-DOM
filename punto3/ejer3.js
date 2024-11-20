let parrafo=document.createElement('p')
let nuevop=document.createTextNode('este es un parrafo creado dinamicamente');
parrafo.appendChild(nuevop);
document.body.appendChild(parrafo);

let botonEliminar=document.querySelector('#eliminar');

botonEliminar.addEventListener('click',function(){
    let parrafoUno=document.querySelector('p');
    if (parrafoUno){
        parrafoUno.remove();
    }
})