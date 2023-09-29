// Obtener el user_id almacenado en sessionStorage
var userId = sessionStorage.getItem("user_id");

// Verificar si se ha almacenado el user_id
if (userId) {
  // Realizar la solicitud Fetch para obtener la lista de servidores
  fetch("http://127.0.0.1:5000/users/" + userId + "/servers")
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud");
      }
    })
    .then(function(data) {
      // Obtener la referencia al elemento ul
      var serverList = document.getElementById("serverList");

      // Iterar sobre los servidores y crear los elementos li correspondientes
      data.forEach(function(server) {
        var li = document.createElement("li");
        li.textContent = server.nombre_servidor;
        serverList.appendChild(li);

        // Agregar evento de clic al elemento li
        li.addEventListener("click", function() {
          obtenerCanales(server.id_servidor);
        });
      });
    })
    .catch(function(error) {
      console.log("Error: " + error.message);
    });
} else {
  console.log("Error: user_id no encontrado en sessionStorage");
}

// Función para obtener los canales de un servidor y mostrarlos en el elemento ul
function obtenerCanales(serverId) {
  // Obtener la referencia al elemento ul
  var roomList = document.querySelector(".room-list");

  // Limpiar los elementos existentes en el ul
  roomList.innerHTML = "";

  // Realizar la solicitud Fetch para obtener la lista de canales
  fetch("http://127.0.0.1:5000/canales/" + serverId + "/canales")
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud");
      }
    })
    .then(function(data) {
      // Iterar sobre los canales y crear los elementos li correspondientes
      data.forEach(function(canal) {
        var li = document.createElement("li");
        //li.textContent = canal.nombre_canal + " (id: " + canal.id_canal + ")";
        li.textContent = canal.nombre_canal;
        roomList.appendChild(li);
      });
    })
    .catch(function(error) {
      console.log("Error: " + error.message);
    });
}