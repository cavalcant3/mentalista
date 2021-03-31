var numeroSecreto = 3

var chute = parseInt(prompt("Digite um número entre 0 e 10"))

var tentativas = 2
while (tentativas > 0) {
    if (numeroSecreto == chute) {
        alert("Acertou")
        break   

    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor")
         chute = parseInt(prompt("Digite um número entre 0 e 10"))
        tentativas = tentativas - 1

    } else if (chute < numeroSecreto) {
       alert("O número secreto é maior")
       chute = parseInt(prompt("Digite um número entre 0 e 10"))
       tentativas = tentativas - 1
    } else if (tentativas = 0) {
        break
    }

}

