# Object-Oriented Programming in Python

## 1. Basics of OOP

Object-Oriented Programming (OOP) is a paradigm based on objects, which contain data (**attributes**) and behavior (**methods**).

### Defining a Class

```python
class Person:
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

### Creating an Object

```python
p = Person("Alice", 25)
print(p.greet())  # Hello, my name is Alice and I am 25 years old.
```

## 2. Class vs Instance Attributes

```python
class Example:
    class_attr = "I am a class attribute"  # Shared across all instances
    
    def __init__(self, value):
        self.instance_attr = value  # Unique to each instance
```

## 3. Encapsulation (Private and Protected Attributes)

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute (name mangled)
    
    def deposit(self, amount):
        self.__balance += amount
    
    def get_balance(self):
        return self.__balance
```

### Accessing Private Attributes

```python
account = BankAccount(1000)
print(account.get_balance())  # 1000
# print(account.__balance)  # Raises AttributeError
```

## 4. Inheritance

```python
class Employee(Person):  # Inheriting from Person
    def __init__(self, name, age, job_title):
        super().__init__(name, age)
        self.job_title = job_title
    
    def work(self):
        return f"{self.name} is working as a {self.job_title}."
```

### Using Inheritance

```python
e = Employee("Bob", 30, "Engineer")
print(e.greet())  # Inherited method
print(e.work())   # Engineer-specific method
```

## 5. Polymorphism (Method Overriding)

```python
class Animal:
    def speak(self):
        return "Animal sound"

class Dog(Animal):
    def speak(self):
        return "Bark!"

class Cat(Animal):
    def speak(self):
        return "Meow!"
```

### Using Polymorphism

```python
animals = [Dog(), Cat()]
for animal in animals:
    print(animal.speak())
```

## 6. Abstract Classes (For Enforcing Method Implementation)

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side
    
    def area(self):
        return self.side ** 2
```

## 7. Special Methods (`__str__`, `__repr__`, `__len__`, etc.)

```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"Book: {self.title}"
    
    def __len__(self):
        return self.pages
```

### Using Special Methods

```python
b = Book("Python Guide", 300)
print(str(b))  # Book: Python Guide
print(len(b))  # 300
```

## 8. Static and Class Methods

```python
class Math:
    @staticmethod
    def add(x, y):
        return x + y
    
    @classmethod
    def description(cls):
        return "This is a Math class."
```

### Using Static & Class Methods

```python
print(Math.add(3, 5))  # 8
print(Math.description())  # This is a Math class.
```

## 9. Property Decorator (Getters & Setters)

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        self._celsius = (value - 32) * 5/9
```

### Using Properties

```python
temp = Temperature(25)
print(temp.fahrenheit)  # 77.0
temp.fahrenheit = 86
print(temp._celsius)  # 30
```

## 10. Multiple Inheritance

```python
class A:
    def method_a(self):
        return "A"

class B:
    def method_b(self):
        return "B"

class C(A, B):
    pass
```

### Using Multiple Inheritance

```python
c = C()
print(c.method_a())  # A
print(c.method_b())  # B
```
