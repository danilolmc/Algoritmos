function Potencia(n1,n2){

    if(n2 == 0) return 1;

    return (n1 * Potencia(n1,n2-1));
}

console.log(Potencia(4,3))