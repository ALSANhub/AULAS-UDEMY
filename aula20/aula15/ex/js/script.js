let numero = prompt('Digite um número');
numero = Number(numero);
const numeroTitulo = window.document.getElementById('numero-titulo');
const textTitulo = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
textTitulo.innerHTML = '';
textTitulo.innerHTML += `<p>Seu numero + 2 é ${numero + 2}<p>` ;
textTitulo.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}<p>` ;
textTitulo.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} <p>` ;
textTitulo.innerHTML += `<p>É NaN ${Number.isNaN(numero)}<p>` ;
textTitulo.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}<p>` ;
textTitulo.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}<p>` ;

textTitulo.innerHTML += `<p>Com duas casa decimais ${numero.toFixed(2)}<p>` ;

