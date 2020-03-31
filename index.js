//Assignment
/*
1. What is the Big O for this? 1.1Constant O(1) 1.2 Linear O(n)

2. Constant O(1); Get one value as a number, only returns true or false.
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}

3.Are you here? O(n^2); nested for loops makes it run a loop within every for arr[i]

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

4. Doubler O(n): one for loop base on the size of array and it only increase time linearly
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

5. Naive search O(n) one for loop base on the size of array and it only increase time linearly to find the match item.

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

6. Creating pairs: O(n^2) nested for loops makes it run a loop within every for arr[i]

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

7.Compute the sequence: 

What does the following algorithm do? 
    Computes fibonacci sequence up to the user inputted number (num) and returns an array of the results
What is its runtime complexity?
    O(n)

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

num = 7

position (i) in num: [1,2,3,4,5,6,7]
value pushed result: [0,1,1,2,3,5,8]


8. An efficient search Logarithmic O(log(n))
Why? Try to get the item base on the currentIndex

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

9. Random element  linear O(n)

Runtime base on the length of arr

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

10. What Am I? constant O(1) because the n does not affect the time of the loop

if n is less than 2 get the result false
if n is greater or equal 2 
check to see if n is odd or even - if odd return true, else return false

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

11. Tower of Hanoi
*/
// function TOH(n,s,d,temp){
//     if(n===1){
//         print(s,d)
//     }
    
//     if(n >= 1){
//         TOH(n-1, s, temp, d)
//         print(s,d)
//         TOH(n-1, temp, d, s)
//     }
  
//     print(a,b){
//         console.log(`moving ${a} to ${b}`)
//     }
//   }

//[1, 3, 7, 15, 31]  
  
//TOH(1, A, C, B)
//TOH(3, A, C, B)
//TOH(3, A, C, B)
//  outupt for 3: ---7moves
//     A => C 
//     A => B 
//     C => B 
//     A => C 
//     B => A 
//     B => C 
//     A => C

//output  for 1 ---1 move

//output for 4 ---15move

//output for 5 ---31move

//runtime: O(2^n)

/* Counting Sheep  

function countSheep(num){
  for(let i = 1; i <= num + 1; i++) {
    if(i > num) {
      console.log(`All sheep jumped over the fence`)
    } else {
      console.log(`${i}: Another sheep jump over the fence`)
    }
  }
}

countSheep(3)*/

//2. Power Calculator


/*function powerCalculator(base, exp){
  let newNum=1;
  if(exp < 0) {
    return 'exponent should be >= 0';
  } else if(exp === 0){
    return 1;
  }
  for(let i=0; i< exp ; i++){ 
    newNum = base*newNum;
  }
  return newNum;
}


console.log(powerCalculator(5,2))*/

/*3.Reverse String*/

// function reverse(str){
//     let newStr = '';
//     for(let i=0; i<str.length; i++){
//         if(str.length < 2){
//         console.log('input a string with a length >1');
//         }  
//          newStr = str[i] + newStr; 
//     } 
//     return newStr;
// }

//Input: 'tauhida'
//Output: adihuat

//console.log(reverse('tauhida'))

/* 4.Triangle */

// function triangular(n){
//   let num = 0;
//   if(n<2){
//     return n;
//   }
//   for(let i = 1; i <= n; i++){
//     num += i;
//   }
//   return num;
// }

// console.log(triangular(5));
//expect: 15
//Should always return n*(n+1)/2

// 5. String Splitter 

  
/*function stringSplitter(str, sep='/') {
  if(str.length === 0){
    return [''];
  }

  let newArray = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === sep) {
      newArray += '';
    } else {
      newArray += str[i];
    }
  }
  return newArray;
}

console.log(stringSplitter('02/20/2020'));*/

//6. Fibonacci
/*
function fibonacci(n) {
    let fibArr = [];
    for(let i = 1; i < n; i++) {
        if(i === 1) {
            fibArr.push(0);
        } else if (i === 2) {
            fibArr.push(1);
        } else {
            fibArr.push(fibArr[i - 2] + fibArr[i - 3]);
        }
    }
    return fibArr;
}

console.log(fibonacci(5))*/

/*7.Factorial

function factorial(n) {
  let prod = 0;
  for(let i = 1; i <= n; i++){
    if(i === 1){
      prod += 1;
    } else {
      prod = prod * i;
    }
  }
  return prod;
}

console.log(factorial(5));
//output: 120*/

//13. Recursive Big O

/* 1. 
    function sheepCounter(sheep){
        if(sheep === 0){
        console.log('All sheep jumped over the fence');
        return;
        }
    
        console.log(`${sheep}: Another sheep jumps over the fence`);
        return sheepCounter(sheep - 1);
    }

    this is: linear (O(n)) because you increase the number of "loops" when you increase the sheep
    */

