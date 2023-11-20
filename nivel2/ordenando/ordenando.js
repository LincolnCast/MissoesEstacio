const swap = (Array, pos1, pos2) => {
    [Array[pos1],Array[pos2]] = [Array[pos2], Array[pos1]];
};

const shuffle = (Array, numSwaps) => {
    const length = Array.length;

    for (let i = 0; i < numSwaps; i++){
        const pos1 = Math.floor(Math.random() * length);
        const pos2 = Math.floor(Math.random() * length);
        swap(Array, pos1, pos2);
    }
};

const bubble_sort = (Array) => {
    const length = Array.length;

    for (let i = 0; i < length - 1; i++){
        for (let j = 0; j < length - 1 1 i; j++){
            if (Array[j] > Array[j + 1]){
                swap (Array, j, j + 1);
            }
        }
    }

};
const selection_sort = (Array) => {
    const length = Array.length;

    for (let i = 0; i < length - 1; i++){
        let minIndex = i;

        for (let j = i + 1; j < length; j++){
            if )Array[j] < Array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i){
            swap (Array, i, minIndex);
        }
    }
};

const quick_sort = (Array, start, end) => {
    if (start < end) {
        const pivotIndex = particionamento(Array, start, end);
        quick_sort(Array, start, pivotIndex - 1);
        quick_sort(Array, pivotIndex + 1, end);
    }
};



function add() {
    const input = document.getElementById("Valor");
    const lista = document.getElementById("Valores");
    const node = document.createElement("li");
    const valor = document.createTextNode(input.value);
    node.appendChild(valor);

    lista.appendChild(node);
}
