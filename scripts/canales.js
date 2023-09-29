document.getElementById('canalesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    const formData = new FormData(event.target);
    const canalesData = {};
    formData.forEach((value, key) => {
        canalesData[key] = value;
    });

    // Llamada a la API para invocar el método create del controlador
    fetch('/canales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(canalesData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Muestra la respuesta del servidor
    })
    .catch(error => console.error('Error:', error));
});
// function cargarImagen(){
//     var enlaceImagen = "https://photos.app.goo.gl/sxTSZZ41vesv95Z57";
//     var imagen = document.getElementById("imagen");

//     imagen.src = enlaceImagen;
// }

// window.onload = function() {
//     cargarImagen(); // Llama a la función cargarImagen() cuando la página se carga
//   }