
    let verificar = document.querySelector('#verificar')
    let resultado = document.querySelector('#resultado')

    
    function tabuada() {
        let num = document.querySelector('#numero')
        let tab = document.querySelector('#tabuada')
        
        if(num.value.length == 0) {
            resultado.textContent = "Digite um valor válido"
        } else {
            let numero = Number(num.value)
            tab.textContent = ''
            resultado.textContent = ''
            for(let i = 1; i <= 10; i++) {
                let valor = document.createElement('option')
                let tabuada = numero * i
                valor.text = `${numero} x ${i} = ${tabuada}`
                valor.value = `tab${i}`
                tab.appendChild(valor)
            }
        }
    }
 
    verificar.addEventListener('click', tabuada)


