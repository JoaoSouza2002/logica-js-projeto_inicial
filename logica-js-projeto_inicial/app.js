alert ("Boas vindas ao jogo do número secreto");
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um númreo de 1 a ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else{
        if (chute>numeroSecreto) {
            alert ("Você errou! o numero secreto é menor que "+chute);
        } else {
            alert("Você errou! o numero secreto é maior que "+chute);
        }
    }
    tentativas++
}
// Operador ternàrio
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! o numero secreto ${numeroSecreto} com o total de ${tentativas} ${palavraTentativa} !`);
