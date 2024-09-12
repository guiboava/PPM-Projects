var paragrafo = document.getElementById('paragrafo');
var section = document.getElementsByTagName('section')[0];

function calcularIdade() {

    var data = new Date(document.getElementById('inputIdade').value);
    if (data == 'Invalid Date') {
        window.alert("DIGITE UMA DATA VALIDA.");
        document.getElementById('inputIdade').setAttribute('value', '');
        return;
    }

    var dataUtc = new Date();
    var totalTeste = dataUtc.getFullYear() - data.getFullYear();
    var nodeTexto = document.createTextNode("Sua idade: " + totalTeste);

    if (!paragrafo) {
        paragrafo = document.createElement('p');
        paragrafo.setAttribute('id', 'paragrafo');
        section.appendChild(paragrafo);
        paragrafo.appendChild(nodeTexto);
    } else {
        paragrafo.removeChild(paragrafo.firstChild);
        paragrafo.appendChild(nodeTexto);
    }

    return;


}