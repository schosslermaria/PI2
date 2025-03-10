const form = document.querySelector('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Filtro aplicado! 🌸 Exibindo plantas compatíveis.');
});
