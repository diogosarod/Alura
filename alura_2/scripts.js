let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 3;

function Chutar() {
  const chute = parseInt(document.querySelector("#valor").value);
  const resultado = document.querySelector("#resultado");
  const mensagemTentativas = document.querySelector("#mensagemTentativas");

  if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Digite um número de 0 a 10";
  } else if (chute == numeroSecreto) {
    resultado.innerHTML = "Uhull! Você acertou!";
    mensagemTentativas.innerHTML = ":)";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    resultado.innerHTML = `Que pena você errou, o número secreto é menor que  ${chute}.`;
    mensagemTentativas.innerHTML =
      "<mark>" + `Você têm ${tentativas} tentativas!` + "</mark>";
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    resultado.innerHTML = `Que pena você errou, o número secreto é menor que ${chute}.`;
    mensagemTentativas.innerHTML =
      "<mark>" + `Você têm ${tentativas} tentativas!` + "</mark>";
  }

  if (tentativas == 0) {
    mensagemTentativas.innerHTML =
      "<mark>" + `Acabaram suas tentativas, mas não fique triste, tente novamente` + "</mark>";
    resultado.innerHTML = `O número da sorte era: ${numeroSecreto}`;
  }
}

function Zerar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  resultado.innerHTML = "";
  valor.value = ""; 
}