/* 2.
    function powerCalculator(base, exp) {
        if (exp < 0) {
            return "Exponent should be greater than 0";
        }
        if (base === 1) {
            return 1;
        }
        if (exp === 1) {
            return base;
        }
        return base * powerCalculator(base, exp - 1);
    }

    this is: O(n) because the number of exp will change the time for the operation
    */

/* 3.
    function reverseString(str) {
        if(str === ''){
            return '';
        }

        const newStr = str[str.length - 1];
        return newStr + reverseString(str.slice(0, -1));
    }
    this is: O(n) because the length of string will change the time for the operation
    */

/* 4. 
    function nthTriangularNumber(n) {
        if (n === 1) {
            return 1;
        }
        return n + nthTriangularNumber(n - 1);
    }
   this is: O(n) because the number of n will change the time for the operation*/

/*

   /* 5.
   function stringSplitter(str, separator='/') {
        if(str.length === 0){
            return [''];
        }

        const char = str[0];
        if(char === separator){
            return ['', ...stringSplitter(str.slice(1))];
        }
        const newArray = stringSplitter(str.slice(1));
        newArray[0] = char + newArray[0];
        return newArray;
    }
    this is: O(n) because the length of str will change the time for the operation*/

/*

    /* 6. 
    function fibonacci(n, fibSeq = []) {
        if(fibSeq.length === n) {
            return fibSeq;
        }
        if (fibSeq.length < 2) {
            fibSeq.push(1);
            return fibonacci(n, fibSeq);
        }
        fibSeq.push(fibSeq[fibSeq.length -1] + fibSeq[fibSeq.length -2]);
        return fibonacci(n, fibSeq);
        }
        this is: O(n) because the number of n will change the time for the operation*/

/* 7. 
    function factorial(num) {
        if (num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    this is: O(n) because you will increase the number of loops according to the num inputted
    */

/* 8. 
    function mazeSolver(maze, row = 0, col = 0) {

        if(maze[row][col] === 'e') {
            return '';
        }
        if(col < maze[row].length - 1 && (maze[row][col + 1] !== '*' && maze[row][col + 1])) {
            maze[row][col] = '*';
            const next = 'R' + mazeSolver(maze, row, col + 1);
            maze[row][col] = ' ';
            return next ;
        }
        if(row < maze.length - 1 && (maze[row + 1][col] !== '*' && maze[row + 1][col])) {
            maze[row][col] = '*';
            const next = 'D' + mazeSolver(maze, row + 1, col);
            maze[row][col] = ' ';
            return next;
        }
        if(col > 0 && (maze[row][col - 1] !== '*' && maze[row][col - 1])) {
            maze[row][col] = '*';
            const next = 'L' + mazeSolver(maze, row, col - 1);
            maze[row][col] = ' ';
            return next;
        }
        if(row > 0 && (maze[row - 1][col] !== '*' && maze[row - 1][col])) {
            maze[row][col] = '*';
            const next = 'U' + mazeSolver(maze, row - 1 , col);
            maze[row][col] = ' ';
            return next;
        }

    }

    this is: O(n)*/

/* 9.
    const mazeAll = function(labyrinth, position=0, row, col, direction='S',path){
    if(col<0 || row < 0){
        return;
    }
    if(col>=labyrinth[0].length || row>=labyrinth.length){
        return;
    }
   
    path[position] = direction;
    position++;

    if (labyrinth[row][col] === 'e'){
        PrintPath(path, 1, position - 1);
        return;
    }
    if (labyrinth[row][col] === ' ') {
        // The current cell is free. Mark it as visited
        labyrinth[row][col] = 's';
        // Invoke recursion to explore all possible directions
        mazeAll(labyrinth,position,row, col - 1, 'L',path); // left
        mazeAll(labyrinth,position,row - 1, col, 'U',path); // up
        mazeAll(labyrinth,position,row, col + 1, 'R',path); // right
        mazeAll(labyrinth,position,row + 1, col, 'D',path); // down
        // Mark back the current cell as free
        labyrinth[row][col] = ' ';
    }
    // Remove the last direction from the path
    position--;

}

this is: O(n)
*/

/* 10. 
function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}

function printAnagram(word){
    anagrams(' ', word);
}

this is: O(n^2)


/* 11.
function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

this is: O(n^2)
*/
/*12 binary
function binaryRep(input){
    if(input<=0){
        return '';
    } 
    let binary = Math.floor(input%2);
    return binaryRep(Math.floor(input/2)) + binary

}
this is: O(2^n)
 */


// 14. Iterative Big O: all (1-7) are O(n)