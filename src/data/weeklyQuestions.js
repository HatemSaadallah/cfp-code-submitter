const week4qs = [
  {
    "week": 4,
    "num": "1",
    "qName": "Sum of Prime Numbers",
    "content": `
Create a function that takes a list of numbers and returns the sum of all prime numbers in the list.
    
  \`    sum_primes([2, 3, 4, 11, 20, 50, 71]) = 87 \`
    `
  },
  {

  }
] 
export const pastproblems = [
  [
    {
      "week": 3,
      "num": "1",
      "qName": "Test's results",
      "content": `
  It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:
  * Calculate the average mark of the whole class and round it to 3 decimal places.
  * Make a dictionary/hash with keys \`"h", "a", "l"\` to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
  * Return list \`[class_average, dictionary]\` if there are different type of marks, or \`[class_average, dictionary, "They did well"]\` if there are only high marks.
  
  ### Examples
  
  \`\`\`bash
        [10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']
  
        [5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]
  \`\`\`
  
        `
    },
    {
      "num": "2",
      "qName": "Number = Index",
      "content": `Given a sorted array of distinct integers, write a function index_equals_value that returns the lowest index for which array[index] == index.
  Return -1 if there is no such index.
        
  Your algorithm should be very performant.
  
  ### Examples
          input: \[-8, 0, 2, 5]\
          output: 2 # since array[2] == 2
  
          input: \[-1, 0, 3, 6]\
          output: -1 # since no index array satisfies array[index] == index
  `
    },
  ],
  [
    {
      "week": 2,
      "qName": "Divisibility",
      "content": "Write a Python program to find those numbers which are divisible by 7 and multiple of 5, between 1500 and 2700 (both included). (Easy)"
    },
    {
      "week": 2,
      "qName": "Convert Temperature",
      "content": `Write a Python program to convert temperatures to and from celsius, fahrenheit. (Easy)
      Formula : c/5 = f-32/9 
      
      
      [ where c = temperature in celsius and f = temperature in fahrenheit ]
            
*Expected Output :*
    
      60°C is 140 in Fahrenheit

      45°F is 7 in Celsius`
    },
    {
      "week": 2,
      "qName": "Count Even & Odd",
      "content": `Write a Python program to count the number of even and odd numbers from a series of numbers. (Easy)
      
Sample numbers : numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9)

*Expected Output* :
      
      Number of even numbers : 5
      
      Number of odd numbers : 4`
    },
    {
      "week": 2,
      "qName": "Print a pyramid of Astriks",
      "content": ` Write a Python program to construct the following pattern, using a nested for loop. (Medium) 

![Astroks](https://i.imgur.com/G6fwloR.png)
      `
    },
    {
      "week": 2,
      "qName": "Management (Exteremly Hard)",
      "content": `
A company has N members, who are assigned ID numbers 1,...,N.

Every member, except the member numbered 1 , has exactly one immediate boss with a smaller ID number.

When a person X is the immediate boss of a person Y , the person Y is said to be an immediate subordinate of the person X .

You are given the information that the immediate boss of the member numbered i is the member numbered A i . For each member, find how many immediate subordinates it has.
      
The input form:
      ![test](https://i.imgur.com/cNryNgO.png)

### Sample Input:

      2
      2
      0
      0
      0

### Sample Output:

      2
      2
      0
      0
      0 

      The member numbered 1 has two immediate subordinates: the members numbered 2 and 3 .

      The member numbered 2 has two immediate subordinates: the members numbered 4 and 5 .

      The members numbered 3 , 4 , and 5 do not have immediate subordinates.



### Sample Input 2

      10
      1 1 1 1 1 1 1 1 1

### Sample Output 2
      9
      0
      0
      0
      0
      0
      0
      0
      0
      0

### Sample Input 3
      7
      1 2 3 4 5 6

### Sample Output 3
      1
      1
      1
      1
      1
      1
      0
      `


    },
  ],
  [
    {
      "week": 1,
      "qName": "Even or Odd?",
      "content": "Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user. Hint: how does an even / odd number react differently when divided by 2?"
    },
    {
      "week": 1,
      "qName": "Find the GCD",
      "content": "Use Euclid's algorithm for finding the gcd of two numbers."
    },
    {
      "week": 1,
      "qName": "Palindrime Checker",
      "content": "Ask the user for a string and print out whether this string is a palindrome or not. (A palindrome is a string that reads the same forwards and backwards.)"
    },
  ]
]
export default week4qs;
