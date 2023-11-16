function dolar() {
    let valorDolar = document.getElementById('valorDolar').value;
    valorDolar = parseFloat(valorDolar);
    let cotacaoDolar = 4.91;
    let valorEmReal = valorDolar * cotacaoDolar;

    if (isNaN(valorDolar)) {
      alert("Por favor, digite um valor válido para o dólar.");
      return;
    }

    valorEmReal = valorEmReal.toFixed(2);
    alert("R$" + valorEmReal);
  }