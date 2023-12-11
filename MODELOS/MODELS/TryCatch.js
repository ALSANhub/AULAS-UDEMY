function soma(x, y) {
    if ( typeof x != 'number' ||
    typeof y != 'number'
    ) {
        throw new Error ('x e y precisam ser numeros.');
    }
    return x + y 
}

try {
    console.log (soma(1,2));
    } catch (error) {
        console.log(error);
        console.log('Alguma coisa mais amigavel pro UX');
    }
    

    function retornaHR (data) {
        if (data && !(data instanceof Date)) {
            throw new TypeError('Esperando instancia de Date.');
        }

        if (!data) {
            data = new Date();
        }

        return data.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute : '2-digit',
            second : '2-digit',        
            hour12 : false
        });
            
    }

try {
    const data = new Date('01-01-1970');
    const hora = retornaHR(11);
    console.log(hora);
} catch (error) {
   // tratar err
   // console.log(e);
} finally {
    console.log('Tenha um ótimo dia ^^.')
}
   

