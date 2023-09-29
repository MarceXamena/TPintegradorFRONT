document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Crear el objeto de datos
    var data = {
      username: username,
      password: password
    };
  
    // Realizar la solicitud POST al servidor
    fetch("http://127.0.0.1:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud");
      }
    })
    .then(function(data) {
      // Verificar si se recibió el user_id en la respuesta
      if (data.user_id) {
        // Redirigir a index.html y almacenar el user_id en sessionStorage
        sessionStorage.setItem("user_id", data.user_id);
        window.location.href = "chat.html";
      } else {
        console.log("Error: no se recibió user_id en la respuesta");
      }
    })
    .catch(function(error) {
      console.log("Error: " + error.message);
    });
  });