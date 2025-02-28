# Java Basics Guide

## Compiling and Running Java Code

```shell
javac MyProgram.java   # Compile Java file
java MyProgram         # Run compiled Java class
```

## Java Keywords
Java has reserved keywords that cannot be used as identifiers:
- **Data Types**: `int`, `double`, `char`, `boolean`
- **Control Flow**: `if`, `else`, `switch`, `case`, `while`, `for`, `do`, `break`, `continue`
- **Modifiers**: `public`, `private`, `protected`, `static`, `final`, `abstract`
- **Classes & Objects**: `class`, `extends`, `implements`, `new`, `this`, `super`
- **Exception Handling**: `try`, `catch`, `finally`, `throw`, `throws`
- **Other**: `import`, `package`, `return`, `void`, `instanceof`

## Basic Structure of a Java Program
```java
// Define package (optional)
package mypackage;

// Import statements (optional)
import java.util.*;

// Class definition
public class MyClass {
    // Fields (variables)
    int number;
    String text;

    // Constructor
    public MyClass(int num, String txt) {
        this.number = num;
        this.text = txt;
    }

    // Method
    public void display() {
        System.out.println("Number: " + number + ", Text: " + text);
    }

    // Main method (entry point)
    public static void main(String[] args) {
        MyClass obj = new MyClass(42, "Hello");
        obj.display();
    }
}
```

## Data Types in Java
Java has primitive and reference types:
- **Primitive Types**: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`
- **Reference Types**: Objects, Arrays, Interfaces

Example:
```java
int age = 25;
double pi = 3.14;
boolean isJavaFun = true;
char letter = 'A';
```

## Control Flow Statements
### If-Else
```java
if (age > 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}
```
### Switch
```java
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Other Day");
}
```
### Loops
```java
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}

int[] nums = {1, 2, 3, 4, 5};
for (int i : nums) {
    System.out.println(i);
}

while (condition) {
    // Loop body
}

do {
    // Loop body
} while (condition);
```

## Object-Oriented Programming (OOP) in Java
### Classes & Objects
A **class** defines attributes and behaviors. An **object** is an instance of a class.
```java
class Car {
    String model;
    int year;

    Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}

Car myCar = new Car("Toyota", 2022);
```

### Inheritance
```java
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}
```

### Interfaces
```java
interface Vehicle {
    void start();
}

class Bike implements Vehicle {
    public void start() {
        System.out.println("Bike is starting");
    }
}
```

## Exception Handling
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Execution completed");
}
```

## Java Collections Framework (JCF)
### List (ArrayList Example)
```java
import java.util.ArrayList;
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
System.out.println(names.get(0));
```
### HashMap (Key-Value Pairs)
```java
import java.util.HashMap;
HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
System.out.println(ages.get("Alice"));
```
