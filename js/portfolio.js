document.addEventListener('DOMContentLoaded', function () {
    const subMenuLinks = document.querySelectorAll('.menu li.submenu > a');

    subMenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Previene la navegación directa
            let subMenu = this.nextElementSibling;
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
            } else {
                subMenu.style.display = 'block';
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px'; // Ajusta la altura máxima para un despliegue suave
            }
        });
    });
});
