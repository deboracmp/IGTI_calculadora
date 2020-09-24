// Mapeamento dos inputs de interação com o usuário, que estão em index.html.
var globalInputA = document.querySelector('#inputA');
var globalInputB = document.querySelector('#inputB');
var globalInput1 = document.querySelector('#input1');
var globalInput2 = document.querySelector('#input2');
var globalInput3 = document.querySelector('#input3');
var globalInput4 = document.querySelector('#input4');
var globalInput5 = document.querySelector('#input5');
var globalInput6 = document.querySelector('#input6');
var globalInput7 = document.querySelector('#input7');
var globalInput8 = document.querySelector('#input8');
var globalInput9 = document.querySelector('#input9');
var globalInput10 = document.querySelector('#input10');
var globalInput11 = document.querySelector('#input11');
var globalInput12 = document.querySelector('#input12');


function start() {
    globalInputA.addEventListener('input', calculate);
    globalInputB.addEventListener('input', calculate);

}

function formatNumber(number) {
    return new Intl.NumberFormat('pt-BR').format(number.toFixed(2));
}

function calculate() {

// Obtendo os valores de a e b a partir dos inputs
    var a = parseInt(globalInputA.value, 10);
    var b = parseInt(globalInputB.value, 10);

    // Função para o input1
    function sum(a, b) {
        var result = a + b;
        return result;
    }

    // Função para o input2 e input3
    function subtract(n1, n2) {
        var result = n1 - n2;
        return result;
    }


    // Função para o input4
    function multiplies(a, b) {
        var result = a * b;
        return result;
    }

    // Função para o input5 e input6
    function split(n1, n2) {
        if(n1 != 0) {
            var result = formatNumber(n1 / n2);
        } else {
            return "Divisão por 0";
        }
        return result;
    }

    // Função para o input9     
    function divInt(n) {
        
        var result = [];
        
        for(var i = 1; i <= n; i++) {
            if(n % i == 0) {
                result.push(i);
            } 
        }
       

        console.log(result);
        return `${result.join(',')} (${result.length})`
     }



    // Função para o input11 e 12
    function fator(n) {
        var r = 1;
        for(var i = n; i > 1; i--) {
            r *= i;
        }
        return r;
    }




// Chamando as funções do input1 e input2 e dando apelidos para elas 
    var soma = sum(a, b);
    var subtracao_ab = subtract(a, b);
    var subtracao_ba = subtract(b, a);
    var multiplicacao = multiplies(a, b);
    var divisao_ab = split(a, b);
    var divisao_ba = split(b, a);
    var potencia_a = Math.pow(a, 2);
    var potencia_b = Math.pow(b, 2);
    var divInt_a = divInt(a);
    var divInt_b = divInt(b);
    var fator_a = fator(a);
    var fator_b = fator(b);

// Alterando valor dos input de cálculo com os resultados 
    globalInput1.value = soma;
    globalInput2.value = subtracao_ab;
    globalInput3.value = subtracao_ba;
    globalInput4.value = multiplicacao;
    globalInput5.value = divisao_ab;
    globalInput6.value = divisao_ba;
    globalInput7.value = potencia_a;
    globalInput8.value = potencia_b;
    globalInput9.value = divInt_a;
    globalInput10.value = divInt_b;
    globalInput11.value = fator_a;
    globalInput12.value = fator_b;

}

start();
