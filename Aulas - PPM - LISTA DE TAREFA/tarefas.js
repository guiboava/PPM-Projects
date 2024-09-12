var tarefa = document.getElementById("insertTarefa");
var section = document.getElementsByTagName("section")[0];
var listaTarefa = document.getElementById("listaTarefa");
var id = 1;

function adicionarLista() {

    if (!tarefa.value) {
        if (!window.confirm("Campo de tarefa em branco.")) {
            return;
        }
    }

    var textParagraph = document.createTextNode(tarefa.value);

    if (!listaTarefa) {
        listaTarefa = document.createElement("ol");
        listaTarefa.setAttribute("id", "listaTarefa");
        section.appendChild(listaTarefa);
    }

    var itemTarefa = document.createElement("li");
    itemTarefa.setAttribute('id', id);
    listaTarefa.appendChild(itemTarefa);
    itemTarefa.appendChild(textParagraph);
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Deletar";
    deleteButton.setAttribute('id', id);
    deleteButton.setAttribute('class', 'buttonLi{');
    deleteButton.setAttribute("onclick", "deletarItem(id)");
    itemTarefa.appendChild(deleteButton);

    id++;
    return;

}
function deletarItem(id) {
    if (window.confirm("Este item será deletado de forma permanente!")) {
        document.getElementById(id).remove();
    }

    return;
}

document.getElementById("insertTarefa").addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        adicionarLista();
    }
});

