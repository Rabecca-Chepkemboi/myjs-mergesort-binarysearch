// 1. Write a function that takes in an unsorted array of integers and returns a new
//  array with the same integers sorted in ascending order using Merge Sort.

function mergeSort (arr){
if (arr.length <= 1){
    return arr;
};
let middle = Math.floor(arr.length / 2);
let left = arr.slice(0, middle);
let right = arr.slice(middle);

return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right){
    let emptyArr = [];
    while(left.length && right.length){
        if(left[0]>right[0]){
            emptyArr.push(right.shift());
        }
        else{
            emptyArr.push(left.shift());
        }
    }
    return[...emptyArr, ...left, ...right];
}
let arr = [23,56, 32, 12, 21, 33, 42, 74];
console.log(mergeSort(arr));


// 2. Given two sorted arrays, write a function to merge them into
// a single sorted array using Merge Sort.

function mergeArray(arry1, arry2){
    let ans = [...arry1, ...arry2];
    return ans.sort((a,b) => a-b);
}
let arry1 = [12, 13, 14];
let array2 = [15, 16, 17];
console.log(mergeArray(arry1, array2));


// 3. Write a function that takes in a sorted array of integers and a target value, 
//and returns the index of the target value in the array using Binary Search.

function binarySearch(array, targets){
    let left = 0;
    let right = array.length -1;

    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if(targets===array[mid]){
            return mid;
        }
        else if(targets < array[mid]){
            right = mid - 1;
        }
    else {left = mid + 1;
    }
    }
    return null;
}
let array = [45, 12, 6, 89, 2];
let targets = 6;
console.log(binarySearch(array, targets));



// 4. Write a function that takes in a sorted array of integers and a target value, and returns 
//the index of the first occurrence of the target value in the array using Binary Search.

function searchFirst(arr1, target) {
    let left = 0;
    let right = arr1.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr1[mid] === target) {
       
        if (mid === 0 || arr1[mid - 1] < target) {
          return mid;
        } else {
          right = mid - 1;
        }
      } else if (arr1[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }

const arr1 = [1, 2, 3, 3, 4, 5, 5, 5, 6];
const target = 5;

const value = searchFirst(arr, target);

console.log(value); 


//                   TAKEAWAY KEYS INCLUDES
// 1. Binary Search requires that the input array be sorted in ascending or descending order,
// as the algorithm relies on the order of the input array to determine which half of the 
//search interval to search next.

// 2. Binary Search is particularly well-suited for searching large sorted datasets, as it 
//is more efficient than a linear search algorithm that checks every element in the dataset.

// 3. Merge Sort is a sorting algorithm that divides an input array into smaller sub-arrays,
 //sorts those sub-arrays recursively, and then merges the sorted subarrays back together to 
 //produce a fully sorted array.


  
