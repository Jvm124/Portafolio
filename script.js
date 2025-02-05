var info=document.getElementById(".informacion")
document.addEventListener("click",info)

function abrirModal() {
    document.getElementById("miModal").style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    let modal = document.getElementById("miModal");
    if (event.target === modal) {
        cerrarModal();
    }
};