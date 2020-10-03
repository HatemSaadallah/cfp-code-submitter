const week3qs = [
  { 
      "qName": "Print String",
      "content": "Write a Python program to print the following string in a specific formatbhukjkjknjknm"
    },
    {
      "qName": "Print",
      "content": " Write a Python program to display the current date and time"
    },
]
export const pastproblems = [
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
export default week3qs;
