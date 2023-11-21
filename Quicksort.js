function swap(list, inicio, fim) {
    let temp = list[inicio];
    list[inicio] = list[fim];
    list[fim] = temp;
}

function particion(list, inicio, fim) {
    let pivot = list[fim];
    let greaterThanPivot = inicio;

    for (let comparison = inicio; comparison < fim; comparison++) {
        if (list[comparison] <= pivot) {
            swap(list, comparison, greaterThanPivot);
            greaterThanPivot += 1;
        }
    }

    swap(list, fim, greaterThanPivot);

    return greaterThanPivot;
}

function quickSort(list, inicio = 0, fim = undefined) {
    if (fim === undefined) {
        fim = list.length - 1;
    }

    if (inicio < fim) {
        let p = particion(list, inicio, fim);
        quickSort(list, inicio, p - 1);
        quickSort(list, p + 1, fim);
    }
}

const unorderedList = [8, 7, 6, 1, 0, 2];
quickSort(unorderedList);
console.log(unorderedList);
