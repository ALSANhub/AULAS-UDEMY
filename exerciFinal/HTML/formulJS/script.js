

function meuEscopo () {
    const form = window.document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const passoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefaul();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}
        ${peso.value} ${altura.value} </p>`;
    }

    form.addEventListener('subit', recebeEventoForm);
}
meuEscopo();

