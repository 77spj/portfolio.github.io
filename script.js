document.addEventListener('DOMContentLoaded', function() {
    const setaBtn = document.getElementById('seta-btn');
    const textoEscondido = document.getElementById('texto-escondido');
  
    if(setaBtn && textoEscondido) {
        setaBtn.addEventListener('click', function() {
            textoEscondido.classList.toggle('mostrar-texto');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    }
});