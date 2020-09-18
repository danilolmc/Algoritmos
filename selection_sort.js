let lista = [2, 3, 1, -5, 5];


function OrdenarCrescente(lista) {


    for (let j = 0; j < lista.length - 1; j++) {

        let menorIndice = j                                         ;

        for (let i = j; i < lista.length - 1; i++) {

            if (lista[i] < lista[menorIndice]) {
                menorIndice = i
            }
        }

        if (lista[j] > lista[menorIndice]) {

            let aux = lista[j];

            lista[j] = lista[menorIndice];

            lista[menorIndice] = aux;
        }
    }

    return lista;


}

console.log(OrdenarCrescente(lista))

