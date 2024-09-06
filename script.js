document.addEventListener('DOMContentLoaded', function() {
   // Seleccionar los elementos de la interfaz
   const inputEmail = document.querySelector('#email');
   const inputAsunto = document.querySelector('#asunto');
   const inputMensaje = document.querySelector('#mensaje');
   const formulario = document.querySelector('#formulario');

   // Asignar eventos
   inputEmail.addEventListener('blur', validar);
   inputAsunto.addEventListener('blur', validar);
   inputMensaje.addEventListener('blur', validar);
   
   // Función para validar los campos
   function validar(e) {
      const referencia = e.target.parentElement;
      // Validación
      if(e.target.value.trim() === '') {
         mostrarAlerta(`El campo ${e.target.id} es obligatorio`, referencia);
         return;
      } 

      limpiarAlerta(e.target.parentElement);
   }

   // Función para mostrar la alerta
   function mostrarAlerta(mensaje, referencia) {
      limpiarAlerta(referencia);

      const error = document.createElement('P');
      // Estilos de la alerta
      error.textContent = mensaje;
      error.classList.add('error');
      error.style.color = '#fff';
      error.style.background = 'rgba(250, 51, 51, 0.5)';
      error.style.padding = '5px';
      error.style.marginTop = '10px';
      error.style.borderRadius = '5px';
      error.style.fontSize = '12px';
      error.style.fontWeight = '600';
      error.style.textAlign = 'center';

      // Inyectar el error debajo del campo actual
      referencia.appendChild(error);
   }

   //Funcion de limpiar alerta
   function limpiarAlerta(referencia) {
      const alerta  = referencia.querySelector('.error');
      if(alerta) {
         alerta.remove();
      }
   }
});