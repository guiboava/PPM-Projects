var section = document.getElementsByTagName('section')[0];

function verificarIdade() {

    var date = new Date(document.getElementById("inputDate").value);

    if (date == "Invalid Date") {
        return;
    }

    var anoAtual = new Date();
    var idade = anoAtual.getFullYear() - date.getFullYear();

    var textoFormatado = document.createTextNode("" + idade > 17 ? 'Maior de idade!' : 'Menor de idade!');
    var paragrafoIdade = document.getElementById('paragrafoIdade');

    if (!paragrafoIdade) {
        paragrafoIdade = document.createElement('p')
        paragrafoIdade.setAttribute('id', 'paragrafoIdade');
        paragrafoIdade.appendChild(textoFormatado);
        section.appendChild(paragrafoIdade);

    } else {
        paragrafoIdade.removeChild(paragrafoIdade.firstChild);
        paragrafoIdade.appendChild(textoFormatado);
    }

}