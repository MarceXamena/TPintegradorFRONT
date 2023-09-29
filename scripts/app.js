// Obtener referencias a los elementos relevantes del DOM
const serverList = document.querySelector('.server-list');
const roomList = document.querySelector('.room-list');
const messageContainer = document.querySelector('.message-container');
// Agregar un event listener a la lista de servidores
serverList.addEventListener('click', function(event) {
  // Verificar si se hizo clic en un elemento de la lista de servidores
  if (event.target.tagName === 'LI') {
    // Obtener el servidor seleccionado
    const selectedServer = event.target.textContent;
    
    // Simular una función para obtener los canales del servidor seleccionado
    const channels = getChannels(selectedServer);
    
    // Limpiar la lista de salas existente
    roomList.innerHTML = '';
    
    // Agregar los canales del servidor seleccionado a la lista de salas
    channels.forEach(function(channel) {
      const li = document.createElement('li');
      li.textContent = channel;
      roomList.appendChild(li);
    });
    
    // Marcar el servidor seleccionado como activo
    const activeServer = serverList.querySelector('.active');
    if (activeServer) {
      activeServer.classList.remove('active');
    }
    event.target.classList.add('active');
    
    // Limpiar el contenedor de mensajes
    messageContainer.innerHTML = '';
  }
});

// Agregar un event listener a la lista de salas
roomList.addEventListener('click', function(event) {
  // Verificar si se hizo clic en un elemento de la lista de salas
  if (event.target.tagName === 'LI') {
    // Obtener el canal seleccionado
    const selectedChannel = event.target.textContent;
    
    // Simular una función para obtener los mensajes del canal seleccionado
    const messages = getMessages(selectedChannel);
    
    // Limpiar el contenedor de mensajes
    messageContainer.innerHTML = '';
    
    // mostrar los mensajes del canal seleccionado
    messages.forEach(function(message) {
      const p = document.createElement('p');
      p.textContent = message;
      messageContainer.appendChild(p);
    });
  }
});

// Función simulada para obtener los canales de un servidor
function getChannels(server) {
  // Mapa de nombres de canales por servidor
  const channelMap = {
    'srv1': ['General', 'Noticias', 'Eventos'],
    'srv2': ['Discusión', 'Proyectos', 'Soporte'],
    'srv3': ['Ofertas', 'Ventas', 'Compras'],
    'srv4': ['Juegos', 'Música', 'Deportes']
  };
  
  // Verificar si el servidor tiene canales definidos en el mapa
  if (server in channelMap) {
    return channelMap[server];
  } else {
    return [];
  }
}

// Función simulada para obtener los mensajes de un canal
function getMessages(channel) {
  // Mapa de mensajes por canal
  const messageMap = {
    'General': ['Mensaje 1', 'Mensaje 2', 'Mensaje 3'],
    'Noticias': ['Noticia 1', 'Noticia 2', 'Noticia 3'],
    'Eventos': ['Evento 1', 'Evento 2', 'Evento 3'],
    'Discusión': ['Mensaje A', 'Mensaje B', 'Mensaje C'],
    'Proyectos': ['Proyecto X', 'Proyecto Y', 'Proyecto Z'],
    'Soporte': ['Consulta 1', 'Consulta 2', 'Consulta 3'],
    'Ofertas': ['Oferta A', 'Oferta B', 'Oferta C'],
    'Ventas': ['Venta X', 'Venta Y', 'Venta Z'],
    'Compras': ['Compra 1', 'Compra 2', 'Compra 3'],
    'Juegos': ['Juego 1', 'Juego 2', 'Juego 3'],
    'Música': ['Canción A', 'Canción B', 'Canción C'],
    'Deportes': ['Deporte X', 'Deporte Y', 'Deporte Z']
  };
  
  // Verificar si el canal tiene mensajes definidos en el mapa
  if (channel in messageMap) {
    return messageMap[channel];
  } else {
    return [];
  }
}