// JavaScript

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
  
    fetch("url_del_servidor", {
      method: "POST",
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        document.getElementById("success-message").textContent = "Mensaje enviado con éxito";
        document.getElementById("contact-form").reset();
      } else {
        throw new Error("Error en la solicitud");
      }
    })
    .catch(function(error) {
      console.log("Error:", error);
      document.getElementById("success-message").textContent = "Hubo un error al enviar el mensaje";
    });
  });
  