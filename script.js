//Função definida ao botão
function Converter() {

  //Variãveis iniciais
  var valorColocado = document.getElementById("valor").value;
  var valorResposta1 = document.getElementById("valorConvertido");
  var valorResposta2 = document.getElementById("valorConvertido1");
  
  //Exibição das caixas de texto
  valorResposta1.hidden = false;
  valorResposta2.hidden = false;

  //Condicional para considerar a possibilidade de o usuário manter o campo vazio ou digitar 0
  if (valorColocado == 0) {
      
    //Ocultamento das caixas de texto
    valorResposta1.hidden = true;
    valorResposta2.hidden = true;
    //Mensagem de alerta
    alert("Insira um valor válido");
  }  

  else {

    //Cálculo do valor em dolar
    var valorInserido = document.getElementById("valor");
    var valor = valorInserido.value;
    var valorEmReal = parseFloat(valor);
    var valorEmDolar = valorEmReal / 5.24;
    var valorDolarArredondado = valorEmDolar.toFixed(2);

    //Imprimir o valor obtido na tela
    var elementValorConvertido = document.getElementById("valorConvertido");
    var valorResultado = "O valor convertido em dolar é $ " + valorDolarArredondado;
    elementValorConvertido.innerHTML = valorResultado;

    //Cálculo do valor em bitcoin]
    var valorInserido = document.getElementById("valor");
    var valor = valorInserido.value;
    var valorEmReal = parseFloat(valor);
    var valorEmBitcoin = valorEmReal / 105.580;
    var valorBitcoinArredondado = valorEmBitcoin.toFixed(2);

    //Imprimir o valor obtido na tela
    var elementValorConvertido = document.getElementById("valorConvertido1");
    var valorResultado1 = "O valor convertido em bitcoin é ₿ " + valorBitcoinArredondado;
    elementValorConvertido.innerHTML = valorResultado1;
  }
}
