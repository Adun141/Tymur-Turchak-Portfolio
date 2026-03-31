let randomArray = [];
function generateRandomArray() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    randomArray = arr;
    return randomArray;
} 
// Function for array
function paintBars(a, b) {
        b.innerHTML = '';
      a.forEach(num => {
                const bar = document.createElement('div');
                bar.className = 'sad';
                bar.style.height = num + 'px';
                b.appendChild(bar);
            });
}// Function for paint bars
        async function swapElement(skill) {
    for (let j = 0; j < randomArray.length - 1; j++) {
        for (let i = 0; i < randomArray.length - 1 - j; i++) {
            if (randomArray[i] > randomArray[i + 1]) {
                let temp = randomArray[i];
                randomArray[i] = randomArray[i + 1];
                randomArray[i + 1] = temp;
                paintBars(randomArray, skill);
                await new Promise(resolve => setTimeout(resolve, 300));
            }
        }
    }
}// Function for bubble sort
async function merge(left, right, skill) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
        paintBars([...result, ...left.slice(i), ...right.slice(j)], skill);
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    const finalResult = [...result, ...left.slice(i), ...right.slice(j)];
    return finalResult;
}

async function mergeSort(arr, skill) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = await mergeSort(arr.slice(0, mid), skill);
    const right = await mergeSort(arr.slice(mid), skill);

    return await merge(left, right, skill);
}

    // Function for merge sort
        
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button1');
    if (!button) return;
    button.addEventListener('click', () => {
        const skillContainer = document.querySelector('.skill');
        if (!skillContainer) return;
        generateRandomArray();
        paintBars(randomArray, skillContainer);
    });
});
// Generate array on display


document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.getElementById('sortButton1');
    if (!sortButton) return;
    sortButton.addEventListener('click', () => {
         const skillContainer = document.querySelector('.skill');
        if (!skillContainer) return;
            swapElement(skillContainer);
    })
})//sort array on display


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button2');
    if (!button) return;
    button.addEventListener('click', () => {
        const skillContainer = document.querySelector('.skill2');
        if (!skillContainer) return;
        generateRandomArray();
        paintBars(randomArray, skillContainer);
        
    });
});// Generate array on display for merge sort

document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.getElementById('sortButton2');
    if (!sortButton) return;
    sortButton.addEventListener('click', async () => {
        const skillContainer = document.querySelector('.skill2');
        if (!skillContainer) return;
 randomArray = await mergeSort(randomArray, skillContainer);
    })
}
);//sort array on display for merge sort
