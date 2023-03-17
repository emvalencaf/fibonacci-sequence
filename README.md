# Questão 2

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

## Sobre o algoritmo

### Considerações iniciais
O presente código foi desenvolvido em JavaScript e foi optado por uma programação inteiramente funcional - ao invés de uma orientada ao objeto. O código foi desenvolvido em inglês e comentado em inglês (para manter a boa prática) e portguês.

### Sobre o código

O algoritmo foi dividido em 3 funções:

- promptAFibonacciNumber(n)

recebe um número (inteiro ou real) em seu parâmetro e imprime no console se o número passado ao parâmetro está ou não na sequência de fibonacci.

- isInFibonacciSequence(n)

recebe um número (inteiro ou real) em seu parâmetro e retorna um valor lógico (boolean) se o número encontra-se ou não na sequência de fibonacci.

- getFibonacciSequence(n)

recebe um número (inteiro ou real) em seu parâmetro e retorna uma array com a sequência de fibonacci até o número passado.

Foi optado por criar uma array na função getFibonacciSequence para facilitar refatorações futuras que peçam, por exemplo, em qual posição da sequência se encontra o número.

Para essa fatoração bastaria refatorar isInFibonacciSequence para retornar um objeto com duas propriedades: isInSequence: lógico e position: inteiro.

Ou chamar getFibonacciSequence na função promptAFibonacciNumber o que seria a opção mais indicada, visto que preserva a semântica da fatoração.