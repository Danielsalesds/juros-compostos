const readline = require('readline');

// Configurar a interface para entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular juros compostos
function calcularJurosCompostos(capital, taxa, periodo) {
  if (taxa < 0 || periodo < 0) {
    return "Erro: A taxa de juros e o número de períodos devem ser valores positivos.";
  }
  
  const montante = capital * Math.pow((1 + taxa / 100), periodo);
  return montante.toFixed(2);
}

// Solicitar valores do usuário
rl.question('Digite o capital inicial (R$): ', (capital) => {
  rl.question('Digite a taxa de juros (% ao período): ', (taxa) => {
    rl.question('Digite o número de períodos: ', (periodo) => {
      const capitalNumerico = parseFloat(capital);
      const taxaNumerica = parseFloat(taxa);
      const periodoNumerico = parseInt(periodo);

      // Validar capital inicial
      if (capitalNumerico < 0) {
        console.log("\nErro: O capital inicial deve ser um valor positivo.");
        rl.close();
        return;
      }

      // Realizar o cálculo
      const resultado = calcularJurosCompostos(capitalNumerico, taxaNumerica, periodoNumerico);

      if (isNaN(resultado)) {
        console.log("\nErro: Valores inválidos fornecidos. Tente novamente.");
      } else {
        console.log(`\nMontante acumulado após ${periodoNumerico} períodos: R$ ${resultado}`);
      }

      console.log('Obrigado por usar o sistema de cálculo de juros compostos!');
      rl.close();
    });
  });
});
