//Gerando a  sequencia fibonacci
function fibonacci(n) {

    let nuum = [0, 1];

    while (n > 2) {

        nuum.push(nuum[nuum.length - 1] + nuum[nuum.length - 2]);
        n--;
    }

    return nuum;
}


//Gerando a soma da sequencia fibonacci
function fibonacciSoma(n) {

    let nuum = [0, 1];

    let soma = 1;

    while (n > 2) {

        nuum.push(nuum[nuum.length - 1] + nuum[nuum.length - 2]);

        soma += nuum[nuum.length - 1];

        n--;
    }

    return soma;
}

console.log("Sequencia fibonacci: " + fibonacci(4).toString().replace(/,/g," ") + "\nSoma da sequência: "+ fibonacciSoma(4))


//Soma da sequencia com recursão
function fibonacciRecursion(n) {

    if (n <= 1) return 1;

    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

fibonacciRecursion(10);

