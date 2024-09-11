var numero1Input = document.getElementById('numero1Input');
var numero2Input = document.getElementById('numero2Input');
var operacaoSelect = document.getElementById('operacaoSelect');

// Atenção, deem preferência pelo uso de IDs e getElementById
var section = document.getElementsByTagName('section')[0];

console.log(numero1Input);
console.log(numero2Input);
console.log(operacaoSelect);

function calcular() {
    var numero1 = numero1Input.value;
    var numero2 = numero2Input.value;
    console.log(numero1, typeof numero1);
    console.log(numero2, typeof numero2);
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    console.log(numero1, typeof numero1);
    console.log(numero2, typeof numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Entrada inválida! Por favor informe números.')
        return;
    }

    var operacao = operacaoSelect.value;
    console.log(operacao, typeof operacao);

    var resultado;
    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
    }

    // alert('Resultado: ' + resultado);
    var paragrafoResultado = document.getElementById('resultado');
    var textoParagrafo = document.createTextNode('Resultado: ' + resultado);
    if (!paragrafoResultado) { // resultado === null || resultado === undefined
        paragrafoResultado = document.createElement('p');
        paragrafoResultado.setAttribute('id', 'resultado');
        paragrafoResultado.appendChild(textoParagrafo);
        section.appendChild(paragrafoResultado);
    } else {
        if (paragrafoResultado.firstChild) {
            paragrafoResultado.removeChild(paragrafoResultado.firstChild);
        }
        paragrafoResultado.appendChild(textoParagrafo);
    }
}

function limpar() {
    numero1Input.value = '';
    numero2Input.value = '';
    operacaoSelect.value = '+';
    var paragrafoResultado = document.getElementById('resultado');
    if (paragrafoResultado) {
        // paragrafoResultado.remove()
        // section.removeChild(paragrafoResultado);
        if (paragrafoResultado.firstChild) {
            paragrafoResultado.removeChild(paragrafoResultado.firstChild);
        }
    }
}

document.getElementById('limparButton').addEventListener(
    'click', limpar
)