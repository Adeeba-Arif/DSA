function insertionSort() {
    const input = document.getElementById('inputField').value;
    const numbers = input.split(' ').map(Number);
    numbers.sort((a, b) => a - b);
    document.getElementById('output').innerText = `Insertion Sort: ${numbers}`;
}

function bubbleSort() {
    const input = document.getElementById('inputField').value;
    const numbers = input.split(' ').map(Number);
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }
    document.getElementById('output').innerText = `Bubble Sort: ${numbers}`;
}

function selectionSort() {
    const input = document.getElementById('inputField').value;
    const numbers = input.split(' ').map(Number);
    for (let i = 0; i < numbers.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
        }
    }
    document.getElementById('output').innerText = `Selection Sort: ${numbers}`;
}

function linearSearch() {
    const input = document.getElementById('inputField').value;
    const numbers = input.split(' ').map(Number);
    const searchValue = parseInt(document.getElementById('searchValue').value);
    const index = numbers.indexOf(searchValue);
    if (index !== -1) {
        document.getElementById('output').innerText = `Linear Search: ${searchValue} found at index ${index}`;
    } else {
        document.getElementById('output').innerText = `${searchValue} not found`;
    }
}

function binarySearch() {
    const input = document.getElementById('inputField').value;
    const numbers = input.split(' ').map(Number);
    numbers.sort((a, b) => a - b); // Binary search requires a sorted array
    const searchValue = parseInt(prompt('Enter a number to search'));
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (numbers[mid] === searchValue) {
            document.getElementById('output').innerText = `Binary Search: ${searchValue} found at index ${mid}`;
            return;
        } else if (numbers[mid] < searchValue) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    document.getElementById('output').innerText = `${searchValue} not found`;
}
