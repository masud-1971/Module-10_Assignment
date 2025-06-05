
// 1.  Write a function named countVowels that takes a string and returns the number of vowels in it.

// Ex: countVowels("Your Name")  // Output: 4

        function countVowels(str) {
            const vowels = 'aeiouAEIOU';
            let count = 0;
            for (let char of str) {
                if (vowels.includes(char)) {
                    count++;
                }
            }
                    return count;
        }
        const name = "Mohammed Masud Rana";
        console.log("Number of Vowels:" + countVowels(name));




// 2. Write a function named sortNumbers that takes an array of numbers and returns the array sorted in ascending order.

// Ex: sortNumbers([4, 1, 8, 3])  // Output: [1, 3, 4, 8]

        function sortNumbers(arr) {
            return arr.sort((a, b) => a - b);
        };
        // console.log("Sorted Numbers: " + sortNumbers([4, 1, 8, 3]));
        console.log(sortNumbers([4, 1, 8, 3]));


// 3. Write a function named reverseString that takes a string and returns the reversed version of the string.
// Ex: reverseString("hello")  // Output: "olleh"

        function reverseString(str) {
            let reversed = '';
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            return reversed;
        }


        console.log(reverseString("Bangladesh is a beautiful country")); // Output: "olleh"


// 4. Write a function named getLastElement that takes an array and returns the last element.
// Ex: getLastElement([10, 20, 30, 40])  // Output: 40

        function getLastElement(arr) {
            if (arr.length === 0) {
                return undefined; 
            }
            return arr[arr.length - 1];
        }
        console.log(getLastElement([10, 20, 30, 40]));

// Using pop method to get the last element. pop() removes the last element from an array and returns it.
  function getLastElementPop (arr){
        if (arr.length === 0){
            return undefined;   
        }
        return arr.pop();
  } 
  const numberArray = [10, 20, 30, 40, 99];
  console.log(getLastElementPop(numberArray));
  console.log(numberArray);


// 5. Write a function named mergeArrays that takes two arrays and returns a new array containing elements from both arrays.

// Ex: mergeArrays([1, 2], [3, 4])  // Output: [1, 2, 3, 4]

        function mergeArrays(arr1, arr2) {
            return [...arr1, ...arr2];
        }
        const array1 = [1, 2];
        const array2 = [3, 4, 5, 6];

        // console.log("Merged Array is:")
        console.log(mergeArrays(array1, array2));


// 6. Write a function named hasSpace that takes a string and returns true if it contains a space character.

// Ex: hasSpace("Ostad Limited")  // Output: true

function hasSpace(str){
    // return str.includes(' ');
    return str.indexOf(' ') !== -1; // Alternative way to check for space
}
console.log(hasSpace("Ostad Limited")); // Output: true


// 7. Write a function named isEmptyString that takes a string and returns true if the string is empty, otherwise false.

    function isEmptyString(str) {
        return str.length === 0;
    }
    const string = "Hello World";
    console.log(isEmptyString(string)); // Output: true


// 8. Write a function removeNegativeNumbers(arr) that removes all negative numbers from the array.

// Ex: removeNegativeNumbers([-5, 2, -1, 6, 0]) // Output: [2, 6, 0]

    function removeNegativeNumbers(arr) {
        return arr.filter(num => num >= 0);
    }
    const numbersArray = [-5, 2, -1, 6, 0, 99, 100, -50];
    console.log(removeNegativeNumbers(numbersArray));


