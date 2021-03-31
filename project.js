var numeroSecreto = 3

var chute = parseInt(prompt ("Digite um número entre 0 e 10"))

if (numeroSecreto == chute) {
    alert("Acertou")

} else if (chute > numeroSecreto) {
    console.log("O número secreto é menor")
}  else if (chute < numeroSecreto) {
    console.log("O número secreto é maior")
}

else {
    alert("Errou. O número secreto era " + numeroSecreto )
}
