// calcularJurosCompostos.test.js
const { calcularJurosCompostos } = require('./Calculo'); // Supondo que o seu código original está no arquivo Calculo.js

describe('Testes de cálculo de juros compostos', () => {

  // Teste para valores positivos
  test('Deve calcular juros compostos corretamente para valores positivos', () => {
    const resultado = calcularJurosCompostos(1000, 5, 2); // capital: 1000, taxa: 5%, período: 2 anos
    expect(resultado).toBe('1102.50'); // O montante esperado após 2 anos é 1102.50
  });

  // Teste para valores negativos na taxa de juros
  test('Deve retornar erro se a taxa for negativa', () => {
    const resultado = calcularJurosCompostos(1000, -5, 2); // taxa negativa
    expect(resultado).toBe("Erro: A taxa de juros e o número de períodos devem ser valores positivos.");
  });

  // Teste para valores negativos no período
  test('Deve retornar erro se o período for negativo', () => {
    const resultado = calcularJurosCompostos(1000, 5, -2); // período negativo
    expect(resultado).toBe("Erro: A taxa de juros e o número de períodos devem ser valores positivos.");
  });

  // Teste para valores negativos no capital inicial
  test('Deve retornar erro se o capital inicial for negativo', () => {
    const resultado = calcularJurosCompostos(-1000, 5, 2); // capital negativo
    expect(resultado).toBe("Erro: O capital inicial deve ser um valor positivo.");
  });

});

