//objeto literal
const pessoal = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta dizendo oiiiii..`);
        console.log(`A minha idade atual é ${this.idade}`);
    },
    
    incrementaIDade() {
        this.idade++;
    }
    
}


console.log(pessoal.nome);
pessoal.incrementaIDade();
pessoal.fala();
pessoal.incrementaIDade();
pessoal.fala();
pessoal.incrementaIDade();
pessoal.fala();
pessoal.incrementaIDade();
pessoal.fala();

//função q cria objeto..

function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa ('felipe', 'santos', 29)
   

console.log(pessoa1.sobrenome)
