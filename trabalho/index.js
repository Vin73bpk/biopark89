
function calcular() {
    var combustivel = parseFloat(document.getElementById("combustivel").value);
    var autonomia = parseInt(document.getElementById("autonomia").value);
    var distancia = parseInt(document.getElementById("distancia").value);

    var combustivel_necessario = (distancia / autonomia) * combustivel;
    document.getElementById("resultado").innerHTML = "Valor estimado a ser gasto: R$" + combustivel_necessario.toFixed(2);
}