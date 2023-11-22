const swap = (Array, pos1, pos2) => {
    [Array[pos1], Array[pos2]] = [Array[pos2], Array[pos1]];
};

const shuffle = (Array, numSwaps) => {
    const length = Array.length;

    for(let i = 0; i < numSwaps; i++){
        const pos1 = Math.floor(Math.random() * length);
        const pos2 = Math.floor(Math.random() * length);
        swap(Array, pos1, pos2);
    }
};

const bubble_sort = (Array) => {
    const length = Array.length;

    for(let i = 0; i < length - 1; i++){
        for(let j = 0; j < length - 1 - i; j++){
            if(Array[j] > Array[j + 1]){
                swap(Array, j, j + 1);
            }
        }
    }

};
const selection_sort = (Array) => {
    const length = Array.length;

    for(let i = 0; i < length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < length; j++){
            if(Array[j] < Array[minIndex]) {
                minIndex = j;
            }
        }

        if(minIndex !== i){
            swap(Array, i, minIndex);
        }
    }
};

const particionamento = (Array, start, end) => {
        let pivot = Array[0];
        let i = 1;
        let j = i + 1;

        while (i <= j) {
            while (Array[i] < pivot);
                i++;
        }
        while (Array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(Array, i, j);
            i++;
            j--;
        }
};

const quick_sort = (Array, start, end) => {
        if (Array.length > 1) {
            let index = particionamento(Array, start, end);
            if (start < index - 1) {
                quick_sort(Array, start, index - 1);
            }
            if (index < end) {
                quick_sort(Array, index, end);
            }
        }
        return Array;
};

function add() {
    const input = document.getElementById("valor");
    const lista = document.getElementById("valores");

    const node = document.createElement("li");
    const valor = document.createTextNode(input.value);
    node.appendChild(valor);

    lista.appendChild(node);
    input.value=""
    input.focus();
}

function ordenar() {
    const listaValores = document.getElementById("valores");
    const listaSelecao = document.getElementById("algoritmo");
    const vetor = Array.from(listaValores.children).map(item => parseInt(eval(item.innerHTML)));

    const selectedIndex = listaSelecao.selectedIndex;
    let algoritmo;

    switch(selectedIndex){
        case 0:
            algoritmo = bubble_sort;
            break;
        case 1:
            algoritmo = selection_sort;
            break;
        case 2:
            algoritmo = quick_sort;
            break;
        default:
            algoritmo = bubble_sort;
    }

    algoritmo(vetor);

    const itensLista = vetor.map(item => `<li>${item}</li>`).reduce((acumulador, item) => acumulador + item);

    listaValores.innerHTML = itensLista;
}

function misturar() {   
    const listaValores = document.getElementById("valores");
    const vetor = Array.from(listaValores.children).map(item => parseInt(eval (item.innerHTML)));

    shuffle (vetor, vetor.length * 2);

    const itensLista = vetor.map(item => `<li>${item}</li>`).reduce((acumulador,item) => acumulador + item);

    listaValores.innerHTML = itensLista;
}