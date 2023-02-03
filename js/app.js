// Rating Initialization

const Allstar = document.querySelectorAll('.star');
const valor = document.querySelector('#valor');
const resultado = document.querySelector('.m-valor');
//console.log(Allstar);

Allstar.forEach((star, i) =>{

    star.onclick = function(){

        //definicion de variable control
        let starActual = i+1;

       Allstar.forEach((star,j)=>{

        //si la estrella actual es mayor 
            if(starActual >= j+1 ) {

                star.innerHTML = '&#9733';
                valor.textContent = starActual;

            }else{

                star.innerHTML = '&#9734';
                valor.textContent = starActual;
        
            }

        });

        calc(starActual);
    }

});

function calc(actual, mensaje){

    let x = actual;

    switch(true){

        case (x<=3):mostrarHtml('Muy deficiente');
                    break;
        case (x>3 && x<=5): mostrarHtml('Insuficiente');
                     break;
        case (x>5 && x<=6): mostrarHtml('Suficiente');
                    break;
        case (x>6 && x<=7): mostrarHtml('Bien');
                    break;
        case (x>7 && x<=9): mostrarHtml('Notable');
                    break;
        case (x>9): mostrarHtml('Sobresaliente');
                    break;
        default: mostrarHtml('Seleccione una opción');
                break
    }

}

function mostrarHtml(valor){


    resultado.textContent = valor;

    
}