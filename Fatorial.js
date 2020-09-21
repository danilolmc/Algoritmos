//Com recursão
function fatorial(n1){

    if (n1 == 1) return 1;

    return n1 * fatorial(n1 - 1);
}

//Com iteração
function fatorialIterado(n1){

    let n = 1;

    for(let i = n1; i > 0; i--){

        n = n * i; 
    }

    return n;
}

console.log(fatorial(3));

console.log(fatorialIterado(3));