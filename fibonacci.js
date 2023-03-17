
// it'll print in the console if a number is in fibonacci sequence or not
// vai imprimir no console se um número está ou não na sequência de fibonacci
const promptAFibonacciNumber = (n) => {
    // will check if n is a number if not will throw an error
    // vai checar se n é um número, se não for será lançado um erro.
    if (typeof n !== "number") throw new Error("must be an number");
    console.log(isInFibonacciSequence(n) ? `${n} pertence à sequência de fibonacci` : `${n} não pertence à sequência de fibonacci`);
    return;
};

// it'll check if an number is in fibonnacci's sequence
// vai checar se um número está na sequência de fibonacci
const isInFibonacciSequence = (n) => {
    // will check if n is a number if not will throw an error
    // vai checar se n é um número, se não for será lançado um erro.
    if (typeof n !== "number") throw new Error("must be an number");

    // with the number is in the array (with the fibonacci sequence) will return true if not false
    // se o número estiver na array com a (sequência de fibonacci) o método array.includees vai retornar true, senão false;
    return getFibonacciSequence(n).includes(n);
};

// it'll create an array with fibonacci sequence until the asked number
// vai criar uma array com os números da sequência de fibonacci até o número passado por paramêtro
const getFibonacciSequence = (n) => {
    if (typeof n !== "number") throw new Error("must be an number");
    // this array will get the fibonocci sequence
    // essa array vai pegar os números da sequência de fibonocci
    const fibonacciSequence = [0, 1];// first two numbers are 0 and 1; os primeiros dois números da sequência são 0 e 1

    // it will get the sequence until the number passed to the function
    // vai colocar a sequência até o número passado a função
    for (let i = 2; i <= n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }

    return fibonacciSequence;
};

promptAFibonacciNumber(4);