//variables
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const texto = document.querySelector('#texto');
const errorMensaje = document.querySelector('.errorMensaje');
const btnenviar = document.querySelector('#enviar');

eventListeners();

function eventListeners(){

    nombre.addEventListener('focusout', ()=>{

        if(nombre.value === ''){

        nombre.classList.remove('border','border-1','border-success');
        nombre.classList.add('border','border-1','border-danger');


        }else{

        nombre.classList.remove('border','border-1','border-danger');
        nombre.classList.add('border','border-1','border-success');


        }

    });
    
    correo.addEventListener('focusout', () =>{

        if(correo.value === ''){

            correo.classList.remove('border','border-1','border-success');
            correo.classList.add('border','border-1','border-danger');
            

    
            }else{
    
            correo.classList.remove('border','border-1','border-danger');
            correo.classList.add('border','border-1','border-success');

    
            }

    });

    telefono.addEventListener('focusout', ()=>{

        if(telefono.value === ''){

            telefono.classList.remove('border','border-1','border-success');
            telefono.classList.add('border','border-1','border-danger');
            

    
            }else{
    
            telefono.classList.remove('border','border-1','border-danger');
            telefono.classList.add('border','border-1','border-success');

    
            }


    });


    texto.addEventListener('focusout', ()=>{

        if(texto.value === ''){

            texto.classList.remove('border','border-1','border-success');
            texto.classList.add('border','border-1','border-danger');
            

    
            }else{
    
            texto.classList.remove('border','border-1','border-danger');
            texto.classList.add('border','border-1','border-success');

            }

    });

    btnenviar.addEventListener('click', validarCampo);

}


function validarCampo (){

    if(nombre.value !== '' && correo.value !== '' && telefono.value !== '' && texto.value !== ''){

         errorMensaje.textContent = "formulario completado con exito"
         errorMensaje.classList.remove('text-danger', 'fs-6', 'border', 'border-1', 'border-danger', 'rounded');
         errorMensaje.classList.add('text-success','fs-6', 'border', 'border-1', 'border-success', 'rounded');
         
    }else{

        errorMensaje.textContent = "faltan campos";
        errorMensaje.classList.remove('text-success','fs-6', 'border', 'border-1', 'border-success', 'rounded');
        errorMensaje.classList.add('text-danger', 'fs-6', 'border', 'border-1', 'border-danger', 'rounded');


    }

}
