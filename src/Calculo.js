const readline = require('readline');

// Configurar a interface para entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular juros compostos
function calcularJurosCompostos(capital, taxa, periodo) {
  const montante = capital * Math.pow((1 + taxa / 100), periodo);
  return montante.toFixed(2);
}

// Solicitar valores do usuário
rl.question('Digite o capital inicial (R$): ', (capital) => {
  rl.question('Digite a taxa de juros (% ao período): ', (taxa) => {
    rl.question('Digite o número de períodos: ', (periodo) => {
      // Realizar o cálculo
      const montante = calcularJurosCompostos(parseFloat(capital), parseFloat(taxa), parseInt(periodo));
      
      console.log(`\nMontante acumulado após ${periodo} períodos: R$ ${montante}`);
      console.log('Obrigado por usar o sistema de cálculo de juros compostos!');

      // Encerrar o programa
      rl.close();
    });
  });
});
