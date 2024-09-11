function verificarNum() {

    var num = Number.parseInt(window.prompt("Digte um numero: "));
    if (!isNaN(num)) {
        if (num % 2 == 0) {
            window.alert("Par");
        } else {
            window.alert("Impar");
        }
    }
    return;
}