const list = [5, 4, 10, 2, 3];


list_length = list.length;


function OrdenarCrescente(lista) {

    let aux = 0;

    for (let i = 0; i < list_length; i++) {

        for (let j = 0; j < list_length - 1; j++) {

            if (lista[j] > lista[j + 1]) {

                aux = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = aux;
            }
        }
    }

    return lista;
}

function OrdenarDecrescente(lista) {

    let aux = 0;

    for (let i = 0; i < list_length; i++) {

        for (let j = lista.length - 1; j >= 0; j--) {

            if (lista[j] > lista[j - 1]) {

                aux = lista[j];
                lista[j] = lista[j - 1];
                lista[j - 1] = aux;
            }
        }
    }

    return lista;
}

console.log("Ordenada em ordem crescente: ", OrdenarCrescente(list));
console.log("Ordenada em ordem decrescente: ", OrdenarDecrescente(list));