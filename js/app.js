// Rating Initialization

const Allstar = document.querySelectorAll('.star');
const valor = document.querySelector('#valor');
console.log(Allstar);

Allstar.forEach((star, i) =>{


    star.onclick = function(){

        console.log(star);
        //controlamos la estrella actual
        let starActual = i+1;
        //console.log(star);
        //console.log(i);
        console.log(starActual);

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
    }

});