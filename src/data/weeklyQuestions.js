export const weeks = [
  { value: '5', label: 'Week 5' },
  { value: '4', label: 'Week 4' },
  { value: '3', label: 'Week 3' },
];

const week5qs = [
  {
    week: 5,
    num: '1',
    qName: 'Various distances',
    content: `
# Problem Statement
Given is a point (x1,…,xN) in an N-dimensional space.

Find the Manhattan distance, Euclidian distance, and Chebyshev distance between this point and the origin. Here, each of them is defined as follows:
- The Manhattan distance: \`|x1| + … + |xN|\`

- The Euclidian distance: ![euclidean distance](http://www.sciweavers.org/tex2img.php?eq=%5Csqrt%7B%7Cx1%7C%5E2%20%2B%20...%20%2B%20%7CxN%7C%5E2%7D%0A&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=)    

- The Chebyshev distance: \`max(|x1|, ..., |xn|)\`

Note: Define a separate function for each distance and make it return the value.
## Output
Print the Manhattan distance, Euclidian distance, and Chebyshev distance between the given point and the origin, each in its own line. Each value in your print will be acceptedwhen its absolute or relative error from the correct value is at most 10^−9.

## Sample Input 
\`\`\`python
  [2, -1]
\`\`\`
## Sample Output
\`\`\`python
  3
  2.236067977499790
  2
\`\`\`

## Sample Input 2
\`\`\`python
  [3, -1, -4, 1, -5, 9, 2, -6, 5, -3]
\`\`\`
## Sample Output 2
\`\`\`python
  39
  14.387494569938159
  9
\`\`\`
    `,
  },
  {
    week: 5,
    num: '2',
    qName: 'Product Max',
    content: `
Given are integers 
a, b, c and d. If x and y are integers and a ≤ x ≤ b and c ≤ y ≤ d hold, what is the maximum possible value of x × y

# Input
Input is given from Standard Input in the following format:
\`a b c d\`
# Output
Return the answer.

# Sample Input
\`[1 2 1 1]\`
# Sample Output
\`2\`

If x = 1 and y = 1 then x × y = 1. If x = 2 and y = 1 then x × y = 2. Therefore, the answer is 2.

# Sample Input 2
\`[3, 5, -4, -2]\`
# Sample Output 2
\`2\`

The answer can be negative.

# Sample Input 3
\`[-1000000000, 0, -1000000000, 0]\`
# Sample Output 3
\`1000000000000000000\`
    `,
  },
];
export const pastproblems = [
  [
    {
      week: 4,
      num: '1',
      qName: 'Sum of Prime Numbers',
      content: `
Create a function that takes a list of numbers and returns the sum of all prime numbers in the list.

  \`    sum_primes([2, 3, 4, 11, 20, 50, 71]) = 87 \`
    `,
    },
    {
      week: 4,
      num: '2',
      qName: 'The Minion Game',
      content: `
Kevin and Stuart want to play the ***'The Minion Game'***.
#### Game Rules

Both players are given the same string, ***S***.
Both players have to make substrings using the letters of the string ***S***.
Stuart has to make words starting with consonants.
Kevin has to make words starting with vowels.
The game ends when both players have made all possible substrings.

#### Scoring 
A player gets +1 point for each occurrence of the substring in the string ***S***.


**For Example**


String ***S*** = BANANA
Kevin's vowel beginning word = ANA
Here, ANA occurs twice in BANANA. Hence, Kevin will get 2 Points.
For better understanding, see the image below:

![Example](https://s3.amazonaws.com/hr-challenge-images/9693/1450330231-04db904008-banana.png)


Your task is to determine the winner of the game and their score.
###### Input Format
A single line of input containing the string ***S***.
**Note**: The string ***S*** will contain only uppercase letters: \`[ A- Z ]\`

**Constriants**

0 < *len(S)* <= 10^6

###### Output Format

Print one line: the name of the winner and their score separated by a space.

If the game is a draw, print Draw.

##### Sample Input
\`\`\`bash
    BANANA
\`\`\`

##### Sample Output
\`\`\`bash
    Stuart 12
\`\`\`

---

Notes:
Vowels are only defined as *AEIOU*. In this problem, *Y* is not considered a vowel.
    `,
    },
  ],
  [
    {
      week: 3,
      num: '1',
      qName: 'Test\'s results',
      content: `
  It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:
  * Calculate the average mark of the whole class and round it to 3 decimal places.
  * Make a dictionary/hash with keys \`'h', 'a', 'l'\` to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
  * Return list \`[class_average, dictionary]\` if there are different type of marks, or \`[class_average, dictionary, 'They did well']\` if there are only high marks.

  ### Examples

  \`\`\`bash
        [10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

        [5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]
  \`\`\`

        `,
    },
    {
      num: '2',
      qName: 'Number = Index',
      content: `Given a sorted array of distinct integers, write a function index_equals_value that returns the lowest index for which array[index] == index.
  Return -1 if there is no such index.

  Your algorithm should be very performant.

  ### Examples
          input: [-8, 0, 2, 5]\
          output: 2 # since array[2] == 2

          input: [-1, 0, 3, 6]\
          output: -1 # since no index array satisfies array[index] == index
  `,
    },
  ],
  [
    {
      week: 2,
      qName: 'Divisibility',
      content: 'Write a Python program to find those numbers which are divisible by 7 and multiple of 5, between 1500 and 2700 (both included). (Easy)',
    },
    {
      week: 2,
      qName: 'Convert Temperature',
      content: `Write a Python program to convert temperatures to and from celsius, fahrenheit. (Easy)
      Formula : c/5 = f-32/9 


      [ where c = temperature in celsius and f = temperature in fahrenheit ]

*Expected Output :*

      60°C is 140 in Fahrenheit

      45°F is 7 in Celsius`,
    },
    {
      week: 2,
      qName: 'Count Even & Odd',
      content: `Write a Python program to count the number of even and odd numbers from a series of numbers. (Easy)

Sample numbers : numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9)

*Expected Output* :

      Number of even numbers : 5

      Number of odd numbers : 4`,
    },
    {
      week: 2,
      qName: 'Print a pyramid of Astriks',
      content: ` Write a Python program to construct the following pattern, using a nested for loop. (Medium) 

![Astroks](https://i.imgur.com/G6fwloR.png)
      `,
    },
    {
      week: 2,
      qName: 'Management (Exteremly Hard)',
      content: `
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
      `,

    },
  ],
  [
    {
      week: 1,
      qName: 'Even or Odd?',
      content: 'Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user. Hint: how does an even / odd number react differently when divided by 2?',
    },
    {
      week: 1,
      qName: 'Find the GCD',
      content: 'Use Euclid\'s algorithm for finding the gcd of two numbers.',
    },
    {
      week: 1,
      qName: 'Palindrime Checker',
      content: 'Ask the user for a string and print out whether this string is a palindrome or not. (A palindrome is a string that reads the same forwards and backwards.)',
    },
  ],
];
export default week5qs;
