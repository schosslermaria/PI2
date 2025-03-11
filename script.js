const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Filtro aplicado! 🌸 Exibindo plantas compatíveis.');
});


document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");

    // Animação ao carregar
    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);
});
