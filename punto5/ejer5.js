let btnMe=document.getElementById('clickMe');
btnMe.addEventListener('click', showAlert);
let btnREvent=document.getElementById('removeEvent');

function showAlert(){
    alert('boton clikeando');
}

    function removeClickEvent(){
        btnMe.removeEventListener('click',showAlert);
        alert('el evento fue eliminado');

    }
    btnREvent.addEventListener('click', removeClickEvent);


