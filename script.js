   // Función para alternar los submenús y sub-submenús en dispositivos móviles
   function toggleDropdown(element) {
    // Verificamos si el elemento ya está activo
    if (element.classList.contains('active')) {
      // Si ya está activo, lo cerramos
      element.classList.remove('active');
    } else {
      // Si no está activo, lo mostramos y cerramos otros elementos
      const activeElements = document.querySelectorAll('.nav-item.active');
      activeElements.forEach(function(item) {
        item.classList.remove('active');
      });
      element.classList.add('active');
    }
  }

  // Función para manejar el clic fuera de la barra de navegación para cerrar los submenús
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('.navbar');
    if (!nav.contains(event.target)) {
      // Si se hace clic fuera del navbar, cerramos todos los submenús
      const activeElements = document.querySelectorAll('.nav-item.active');
      activeElements.forEach(function(item) {
        item.classList.remove('active');
      });
    }
  });

  // Manejar clics en los elementos de menú
  const dropdownElements = document.querySelectorAll('.nav-item');
  dropdownElements.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.stopPropagation(); // Evitar que se propague el clic
      toggleDropdown(item); // Alternar el estado del submenú
    });
  });


      // Función para alternar el menú hamburguesa
      function toggleMenu() {
        document.querySelector('.navbar').classList.toggle('active');
        document.querySelector('.menu-toggle').classList.toggle('active');
      }
    
      // Función para alternar el dropdown
      function toggleDropdown(element) {
        element.classList.toggle('active');
      }
    
      // Añadir evento a los elementos de la navegación
      const dropdowns = document.querySelectorAll('.nav-item');
      dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
          // Prevenir que el evento se propague, ya que está en la jerarquía
          event.stopPropagation();
    
          // Alternar la visibilidad del submenú
          dropdown.querySelector('.dropdown').classList.toggle('active');
          dropdown.querySelectorAll('.sub-dropdown').forEach(sub => sub.classList.toggle('active'));
          dropdown.querySelectorAll('.sub-sub-dropdown').forEach(subsub => subsub.classList.toggle('active'));
        });
      });
    
      // Cerrar el submenú si el usuario hace clic fuera del navbar
      document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
          document.querySelectorAll('.dropdown').forEach(function(menu) {
            menu.classList.remove('active');
          });
        }
      });