const nome = ['JHONI', 'FELIPE', 'AMEIDA', 'SANTOS'];

//for (let i in nome) {
//    console.log(nome[i]);
//}

//FOR Classico - geralmente com iteráveis (array ou Strings);
//FOR in - Retorna o indice ou chave (sstring, array ou objetos);
//FOR of - Retorna o valor em si (iteraveis, arrays ou strings);

for (let valor of nome){
    console.log(valor);
}

console.log('valor');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});