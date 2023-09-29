document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
  
    // Obtiene los valores de los campos del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var profileImage = document.getElementById("profile_image").value;
  
    // Construye el objeto JSON con los datos del formulario
    var data = {
      "username": username,
      "password": password,
      "email": email,
      "profile_image": profileImage
    };
  
    // Realiza la petición POST utilizando Fetch API
    fetch("http://127.0.0.1:5000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
       // Muestra un mensaje de éxito al usuario
            alert("Usuario creado correctamente.");
      
            // Redirige a /templates/login después de 3 segundos
            setTimeout(function() {
              window.location.href = "/templates/Login.html";
            }, 3000);
      } else {
        throw new Error("Error en la petición");
      }
    })
    .catch(function(error) {
      console.error(error);
      // Muestra un mensaje de error al usuario
      alert("Error al crear el usuario. Por favor, inténtalo de nuevo.");
    });
  });