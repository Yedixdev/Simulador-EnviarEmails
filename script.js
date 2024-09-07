document.addEventListener('DOMContentLoaded', function() {
   const email = {
     email: '',
     asunto: '',
     mensaje: ''
   }
 
   // Seleccionar los elementos de la interfaz
   const inputEmail = document.querySelector('#email');
   const inputAsunto = document.querySelector('#asunto');
   const inputMensaje = document.querySelector('#mensaje');
   const formulario = document.querySelector('#formulario');
   const btnSubmit = document.querySelector('#formulario button[type="submit"]');
   const btnReset = document.querySelector('#formulario button[type="reset"]');
   const spinner = document.querySelector('#spinner');
 
   // Asignar eventos
   inputEmail.addEventListener('input', validar);
   inputAsunto.addEventListener('input', validar);
   inputMensaje.addEventListener('input', validar);
   formulario.addEventListener('submit', enviarEmail);
 
   btnReset.addEventListener('click', function(e) {
     e.preventDefault();
     email.email = '';
     email.asunto = '';
     email.mensaje = '';
     formulario.reset();
     ComprobarEmail();
   });
 
   function enviarEmail(e) {
     e.preventDefault();
     
     // Mostrar el spinner
     spinner.classList.remove('hidden');
     spinner.classList.add('flex');
 
     // Simular un envío de 3 segundos
     setTimeout(() => {
       spinner.classList.add('hidden');
       spinner.classList.remove('flex');
 
       // Reiniciar el formulario
       email.email = '';
       email.asunto = '';
       email.mensaje = '';
       formulario.reset();
       ComprobarEmail();

       const alertaExito = document.createElement('P');
       alertaExito.textContent = 'Mensaje enviado correctamente.'; // El texto de la alerta
       
       // Añadir una clase para aplicar estilos
       alertaExito.classList.add('alerta-exito'); 

       // Estilos adicionales (opcional)
       alertaExito.style.color = '#fff';
       alertaExito.style.background = 'rgba(39, 192, 123, 0.9)'; 
       alertaExito.style.padding = '10px';
       alertaExito.style.marginTop = '10px';
       alertaExito.style.borderRadius = '5px';
       alertaExito.style.fontSize = '18px';
       alertaExito.style.textAlign = 'center';
       
       formulario.appendChild(alertaExito);

       setTimeout(() => {
         alertaExito.remove();
       }, 2000);

     }, 2000); // Simulación de envío durante 2 segundos
   }
 
   function validar(e) {
     const referencia = e.target.parentElement;
     if (e.target.value.trim() === '') {
       mostrarAlerta(`El campo ${e.target.id} es obligatorio`, referencia);
       email[e.target.name] = '';
       ComprobarEmail();
       return;
     }
 
     if (e.target.id === 'email' && !validarEmail(e.target.value)) {
       mostrarAlerta('Este email no es válido', referencia);
       email[e.target.name] = '';
       ComprobarEmail();
       return;
     }
 
     limpiarAlerta(referencia);
     email[e.target.name] = e.target.value.trim().toLowerCase();
     ComprobarEmail();
   }
 
   function mostrarAlerta(mensaje, referencia) {
     limpiarAlerta(referencia);
     const error = document.createElement('P');
     error.textContent = mensaje;
     error.classList.add('error');
     error.style.color = '#fff';
     error.style.background = 'rgba(234, 192, 39, 0.9)';
     error.style.padding = '5px';
     error.style.marginTop = '10px';
     error.style.borderRadius = '5px';
     error.style.fontSize = '12px';
     error.style.fontWeight = '600';
     error.style.textAlign = 'center';
     referencia.appendChild(error);
   }
 
   function limpiarAlerta(referencia) {
     const alerta = referencia.querySelector('.error');
     if (alerta) {
       alerta.remove();
     }
   }
 
   function validarEmail(email) {
     const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
     return regex.test(email);
   }
 
   function ComprobarEmail() {
     if (Object.values(email).includes('')) {
       btnSubmit.disabled = true;
     } else {
       btnSubmit.disabled = false;
     }
   }
 });