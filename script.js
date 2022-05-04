
//Função definida ao botão
function Converter() {

  //Variãveis iniciais
  var valorColocado = document.getElementById("valor").value;
  var valorResposta1 = document.getElementById("valorConvertido");
  var valorResposta2 = document.getElementById("valorConvertido1");
    
    //Condicional para considerar a possibilidade de o usuãrio manter o campo vazio
    if (valorColocado == 0) {
      
      //Reset da resposta no HTML
      valorResposta1.innerHTML = "";
      valorResposta2.innerHTML = "";
      
      alert("Insira um número");
      
    }  

      else {

        //Cálculo do valor em dolar
        var valorInserido = document.getElementById("valor");
        var valor = valorInserido.value;
        var valorEmReal = parseFloat(valor);
        var valorEmDolar = valorEmReal / 4.91;
        var valorDolarArredondado = valorEmDolar.toFixed(2);

        //Imprimir o valor obtido na tela
        var elementValorConvertido = document.getElementById("valorConvertido");
        var valorResultado = "O valor convertido em dolar é $ " + valorDolarArredondado;
        elementValorConvertido.innerHTML = valorResultado;

        //Cálculo do valor em bitcoin]
        var valorInserido = document.getElementById("valor");
        var valor = valorInserido.value;
        var valorEmReal = parseFloat(valor);
        var valorEmBitcoin = valorEmReal / 195.756;
        var valorBitcoinArredondado = valorEmBitcoin.toFixed(2);

        //Imprimir o valor obtido na tela
        var elementValorConvertido = document.getElementById("valorConvertido1");
        var valorResultado1 = "e o valor convertido em bitcoin é R$ " + valorBitcoinArredondado;
        elementValorConvertido.innerHTML = valorResultado1;
      }
      
  

  }

  
