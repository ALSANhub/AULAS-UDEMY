const nome = ['JHONI', 'FELIPE', 'AMEIDA', 'SANTOS'];

//for (let i in nome) {
//    console.log(nome[i]);
//}

for (let valor of nome){
    console.log(valor);
}

console.log('valor');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});