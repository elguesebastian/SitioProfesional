document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
  
    // Toggle dark mode for all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.toggle('dark-mode'));
  
    // Toggle dark mode for all services
    const servicios = document.querySelectorAll('.servicio');
    servicios.forEach(servicio => servicio.classList.toggle('dark-mode'));
  
    // Toggle dark mode for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.toggle('dark-mode'));
  
    // Toggle button icon
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});