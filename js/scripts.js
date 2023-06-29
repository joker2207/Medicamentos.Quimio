function submitForm(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtiene los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var tipoDocumento = document.getElementById("tipo_documento").value;
    var numeroDocumento = document.getElementById("numero_documento").value;
    var eps = document.getElementById("eps").value;
    var medicamento = document.getElementById("medicamento").value;
    var quimioterapia = document.getElementById("quimioterapia").value;
    var tipoMedicamento = document.getElementById("tipo_medicamento").value;
    var fechaEntrega = document.getElementById("fecha_entrega").value;
  
    // Crea un objeto FormData y agrega los valores del formulario
    var formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("tipo_documento", tipoDocumento);
    formData.append("numero_documento", numeroDocumento);
    formData.append("eps", eps);
    formData.append("medicamento", medicamento);
    formData.append("quimioterapia", quimioterapia);
    formData.append("tipo_medicamento", tipoMedicamento);
    formData.append("fecha_entrega", fechaEntrega);
  
    // Realiza una petición HTTP POST utilizando Fetch API
    fetch("https://script.google.com/macros/s/AKfycbx4CUsXZe7748PCw7fxdjJdx6ErOE7-KPVFbMZ7wJ43VbnxIewLkrtEa-ypmDtR0UHD/exec", {
      method: "POST",
      body: formData
    })
      .then(function (response) {
        // Verifica si la respuesta fue exitosa
        if (response.ok) {
          alert("¡Formulario enviado con éxito!");
          document.getElementById("myForm").reset(); // Reinicia el formulario
        } else {
          alert("Error al enviar el formulario. Por favor, inténtalo nuevamente.");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al enviar el formulario. Por favor, inténtalo nuevamente.");
      });
  }
  