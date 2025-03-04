const categorias = {
    tempo: [
        { nome: "Manjericão", descricao: "Cresce em 30 dias.", imagem: "https://via.placeholder.com/250?text=Manjericão" },
        { nome: "Girassol", descricao: "Floresce em 100 dias.", imagem: "https://via.placeholder.com/250?text=Girassol" }
    ],
    solo: [
        { nome: "Cenoura", descricao: "Prefere solo arenoso.", imagem: "https://via.placeholder.com/250?text=Cenoura" },
        { nome: "Carvalho", descricao: "Melhor em solo argiloso.", imagem: "https://via.placeholder.com/250?text=Carvalho" }
    ],
    pets: [
        { nome: "Calathea", descricao: "Não tóxica para pets.", imagem: "https://via.placeholder.com/250?text=Calathea" },
        { nome: "Maranta", descricao: "Segura para animais.", imagem: "https://via.placeholder.com/250?text=Maranta" }
    ]
};

function mostrarCategoria(categoria) {
    const conteudo = document.getElementById("conteudo");
    conteudo.innerHTML = `<h2>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2><div class='catalogo'></div>`;

    categorias[categoria].forEach(planta => {
        const card = document.createElement("div");
        card.classList.add("planta");
        card.innerHTML = `
            <img src="${planta.imagem}" alt="${planta.nome}">
            <h3>${planta.nome}</h3>
            <p>${planta.descricao}</p>
        `;
        conteudo.querySelector(".catalogo").appendChild(card);
    });
}

// Busca
function buscarPlanta() {
    const termo = document.getElementById("busca").value.toLowerCase();
    for (let categoria in categorias) {
        categorias[categoria] = categorias[categoria].filter(planta => planta.nome.toLowerCase().includes(termo));
    }
    mostrarCategoria(Object.keys(categorias)[0]);
}

// Modo Claro/Escuro
document.getElementById("toggle-tema").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
