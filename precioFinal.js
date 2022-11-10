(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  // bucle de validacion
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      else{
          event.preventDefault ()
          const numero = document.querySelector('totalValor').value;
          const total = document.querySelector('#totalCompra');
          total.innerHTML = numero;
          }

      form.classList.add('was-validated')
    }, false)
  })
})()


const valorTicket= 200;

let estudiante = 0.80;
let trainee = 0.50;
let junior = 0.15;

const cantidad = document.getElementById('cantidadEntradas');
const categoria = document.getElementById('selectCategoria');
const botonCalcular = document.getElementById('calcular');
const botonReset = document.getElementById('reset');
const total = document.getElementById('totalCompra');



function totalPagar(){

  let totalValor = (cantidad.value) * valorTicket;
  if(categoria.value ==1){
      totalValor = totalValor - (totalValor * estudiante);
  }
  else if (categoria.value == 2){
      totalValor = totalValor - (totalValor * trainee);
  }
  else if (categoria.value == 3){
      totalValor = totalValor - (totalValor * junior);
  }else{
      totalValor = totalValor;
  }

  total.innerHTML = `Total a pagar : $${totalValor}`; 
}


botonCalcular.addEventListener('click', totalPagar);

botonReset.addEventListener('click', ()=>{
  total.innerHTML = `Total a pagar : $`; 

});
