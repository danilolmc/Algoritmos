const insertion = (arr = []) => {
    let i, j, key;

    for (i = 1; i < arr.length; i++) {
        
        key = arr[i];
        j = i - 1;

        while(j >= 0 && arr[j] > key){
            arr[ j + 1 ] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
        
    }

    return arr;
} 

let array = [7,2,1,5,9,3,4,6];

const orderedArray = insertion(array);

console.log(orderedArray);