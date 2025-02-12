import type { Topic } from '../types';

export const cppContent: Topic[] = [
  {
    id: 'intro',
    title: 'Introduction to C++',
    content: 'C++ was developed by Bjarne Stroustrup at Bell labs in 1979, as an extension to the C language.\n\nThe major difference between C and C++ is that C is a procedural programming language; which means that it is derived from sequential step by step structured programming. Some of it\'s applications includes scheduling running of other programs, designing games, graphics etc.\n\nOn the other hand C++ is a combination of procedural programming as well as object oriented programming. Objects consists of Data in form of it\'s characteristics and are coded in the form of methods. In object oriented programming computer programs are designed using the concept of objects that interact with the real world.',
    completed: false,
    order: 1
  },
  {
    id: 'c-vs-cpp',
    title: 'C vs C++',
    content: 'Key differences between C and C++:\n\n• C is a function driven language, while C++ is an object driven language\n• In C, functions cannot be defined inside structures, while in C++ functions can be used inside a structure\n• C uses functions for input/output (scanf/printf), while C++ uses objects (cin/cout)\n• C does not provide direct support for error handling, while C++ provides exception handling\n• C does not support reference variables, while C++ supports reference variables',
    completed: false,
    order: 2
  },
  {
    id: 'cpp-syntax',
    title: 'C++ Syntax',
    content: 'The following code is written in C++\nWe shall look at each element of the following code in detail to understand the syntax of C++\n\n### Explanation\n\n`#include <iostream>`: This is a header file library. `<iostream>` stands for standard input-output stream. It allows us to include objects such as `cin` and `cout`, `cerr` etc.\n\n`using namespace std`: Means that names for objects and variables can be used from the standard library. It is also used as additional information to differentiate similar functions.\n\n`int main()`: The function `main` is called just as in C. Any code inside its curly brackets `{}` will be executed.\n\n`cout`: is an object used to print a particular text after `<<` in quotes. In our example it will output "Hello World". (for personal reference we can say it is similar to `printf` in C)\n\n`return 0`: Terminates the function `main`\n\n### Note\n1) Every C++ statement ends with a semicolon `;`\n2) Compiler ignores white spaces. Multiple line spaces are used to make the code more readable.\n\n### Omitting Name spaces\nC++ programs run without the standard namespace library. This can be done by writing `std` keyword followed by `::` operator inside `int main()`\n\nExample:',
    code: '#include <iostream>\nusing namespace std;\n\nint main() \n{\n    cout <<"Welcome to SD\'s C++!";\n    return 0;\n}',
    output: 'Welcome to SD\'s C++!',
    additionalCode: '#include <iostream>\nint main()\n{\n    std::cout <<"Hello Sathish Dusharla";\n    return 0;\n}',
    additionalOutput: 'Hello Sathish Dusharla',
    completed: false,
    order: 3
  },
  {
    id: 'output',
    title: 'Output (Print Text)',
    content: 'Using the cout object\nAs discussed earlier the cout object, together with the << operator, is used to output values/print text.\n\nYou can add as many cout objects as you want. However, note that it does not insert a new line at the end of each object - all of them will be printed in a single line.\n\n### New Lines\n\nIn order to insert a new line after each object declaration `\\n` is used. Or another way to do so is using `endl` manipulator\n\nNote: `\\n` is the preferred way to break lines.',
    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Demo Code.";\n  cout << "I am learning C++.";\n  cout << "Print text.";\n  return 0;\n}',
    output: 'Demo Code.I am learning C++.Print text.',
    additionalCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Demo Code.\\n";\n  cout << "I am learning C++" << endl;\n  cout << "print text";\n  return 0;\n}',
    additionalOutput: 'Demo Code.\nI am learning C++\nprint text',
    completed: false,
    order: 4
  },
  {
    id: 'user-input',
    title: 'User Input',
    content: 'cin is used to get user input. This is paired along with the extraction operator (>>)\n\nThe following example reads a value from the user and prints it on the screen:',
    code: '#include <iostream>\nusing namespace std;\n\nint main()\n{\n  int num;\n  cout << "Type a number: ";\n  cin >> num;\n  cout << "Your number is: " << num;\n  return 0;\n}',
    output: 'Type a number: [user input]\nYour number is: [user input]',
    completed: false,
    order: 5
  },
  {
    id: 'variables',
    title: 'Variables',
    content: 'Just as in C, there are different types of variables defined with some specific keywords. Variables are defined as "a data item that may take on more than one value during the run time of a program". Variable has to be of a specified data type.\n\n• int: Stores all kinds of integers e.g. 12, 873\n• double: Stores floating point numbers which are decimals e.g. 12.3, 16.1\n• char: Stores single letters, or we can say characters of a string e.g. \'G\', \'g\'\n• string: Collection of characters makes a string. These are written in double quotes e.g."Demo Code"\n• bool: Stored values are either true or false. Shorthand for "Boolean".\n\n### How to declare a Variable?\nJust as in C, we need to mention its data type followed by the variable and equate it to its value. However, assigning a value to the variable is not necessary.\n\nSyntax:\n\ntype variable = value;\n\n### Example:\n\ndouble num = 5;\n\nNote: The value of the variable can be overwritten by declaring the variable again later in the code. In order to make the value of variable fixed and avoid overwriting\'s possibility, the `const` keyword is used.\n\nconst int num = 5; // num will always be 5 and its value will not change. If it is overwritten later in the code, this will show an error.\n\n### C++ Identifiers\nIdentifiers are the names of functions, variables, structures, etc. (the elements we define) used to identify them.\n\nAll C++ identifiers must be identified with unique names.\n\nExamples include x, y as well as age, num, etc.\n\nNote: Using informative identifiers such as num, age are suggested to increase readability of code.\n\n### Rules for constructing identifier names:\n1) Can consist of letters, digits, and underscores\n2) Must begin with a letter or an underscore\n3) These are case sensitive\n4) Whitespaces or special characters like !, #, %, etc. are not allowed\n5) Reserved words such as int or cout cannot be used as names.',
    code: 'double num = 5;',
    additionalCode: 'const int num = 5; // num will always be 5 and its value will not change. If it is overwritten later in the code, this will show an error.',
    completed: false,
    order: 6
  },
  {
    id: 'datatypes',
    title: 'Data Types',
    content: 'We already introduced data types earlier in the variables section.\nHere is an example of a code with all the data types used for revision purpose.\n\n### Space each data type occupies\n\n• int - 4 bytes\n• float - 4 bytes\n• double - 8 bytes\n• char - 1 byte\n• bool – 1 byte\n\nNote: Since string is a collection of characters it occupies the space equivalent to that of the addition of the space occupied by each character in that string.\n\n### What is the difference between float and double?\n\nBoth of them differ in their size. Float occupies 4 bytes however double occupies 8 bytes. This implies they also differ in the precision they provide. The precision of float is only six decimal digits, while double variables have a precision of about 15 digits. Hence it is safer to use double unless you are concerned about how much memory is being occupied.',
    code: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main () {\n\n  // Creating variables\n  int _Num = 5; // Integer \n  float _Float = 5.99; // Floating point number\n  double _Double = 9.98; // Floating point number\n  char _Char= \'G\'; // Character\n  bool _Bool = true; // Boolean\n  string _String = "Namaste"; // String\n\n  // Print variable values\n  cout << "int: " << _Num << "\\n";\n  cout << "float: " << _Float << "\\n";\n  cout << "double: " << _Double<< "\\n";\n  cout << "char: " << _Char << "\\n";\n  cout << "bool: " << _Bool << "\\n";\n  cout << "string: " << _String << "\\n";\n\n  return 0;\n}',
    output: 'int: 5\nfloat: 5.99\ndouble: 9.98\nchar: G\nbool: 1\nstring: Namaste',
    completed: false,
    order: 7
  },
  {
    id: 'operators',
    title: 'Operators',
    content: 'Operators are used in C++ to perform desired operations on particular values or variables.\n\nC++ operators are classified into the following categories:\n\n• Arithmetic operators\n• Assignment operators\n• Relational operators\n• Logical operators\n• Bitwise operators\n\nThe order of priority given to these operators are:\nAssignment > Arithmetic > Relational > Logical > Bitwise\n\n### Arithmetic Operators:\n\n| Operator | Name         | Description                  | Example |\n|----------|--------------|------------------------------|---------|\n| +        | Addition     | Adds two values              | x + y   |\n| -        | Subtraction  | Subtracts one value from another | x - y   |\n| *        | Multiplication| Multiplies two values        | x * y   |\n| /        | Division     | Divides one value from another | x / y   |\n| %        | Modulus      | Returns the division remainder | x % y   |\n| ++       | Increment    | Increases the value of a variable by 1 | ++x    |\n| --       | Decrement    | Decreases the value of a variable by 1 | --x    |\n\n### Assignment Operators\nThese are used to assign values to variables. Often the short hand properties are used to simplify the code.\n\n| Short Hand Operator | Example | Same As |\n|---------------------|---------|---------|\n| =                   | x = 5   | x = 5   |\n| +=                  | x += 3  | x = x + 3 |\n| -=                  | x -= 3  | x = x - 3 |\n| *=                  | x *= 3  | x = x * 3 |\n| /=                  | x /= 3  | x = x / 3 |\n| %=                  | x %= 3  | x = x % 3 |\n| ^=                  | x ^= 3  | x = x ^ 3 |\n| >>=                 | x >>= 3 | x = x >> 3 |\n| <<=                 | x <<= 3 | x = x << 3 |\n\n### Relational Operators\nThese are used to compare two values. These return values as either true (1) or false (0)\n\n| Operator | Name       | Description                          | Example          |\n|----------|------------|--------------------------------------|------------------|\n| ==       | Equal to   | Returns true if both values are equal | x == y           |\n| !=       | Not equal to | Returns true if values are not equal | x != y           |\n| >        | Greater than | Returns true if left value is greater | x > y            |\n| <        | Less than  | Returns true if left value is smaller | x < y            |\n| >=       | Greater than or equal to | Returns true if left value is greater or equal | x >= y |\n| <=       | Less than or equal to | Returns true if left value is smaller or equal | x <= y |\n\n### Logical Operators\nThese are used to combine multiple conditions.\n\n| Operator | Name       | Description                          | Example          |\n|----------|------------|--------------------------------------|------------------|\n| &&       | Logical AND | Returns true only if both statements are true | x < 5 && x < 10 |\n| ||       | Logical OR | Returns true if any one of the statements is true | x < 5 || x < 8 |\n| !        | Logical NOT | Inverts the given result. Output is true for false and false for true. | !(x < 5 && x < 10) |\n\n### Bitwise Operators\nSteps to performing Bitwise Operation:\n1. Convert the numbers into Binary\n2. Perform Operation\n3. Convert answer into Decimal\n\n| Operator | Name       | Description                          | Example          |\n|----------|------------|--------------------------------------|------------------|\n| &        | Bitwise AND | Performs AND in binary               | 5 & 7 = 5        |\n| |        | Bitwise OR  | Perform OR in binary                 | 5 | 7 = 7        |\n| ^        | Bitwise XOR | Performs XOR in binary               | 5 ^ 7 = 2        |\n| <<       | Left shift  | Shifts one bit to the left           | 6 << 1 = 12      |\n| >>       | Right shift | Shifts one bit to the right          | 6 >> 1 = 3       |\n\nNote: (shortcut for left and right shift)\nFor left shift multiply the number by 2, for right shift divide the number by 2.',
    completed: false,
    order: 8
  },
  {
    id: 'strings',
    title: 'Strings',
    content: 'Strings are a collection of characters joint together. They are defined within double quotes. In order to include strings in C++ it is necessary to declare an additional header file <string>.\n\n### Syntax:\n\nstring name_of_the_string = "text"\n\nNote: A string in C++ is actually an object, which contain functions that can perform certain operations on strings.\n\n### String Length\nThe length of a string is found using the length() function\n\n### Access Characters of a string\n\nWe know that a string is an array of characters. Hence a particular character of a string can be accessed by the index number inside the square brackets[ ]. These signify the position of the character.\n\n### Alter string characters\n\nIndex numbers inside square brackets can be used to change string character.\n\n### Input a string from a User\n\nNote: The cin function will only read a single word and not multiple words. Hence only the first word will be displayed.\n\n### String Concatenation\n\n'+' operator is used to add strings together.\n\nNote:\nResults of Concatenation\n\nNumber + Number = Number\nString + String = String\nNumber + String = Error',
    code: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() \n{\n  string str1 = "string";\n  cout << str1;\n  return 0;\n}',
    output: 'string',
    additionalCode: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() \n{\n  string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n  cout << "The length of the txt string is: " << txt.length();\n  return 0;\n}',
    additionalOutput: 'The length of the txt string is: 26',
    completed: false,
    order: 9
  },
  {
    id: 'mathandboolfns',
    title: 'Math and Booleans',
    content: 'Find Maximum and Minimum of two numbers\nThe max(x,y) and min(x,y) can be used to find the highest and lowest values, respectively of x and y.\n\nNote: In order to introduce other math functions we need to include <cmath> header file\n\n• sqrt(): Finds the square root of a number\n• round(): Rounds a number\n• log(): Finds the logarithm of the number.\n\nSome other important functions included are sin(), cos(), tan(), exp(), pow() and many more including most trigonometric functions.\n\n### Boolean Expressions:\n\nThese give values as either yes or no, on or off, true or false.\nBool datatype as mentioned earlier gives these values.',
    code: '#include <iostream>\nusing namespace std;\n\nint main() \n{\n  cout << max(2, 8);\n  return 0;\n}',
    output: '8',
    additionalCode: '#include <iostream>\nusing namespace std;\n\nint main() \n{\n  cout << min(3, 7);\n  return 0;\n}',
    additionalOutput: '3',
    additionalCode2: '#include <iostream>\n#include <cmath>\n\nusing namespace std;\n\nint main() {\n  cout << sqrt(16) << "\\n";\n  cout << round(4.2) << "\\n";\n  cout << log(2) << "\\n";\n  return 0;\n}',
    additionalOutput2: '4\n4\n0.69',
    additionalCode3: '#include <iostream>\n\nusing namespace std;\n\nint main() {\n  bool theSunIsHot = true;\n  bool everyoneLikesmonkeys = false;\n  cout << theSunIsHot << "\\n";\n  cout << everyoneLikesmonkeys;\n  return 0;\n}',
    additionalOutput3: '1\n0',
    completed: false,
    order: 10
  },
  {
    id: 'if..else',
    title: 'If...Else',
    content: 'The conditional statement keywords:\n\nUse if to execute the code block if the condition is true\nUse else to execute the code block, if the same condition is false\nUse else if to execute a new condition to test, if the previous condition is false\n\n### What can the different conditions be?\n\nLess than: a<b\nLess than or equal to: a<=b\nGreater than: a>b\nGreater than or equal to: a>=b\nEqual to: a==b\nNot Equal to: a!=b\n\n### The following is an if.. else example\n\n### The following is an else if..example\n\n### Ternary Operator:\nIf only one condition/statement is to be executed the conditional operator (ternary operator) can be used instead.\n\nSyntax\nvariable = (condition) ? expressionTrue : expressionFalse;\n\nLeft side of the semicolon will be executed if statement is true else if it is false right side will be executed.',
    code: '#include <iostream>\nusing namespace std;\n\nint main() \n{\n  int age = 18;\n  if (age > 18) {\n    cout << "Eligible to Vote";\n  } else {\n    cout << "Not Eligible";\n  }\n  return 0;\n}',
    output: 'Not Eligible',
    additionalCode: '#include <iostream>\nusing namespace std;\n\nint main() \n{\n  int age = 18;\n  if (age < 18) {\n    cout << "Too young.";\n  } else if (age > 81) {\n    cout << "Too old.";\n  } else {\n    cout << "Just right.";\n  }\n  return 0;\n}',
    additionalOutput: 'Just right.',
    additionalCode2: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  int age = 20;\n  string result = (age < 18) ? "Too young" : "Eligible to Vote";\n  cout << result;\n  return 0;\n}',
    additionalOutput2: 'Eligible to Vote',
    completed: false,
    order: 11
  },
  {
    id: 'loops',
    title: 'Loops',
    content: 'There are three kinds of loops; while, do while and for. These are used to repeat a particular code of block multiple times until the condition satisfies.\n\n### While loop\n\nSyntax:\nwhile (condition)\n{\n  //code block\n}\nThe following loop runs till 5 after i=6 the loop\'s condition becomes false and it no longer works.\n\n### The Do while Loop\n\nThis loop will execute the code block once before checking if the condition is true, then for the second time it will repeat the loop as long as the condition is true. Hence the condition is tested after execution.\n\nSyntax:\ndo\n{\n  //code block\n}\nwhile (condition);\n\n### For Loop\nThis is the most used loop.\n\nSyntax:\nfor (Variable value; Condition; increment/decrement operator)\n{\n  //code block\n}\n',
    code: '#include <iostream>\n\nusing namespace std;\n\nint main() \n{\n  int i = 0;\n  while (i < 6) {\n     cout << i << "\\n";\n     i++;\n  }\n\n  return 0;\n}',
    output: '0\n1\n2\n3\n4\n5',
    additionalCode: '#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n   int i = 0;\n   do {\n      cout << i << "\\n";\n      i++;\n   } while (i < 6);\n\n   return 0;\n}',
    additionalOutput: '0\n1\n2\n3\n4\n5',
    additionalCode2: '#include <iostream>\n\nusing namespace std;\n\nint main() {\n for (int i = 0; i <= 5; i++) {\n   cout << i << "\\n";\n }\n return 0;\n}',
    additionalOutput2: '0\n1\n2\n3\n4\n5',
    completed: false,
    order: 12
  },
  {
    id: 'switch',
    title: 'Switch',
    content: 'Switch statement is used to select one of many code blocks to be executed. This can be used as a substitute for if.. else statements and vice-versa.\n\n### Syntax\n\nswitch (variable) {\n  case 1:\n  //code block\n  break;\n\n  case 2:\n  //code block\n  break;\n\n  default:\n  //code block\n}\n\nWhat happens? The variable\'s value is compared with that of each case. Whichever case matches the value, that code block is executed.\n\n### Important Keywords\n- **break**: it breaks out of the switch block so that all the codes of other cases aren\'t executed.\n- **default**: This sets a standard code, which is executed if none of the other cases are executed.',
    code: '#include <iostream>\n\nusing namespace std;\n\nint main() \n{\n  int day = 5;\n  switch (day) \n {\n    case 1:\n    cout << "Monday";\n    break;\n\n    case 2:\n    cout << "Tuesday";\n    break;\n\n    case 3:\n    cout << "Wednesday";\n    break;\n\n    case 4:\n    cout << "Thursday";\n    break;\n\n    case 5:\n    cout << "Friday";\n    break;\n\n    case 6:\n    cout << "Saturday";\n    break;\n\n    case 7:\n    cout << "Sunday";\n    break;\n  }\n\n  return 0;\n}',
    output: 'Friday',
    completed: false,
    order: 13
  },
  {
    id: 'breakandcontinue',
    title: 'Break and Continue',
    content: '### Break\nWe already discussed about one of the use of this statement earlier. The break statement can also be used to jump out of a loop.\n\n### Continue\nThe continue statement breaks one time repetition of the loop if a specified condition occurs and continues with the next iteration in the loop.',
    code: '#include <iostream>\n\nusing namespace std;\n\nint main() \n{\n  for (int i = 0; i <= 10; i++) {\n    if (i == 6) {\n      break;\n    }\n    cout << i << "\\n";\n  }\n\n  return 0;\n}',
    output: '0\n1\n2\n3\n4\n5',
    additionalCode: '#include <iostream>\n\nusing namespace std;\n\nint main() \n{\n  for (int i = 0; i <= 10; i++) {\n    if (i == 6) {\n      continue;\n    }\n    cout << i << "\\n";\n  }\n\n  return 0;\n}',
    additionalOutput: '0\n1\n2\n3\n4\n5\n7\n8\n9\n10',
    completed: false,
    order: 14
  },
  {
    id: 'array',
    title: 'Array',
    content: 'Arrays follow contiguous memory allocation (a classical memory allocation model that assigns a process consecutive memory block). They are used to store multiple values in a single variable.\n\nValue in the square bracket specifies the number of elements in the array.\n\n### Way to Define an Array\n\nFor strings:\n\n```cpp\nstring fruits[3] = {"Banana", "Mango", "Apple"};\n```\n\nFor numbers:\n\n```cpp\nint Num[3] = {10, 56, 12};\n```\n\n### Access the Elements of an Array\n\nElements of an array are accessed by referring to the index numbers.\n\n### Change an Array Element\n\nThis is also done by referring to index numbers.\n\n### Loops and Arrays\n\nArray elements can be looped.\n\nNote: Array\'s size doesn\'t have to be defined inside the square bracket. But if it is not defined it will only be as big as the elements that are inserted into it.\n\nIn the following code 3 is the array\'s maximum size. However, if the size is specified the array will occupy that much space even if space is left empty.\n\nExample:\n\n```cpp\nstring fruits[] = {"Banana", "Mango", "Apple"};\n```',
    code: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() \n{\n  string fruits[3] = {"Banana", "Mango", "Apple"};\n  cout << fruits[0];\n  return 0;\n}',
    output: 'Banana',
    additionalCode: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() \n{\n  string fruits[3] = {"Banana", "Mango", "Apple"};\n  fruits[0] = "Orange";\n  cout << fruits[0];\n  return 0;\n}',
    additionalOutput: 'Orange',
    additionalCode2: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n  string fruits[3] = {"Banana", "Mango", "Apple"};\n  for(int i = 0; i < 3; i++) {\n    cout << fruits[i] << "\\n";\n  }\n  return 0;\n}',
    additionalOutput2: 'Banana\nMango\nApple',
    completed: false,
    order: 15
  },
  {
    id: 'pointers',
    title: 'Pointers and References',
    content: '### References\nThe & operator is used to create references. References are like alias of a variable. i.e you can refer same variable via the reference variable.\n\nExample:\n\n```cpp\nstring subject="Math";     //subject variable\nstring &study= subject;    //Reference to subject\n```\n\nNow either \'subject\' or \'study\' can be used to refer to the subject variable. Hence value of it which is maths can be got by any of these two methods.\n\n### Memory Address\nWhen a variable is created in C++, it occupies some memory and hence it is allocated a particular location, where it is stored. & is used to get the memory address of a variable; which is the location of where the variable is stored.\n\n### Creating Pointers\nA pointer is a variable that stores the memory address as its value.\n\nThe pointer is created using *. It points to an address of the same datatype variable. The address is then assigned to the pointer.\n\nNote:\n* Does two different things in the code:\nWhen used in declaration (string* p), it creates a pointer variable and points to an address.\nWhen not used in declaration, it acts as an operator which gives the value at a given address.',
    code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main()\n{\n string subject= "Math";\n string &study = subject;\n\n cout << subject << "\\n";\n cout << study << "\\n";\n return 0;\n}',
    output: 'Math\nMath',
    additionalCode: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  string food = "Panipuri";\n  cout << &food;\n  return 0;\n}',
    additionalOutput: '0x7ffee4b3c8b0', // Example memory address
    additionalCode2: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  string food = "Panipuri"; // A string variable\n  string *p = &food; // A pointer variable that stores the address of food\n\n  // Output the value of food\n  cout << food << "\\n";\n\n  // Output the memory address of food\n  cout << &food << "\\n";\n\n  // Output the memory address of food with the pointer\n  cout << p << "\\n";\n\n  return 0;\n}',
    additionalOutput2: 'Panipuri\n0x7ffee4b3c8b0\n0x7ffee4b3c8b0', // Example memory address
    completed: false,
    order: 16
  },
  {
    id: 'functions',
    title: 'Functions',
    content: 'The purpose of creating a function is so that a block of code can be executed multiple times when a function is called.\n\nData known as parameters is passed into the function.\n\nThe function main() is predefined and is mandatory in program. However there are other functions which are user defined.\n\n### How to create a function?\n\nSyntax:\n\n```cpp\nvoid nameFunction()\n{\n  //code block\n}\n```\n\nNote: Void means the function doesn\'t have a return value.\n\n### Function Calling\n\nTo call a function we are to write the function\'s name followed by brackets () and a semicolon;\n\nNote: The function can be called multiple times and that\'s what makes it useful.\n\nNote: If a user-defined function as in the above example is declared after the main() function the code will throw an error. It is because C++ works from top to bottom in a sequential flow.\n\nHence another way of writing the function, if the function is written below main() is :',
    code: '#include <iostream>\n\nusing namespace std;\n\nvoid myFunction()\n{\n  cout << "We are learning functions";\n}\n\nint main() \n{\n  myFunction();\n  return 0;\n}',
    output: 'We are learning functions',
    additionalCode: '#include <iostream>\n\nusing namespace std;\n\nvoid myFunction()\n{\n  cout << "We are learning functions";\n}\n\nint main() \n{\n  myFunction();\n  myFunction();\n  myFunction();\n\n  return 0;\n}',
    additionalOutput: 'We are learning functions\nWe are learning functions\nWe are learning functions',
    additionalCode2: '#include <iostream>\n\nusing namespace std;\n\n// Declaration of the Function\nvoid nameFunction();\n\n// Main before the function\nint main() {\n  nameFunction(); // call the function\n  return 0;\n}\n\n// Function \nvoid nameFunction() {\n  cout << "We are learning functions";\n}',
    additionalOutput2: 'We are learning functions',
    completed: false,
    order: 17
  },
  {
    id: 'functionparameters',
    title: 'Function Parameters',
    content: 'Data can be passed to a function as a parameter. These are variables inside of functions. These are specified within the brackets with their datatypes.\n\n### Syntax:\n\n```cpp\nvoid function(datatype variable, datatype variable)\n{\n  //code block\n}\n```\n\nIn the following example Honey is an argument, however name is a parameter.\n\n### Return Values\n\nIn the following example the keyword return is used. Using int instead of void helps us to derive a return value. However as discussed earlier void doesn\'t return a value.\n\n### Call by Reference\n\nYou can also pass a reference to the function by using pointers as shown in the following example:',
    code: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nvoid function(string name)\n{\n  cout << name << " surname\\n";\n}\n\nint main() \n{\n  function("Honey");\n  function("Sam");\n  function("Anja");\n  return 0;\n}',
    output: 'Honey surname\nSam surname\nAnja surname',
    additionalCode: '#include <iostream>\n\nusing namespace std;\n\nint myFunction(int x, int y) \n{\n  return x + y;\n}\n\nint main() \n{\n  int z = myFunction(2, 3);\n  cout << z;\n  return 0;\n}',
    additionalOutput: '5',
    additionalCode2: '#include <iostream>\n\nusing namespace std;\n\nvoid swapNums(int &x, int &y) {\n  int z = x;\n  x = y;\n  y = z;\n}\n\nint main() {\n  int firstNum = 10;\n  int secondNum = 20;\n\n  cout << "Before swap: " << "\\n";\n  cout << firstNum << " " << secondNum << "\\n";\n\n  swapNums(firstNum, secondNum);\n\n  cout << "After swap: " << "\\n";\n  cout << firstNum << " " << secondNum << "\\n";\n\n  return 0;\n}',
    additionalOutput2: 'Before swap: \n10 20\nAfter swap: \n20 10',
    completed: false,
    order: 18
  },
  {
    id: 'functionoverloading',
    title: 'Function Overloading',
    content: 'This property is special to C++. Using Function overloading multiple functions can have the same name with different parameters.\n\nNote: It is better to overload one function instead of defining two functions to do the same thing. Remember multiple functions can have the same name until their datatype or parameters differ.',
    code: '#include <iostream>\n\nusing namespace std;\n\nint addFunc(int a, int b) {\n  return a + b;\n}\n\ndouble addFunc(double a, double b) {\n  return a + b;\n}\n\nint main() \n{\n  int num1 = addFunc(3, 5);\n  double num2 = addFunc(2.1, 6.2);\n  cout << "Int: " << num1 << "\\n";\n  cout << "Double: " << num2;\n  return 0;\n}',
    output: 'Int: 8\nDouble: 8.3',
    completed: false,
    order: 19
  },
  {
    id: 'files',
    title: 'C++ Files',
    content: 'Using fstream library we can work with files. That library function can be included by using `<fstream>`\n\nThere are 3 objects included in this library.\n\n- **ofstream**: Creates and writes in files\n- **ifstream**: Reads from file\n- **fstream**: Capable of creating, reading and writing in files.\n\n### Create and write in file\nCan be done using ofstream or fstream.\n\n### To read a file\nTo read from a file, use either the ifstream or fstream object.',
    code: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main ()\n{\n  //create and open a text file\n  ofstream MyFile ("filename.txt");\n\n  //Write to the file\n  MyFile << "Hello File";\n  \n  //close the file\n  MyFile.close();\n\n  return 0;\n}',
    additionalCode: '#include <iostream>\n#include <fstream>\n\nusing namespace std;\n\nint main ()\n{\n// Create a text file\n  ofstream MyFileWrite ("filename.txt");\n\n// Write to the file\n  MyFileWrite << "Hello File!";\n\n// Close the file\n  MyFileWrite.close ();\n\n// Create a text string, which is used to output the text file\n  string RandomText;\n\n// Read from the text file\n  ifstream MyFileRead ("filename.txt");\n\n// Use a while loop together with the getline() function to read the file line by line\n  while (getline (MyFileRead, RandomText))\n    {\n// Output the text from the file\n      cout << RandomText;\n    }\n\n// Close the file\n  MyFileRead.close ();\n\n  return 0;\n}',
    completed: false,
    order: 20
  },
  {
    id: 'classandobject',
    title: 'Classes and Objects',
    content: 'What is object oriented programming?\n\nThis consists of creating objects that contain data and functions. This is different from procedural programming that performs operations on data sequentially. Classes and objects are two main aspects of object oriented programming.\n\n### Example:\n\nClass: Fruits\nObjects: Apple, Mango, Cherry\n\nAnother aspect of this programming is attributes (e.g. Color and size) and methods (e.g. Break and speed) of various objects.\n\n### Create a Class\n\nTo create a class we use the keyword class.\n\nIn the following example the class keyword is used to create a class. Public is the access specifier (In detail later in this module). The variables declared within the class Num and Name_string are attributes. At last use of a semicolon is mandatory.\n\n### Create an Object\n\nAn object is created from a class\n\nThe syntax includes creating an object of Name_class specify the class name, followed by the object name.\n\nWe can access the class attributes using (.) on the object.',
    code: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nclass Name_Class //The class\n{\n  public: //Acess specifier\n  int Num; //Attribute\n  string Name_string; //Attribute\n};\n\nint main() \n{\n  Name_Class my_Obj; // Create an object of Name_Class\n  // Access attributes and set values\n  my_Obj.Num = 16;\n  my_Obj.Name_string = "Demo Code";\n\n  // Print values\n  cout << my_Obj.Num << "\\n"; \n  cout << my_Obj.Name_string; \n\n  return 0;\n}',
    output: '16\nDemo Code',
    completed: false,
    order: 21
  },
  {
    id: 'classmethods',
    title: 'Class Methods',
    content: 'Methods are functions that belong to the class. Functions can be defined inside of class or outside it. You can access methods exactly the same way you access classes by using (.)\n\n### Inside Class Definition\n\n### Outside Class Definition\n\nNote: As in functions parameters can be here as well',
    code: '#include <iostream>\n\nusing namespace std;\n\nclass My_Class\n{ // The class\n  public: // Access specifier\n  void My_Method() { // Method(function)\n    cout << "Namaste!";\n  }\n};\n\nint main()\n{\n  My_Class myObj; // Create an object of MyClass\n  myObj.My_Method(); // Call the method\n\n  return 0;\n}',
    output: 'Namaste!',
    additionalCode: '#include <iostream>\n\nusing namespace std;\n\nclass My_Class // The class\n{\npublic: // Access specifier\n  void my_Method (); // Method/function declaration\n};\n\n// Method/function definition outside the class\nvoid My_Class::my_Method ()\n{\n  cout << "Namaste!";\n}\n\nint main ()\n{\n  My_Class myObj; // Create an object of MyClass\n  myObj.my_Method (); // Call the method\n  return 0;\n}',
    additionalOutput: 'Namaste!',
    completed: false,
    order: 22
  },
  {
    id: 'accessspecifiers',
    title: 'Access Specifiers',
    content: 'The public keyword that occurs in all our class examples is our access specifier. Access specifiers define the accessibility of classes, methods, and other members.\n\nThere are three kinds of access specifiers in C++:\n\n1) Public: members can be accessed (or viewed) from outside the class\n2) Private: members cannot be accessed (or viewed) from outside the class\n3) Protected: members cannot be accessed from outside the class, however, they can be accessed in inherited classes. (We can define inherited classes as those which inherit attributes and methods from one class to another.)\n\nWe have already looked at examples of public. We will look at the private access specifier with an example:',
    code: '#include <iostream>\n\nusing namespace std;\n\nclass My_Class {\n  public: // Public access specifier\n    int a; // Public attribute\n  private: // Private access specifier\n    int b; // Private attribute\n};\n\nint main() {\n  My_Class my_Obj;\n\n  my_Obj.a = 16; // Able to view it (a is public)\n  my_Obj.b = 2002; // Not allowed to view it (b is private)\n\n  return 0;\n}',
    additionalCode: 'Error\nmain.cpp: In function ‘int main()’:\nmain.cpp:19:10: error: ‘int My_Class::b’ is private within this context\nmy_Obj.b = 2002; // Not allowed to view it (b is private)\n       ^\nmain.cpp:10:9: note: declared private here\nint b; // Private attribute\n    ^',
    completed: false,
    order: 23
  },
  {
    id: 'classconstructor',
    title: 'Class Constructors',
    content: 'This is a special method. Called once an object of a class is created. In order to create a constructor use the same name as the class, followed by brackets ().\n\n### Example:\n\nNote: Just like regular functions constructors can also take parameters which can be used for initialising values for attributes.\n\nNote: Constructors can be defined outside the class however it has a different syntax.\n\nSteps:\nDeclare the constructor inside the class\nDefine it outside of the class by mentioning the name of the class\nUse :: operator, followed by the name of the class\n\n### Example:',
    code: '#include <iostream>\n\nusing namespace std;\n\nclass My_Class // The class\n{\n  public: // Access specifier\n    My_Class() // Constructor\n    {\n      cout << "Demo Code";\n    }\n};\n\nint main()\n{\n  My_Class myObj; // this will automatically call the constructor\n  return 0;\n}',
    additionalCode: '#include <iostream>\n\nusing namespace std;\n\nclass Phone\n{ // The class\n  public: // Access specifier\n    string brand; // Attribute\n    string model; // Attribute\n    int year; // Attribute\n    Phone(string a, string b, int c); // Constructor declaration\n};\n\n// Constructor definition outside the class\nPhone::Phone(string a, string b, int c)\n{\n  brand = a;\n  model = b;\n  year = c;\n}\n\nint main() {\n  // Create Phone objects and call the constructor with different values\n  Phone PhoneObj1("Nokia", "008", 1899);\n  Phone PhoneObj2("Samsung", "Galaxy", 1969);\n\n  // Print values\n  cout << PhoneObj1.brand << " " << PhoneObj1.model << " " << PhoneObj1.year << "\\n";\n  cout << PhoneObj2.brand << " " << PhoneObj2.model << " " << PhoneObj2.year << "\\n";\n\n  return 0;\n}',
    completed: false,
    order: 24
  },
  {
    id: 'classdestructor',
    title: 'Class Destructor',
    content: 'Class Destructor as its name suggests is a function which deletes an object.\n\nA destructor function is called when:\n1. Function ends\n2. Program ends\n3. Block consisting of local variables ends\n4. Delete operator is called\n\nDestructors have the same name as the class only with a tilde (~).\nDestructors do not allow parameters and only one destructor in a class.\n\n### Example:',
    code: '#include <iostream>\n#include <string.h>\n\nclass string\n{\n  private:\n   char *s;\n   int size;\n  public:\n   string(char *); //constructor\n   ~string(); //destructor\n};\n\nstring::string(char *c)\n{\n  size = strlen(c);\n  s = new char[size+1];\n  strcpy(s,c);\n  std::cout<<"constructor called\\n";\n}\n\nstring::~string( )\n{\n  std::cout<<"destructor called";\n  delete []s;\n}\n\nint main()\n{\n    string str("name");\n}',
    additionalCode: 'Output:\nconstructor called\ndestructor called',
    completed: false,
    order: 25
  },
  {
    id: 'singleinheritence',
    title: 'Class Inheritance',
    content: 'As mentioned earlier, inheritance is handy in understanding the role of the \'protected\' access specifier. It is possible to inherit attributes and methods from one class to another.\n\nThere are two important terms for its description:\n\nDerived class: Inherited from another class\nBase class: Class being inherited from\n\nThis can be understood better from the parent-child analogy. Parents are the ones passing on their characteristics to us and we inherit them. Hence Derived class is the child and Base class the parent.\n\nWe use the colon (:) symbol to inherit from a class\n\n### Example:',
    code: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\n// Base class\nclass Food\n{\npublic:\n  string brand = "Dominos";\n  void ready ()\n  {\n    cout << "Pizza is ready! \\n";\n  }\n};\n\n// Derived class\nclass Junk_food:public Food\n{\npublic:\n  string place = "4D square";\n};\n\nint main ()\n{\n  Junk_food my_food;\n  my_food.ready ();\n  cout << my_food.brand + " " + my_food.place;\n  return 0;\n}',
    additionalCode: 'Output:\nPizza is ready!\nDominos 4D square',
    completed: false,
    order: 26
  },
  {
    id: 'multilevelinheritence',
    title: 'Multi-level Inheritance',
    content: 'A class can also be derived from a class, which is already derived from another class.\n\n### Example:',
    code: '#include <iostream>\n\nusing namespace std;\n\n// Base class\nclass My_mom\n{\npublic:\n  void my_Function ()\n  {\n    cout << "Mother";\n  }\n};\n\n// Derived class\nclass Me:public My_mom\n{\n};\n\n// My child\nclass MyChild:public Me\n{\n};\n\nint main ()\n{\n  MyChild myObj;\n  myObj.my_Function ();\n\n  return 0;\n}',
    additionalCode: 'Output:\nMother',
    completed: false,
    order: 27
  },
  {
    id: 'multipleinheritence',
    title: 'Multiple Inheritance',
    content: 'Class derived from multiple base classes, using a comma-separated list.\n\n### Example:',
    code: '#include <iostream>\nusing namespace std;\n\n// Base class\nclass MyClass\n{\npublic:\n  void myFunction ()\n  {\n    cout << "Base Class 1\\n";\n  }\n};\n\n// Another base class\nclass MyOtherClass\n{\npublic:\n  void myOtherFunction ()\n  {\n    cout << "Base Class 2\\n";\n  }\n};\n\n// Derived class\nclass MyChildClass:public MyClass, public MyOtherClass\n{\n};\n\nint main ()\n{\n  MyChildClass myObj;\n  myObj.myFunction ();\n  myObj.myOtherFunction ();\n\n  return 0;\n}',
    additionalCode: 'Output:\nBase Class 1\nBase Class 2',
    completed: false,
    order: 28
  },
];