document.addEventListener('DOMContentLoaded', function() {
    // Array de categorías
    var categorias = ['Cuenta', 'Carrito', 'Contactos'];
  
    // Obtener la lista ordenada
    var listaCategorias = document.getElementById('categorias-list');
  
    // Llenar la lista con las categorías
    categorias.forEach(function(categoria) {
      var listItem = document.createElement('li');
      listItem.textContent = categoria;
      listaCategorias.appendChild(listItem);
    });
  });