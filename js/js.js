// Abrir el lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imageSrc;
    lightbox.style.display = "flex"; // Mostrar el lightbox
}

// Cerrar el lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Ocultar el lightbox
}

// Filtro de categorías
document.addEventListener("DOMContentLoaded", () => {
    const categoryItems = document.querySelectorAll("#categories li");
    const cards = document.querySelectorAll(".card");

    categoryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const category = item.getAttribute("data-category");

            // Actualizar la clase activa en el filtro
            categoryItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");

            // Mostrar u ocultar tarjetas según la categoría
            cards.forEach((card) => {
                if (category === "todas" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
