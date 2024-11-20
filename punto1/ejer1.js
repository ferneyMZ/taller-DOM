
    let infoDiv = document.getElementById('info');
    console.log(infoDiv.textContent);

  
    let detalle = document.querySelector('.detalle');
    detalle.textContent = "Este es un detalle modificado";

    
    let enlace = document.querySelectorAll('p');
    enlace.forEach(p => {
        p.style.backgroundColor = 'lightblue';
    });
