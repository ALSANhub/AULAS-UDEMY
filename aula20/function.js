// funcio classica
function saudacao(nome) {
    console.log(`Bom dia ${nome} !`);

}

saudacao('ALSAN');

function soma(x, y) {
    const resultado = x+ y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(1, 3));

//função anonima
const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(32));

//arrow function

const varRaiz = n => n ** 0.5;

console.log(varRaiz(112));





