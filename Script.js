document.addEventListener('DOMContentLoaded', () => {
  const registroForm = document.getElementById('registroForm');
  const errorMensajeRegistro = document.getElementById('errorMensajeRegistro');

  if (registroForm) {
      registroForm.addEventListener('submit', function (e) {
          e.preventDefault(); // Evita que el formulario se envíe automáticamente

          // Limpia el mensaje de error al inicio de la validación
          errorMensajeRegistro.textContent = "";

          // Captura los valores de los campos
          const nombre = document.getElementById('nombre').value.trim();
          const correo = document.getElementById('correo').value.trim();
          const Numero = document.getElementById('NumeroRegistro').value.trim(); 
          const contraseña = document.getElementById('contraseña').value.trim();

          // Validación: verifica si los campos están vacíos
          if (!nombre || !correo || !Numero || !contraseña) {
              errorMensajeRegistro.textContent = "Todos los campos son obligatorios.";
              errorMensajeRegistro.style.color = "red";
              console.log("Error: campos vacíos");
              return;
          }

          // Validación del correo electrónico
          if (!validarEmail(correo)) {
              errorMensajeRegistro.textContent = "Por favor ingresa un correo válido.";
              errorMensajeRegistro.style.color = "red";
              console.log("Error: correo inválido");
              return;
          }

          if (!validarTelefono(Numero)) {
              errorMensajeRegistro.textContent = "El número de teléfono debe contener solo dígitos.";
              errorMensajeRegistro.style.color = "red";
              console.log("Error: teléfono inválido");
              return;
          }

          errorMensajeRegistro.textContent = ""; 
          alert("Registro exitoso");
          registroForm.reset(); // Limpiar campos
          console.log("Formulario de registro validado y listo para enviar.");
      });
  }
});

// Funciones de validación
function validarEmail(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function validarTelefono(Numero) {
  const regex = /^\d+$/;
  return regex.test(Numero);
}
