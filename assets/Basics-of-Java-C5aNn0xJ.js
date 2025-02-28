const n=`# Java Basics Guide\r
\r
## Compiling and Running Java Code\r
\r
\`\`\`shell\r
javac MyProgram.java   # Compile Java file\r
java MyProgram         # Run compiled Java class\r
\`\`\`\r
\r
## Java Keywords\r
Java has reserved keywords that cannot be used as identifiers:\r
- **Data Types**: \`int\`, \`double\`, \`char\`, \`boolean\`\r
- **Control Flow**: \`if\`, \`else\`, \`switch\`, \`case\`, \`while\`, \`for\`, \`do\`, \`break\`, \`continue\`\r
- **Modifiers**: \`public\`, \`private\`, \`protected\`, \`static\`, \`final\`, \`abstract\`\r
- **Classes & Objects**: \`class\`, \`extends\`, \`implements\`, \`new\`, \`this\`, \`super\`\r
- **Exception Handling**: \`try\`, \`catch\`, \`finally\`, \`throw\`, \`throws\`\r
- **Other**: \`import\`, \`package\`, \`return\`, \`void\`, \`instanceof\`\r
\r
## Basic Structure of a Java Program\r
\`\`\`java\r
// Define package (optional)\r
package mypackage;\r
\r
// Import statements (optional)\r
import java.util.*;\r
\r
// Class definition\r
public class MyClass {\r
    // Fields (variables)\r
    int number;\r
    String text;\r
\r
    // Constructor\r
    public MyClass(int num, String txt) {\r
        this.number = num;\r
        this.text = txt;\r
    }\r
\r
    // Method\r
    public void display() {\r
        System.out.println("Number: " + number + ", Text: " + text);\r
    }\r
\r
    // Main method (entry point)\r
    public static void main(String[] args) {\r
        MyClass obj = new MyClass(42, "Hello");\r
        obj.display();\r
    }\r
}\r
\`\`\`\r
\r
## Data Types in Java\r
Java has primitive and reference types:\r
- **Primitive Types**: \`byte\`, \`short\`, \`int\`, \`long\`, \`float\`, \`double\`, \`char\`, \`boolean\`\r
- **Reference Types**: Objects, Arrays, Interfaces\r
\r
Example:\r
\`\`\`java\r
int age = 25;\r
double pi = 3.14;\r
boolean isJavaFun = true;\r
char letter = 'A';\r
\`\`\`\r
\r
## Control Flow Statements\r
### If-Else\r
\`\`\`java\r
if (age > 18) {\r
    System.out.println("Adult");\r
} else {\r
    System.out.println("Minor");\r
}\r
\`\`\`\r
### Switch\r
\`\`\`java\r
switch (day) {\r
    case 1: System.out.println("Monday"); break;\r
    case 2: System.out.println("Tuesday"); break;\r
    default: System.out.println("Other Day");\r
}\r
\`\`\`\r
### Loops\r
\`\`\`java\r
for (int i = 0; i < 5; i++) {\r
    System.out.println("Iteration: " + i);\r
}\r
\r
int[] nums = {1, 2, 3, 4, 5};\r
for (int i : nums) {\r
    System.out.println(i);\r
}\r
\r
while (condition) {\r
    // Loop body\r
}\r
\r
do {\r
    // Loop body\r
} while (condition);\r
\`\`\`\r
\r
## Object-Oriented Programming (OOP) in Java\r
### Classes & Objects\r
A **class** defines attributes and behaviors. An **object** is an instance of a class.\r
\`\`\`java\r
class Car {\r
    String model;\r
    int year;\r
\r
    Car(String model, int year) {\r
        this.model = model;\r
        this.year = year;\r
    }\r
}\r
\r
Car myCar = new Car("Toyota", 2022);\r
\`\`\`\r
\r
### Inheritance\r
\`\`\`java\r
class Animal {\r
    void makeSound() {\r
        System.out.println("Animal makes a sound");\r
    }\r
}\r
\r
class Dog extends Animal {\r
    void makeSound() {\r
        System.out.println("Bark");\r
    }\r
}\r
\`\`\`\r
\r
### Interfaces\r
\`\`\`java\r
interface Vehicle {\r
    void start();\r
}\r
\r
class Bike implements Vehicle {\r
    public void start() {\r
        System.out.println("Bike is starting");\r
    }\r
}\r
\`\`\`\r
\r
## Exception Handling\r
\`\`\`java\r
try {\r
    int result = 10 / 0;\r
} catch (ArithmeticException e) {\r
    System.out.println("Cannot divide by zero");\r
} finally {\r
    System.out.println("Execution completed");\r
}\r
\`\`\`\r
\r
## Java Collections Framework (JCF)\r
### List (ArrayList Example)\r
\`\`\`java\r
import java.util.ArrayList;\r
ArrayList<String> names = new ArrayList<>();\r
names.add("Alice");\r
names.add("Bob");\r
System.out.println(names.get(0));\r
\`\`\`\r
### HashMap (Key-Value Pairs)\r
\`\`\`java\r
import java.util.HashMap;\r
HashMap<String, Integer> ages = new HashMap<>();\r
ages.put("Alice", 25);\r
ages.put("Bob", 30);\r
System.out.println(ages.get("Alice"));\r
\`\`\`\r
`;export{n as default};
