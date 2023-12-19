function criaCalc() {

    return {
       //atributos:
        display: document.querySelector('.display'),
        

       
        
        // metodos:
        inicia(){
            alert('Oi, inicializando..');
            this.clickBtns();
            this.PressEnter();
            
        },

        PressEnter(){
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode === 13){
                    this.realiza();
                }
            });
        },

        realiza(){
            let conta = this.display.value;

            try {
             conta = eval(conta);
             
             if(!conta){
                alert('CONTA INVALIDA!');
                return;
             }   
             this.display.value = String(conta);
            } catch (error) {
                alert('CONTA INVALIDA!');
                return;
            }

        },

        clearDisplay(){
            this.display.value = '';
        },

        limpar(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clickBtns() {
            // this -> calculadora
            document.addEventListener('click', e =>{
                const el = e.target;
                console.log(this)

                if(el.classList.contains('btn-num')){
                    this.btnPaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.limpar();
                }
                if(el.classList.contains('btn-eq')){
                    this.realiza();
                }
            });
        },
    
        btnPaDisplay(valor){
            this.display.value += valor;
        }
    };
    
}

const calc = criaCalc(); 
calc.inicia();