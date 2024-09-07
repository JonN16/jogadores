function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

let pesquisa = document.getElementById("pesquisa");
let resultado = document.getElementById("pesquisaId");
let botao = document.getElementById("botao");

botao.addEventListener('click', () => {
    let resultados = '';
    let pesquisaValor = removerAcentos(pesquisa.value.toLowerCase()); 

    if (pesquisa.value === '' || pesquisa.value === ' ') {
        resultado.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }


    for (let dado = 0; dado < dados.length; dado++) {
        const element = dados[dado];


        let nomeSemAcentos = removerAcentos(element.nome.toLowerCase());
        let detalhesSemAcentos = removerAcentos(element.detalhes.toLowerCase());

        if (nomeSemAcentos.includes(pesquisaValor) || detalhesSemAcentos.includes(pesquisaValor)) {
            resultados += `
                <section class="pesquisa">
                    <h2><a href="#">${element.nome}</a></h2>
                    <p class="paragrafo">${element.descricao}</p>
                    <a class="a" href="${element.link}" target="_blank">Mais informações</a>
                </section>
            `;
        }
    }

    resultado.innerHTML = resultados;

    if (!resultados) {
        resultado.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
});
