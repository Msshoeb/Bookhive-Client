function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [2, 4, 6, 8, 10, 12, 14];
const targetElement = 10;
const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}
