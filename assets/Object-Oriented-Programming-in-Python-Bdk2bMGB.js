const n=`# Object-Oriented Programming in Python\r
\r
## 1. Basics of OOP\r
\r
Object-Oriented Programming (OOP) is a paradigm based on objects, which contain data (**attributes**) and behavior (**methods**).\r
\r
### Defining a Class\r
\r
\`\`\`python\r
class Person:\r
    def __init__(self, name, age):\r
        self.name = name  # Instance attribute\r
        self.age = age\r
\r
    def greet(self):\r
        return f"Hello, my name is {self.name} and I am {self.age} years old."\r
\`\`\`\r
\r
### Creating an Object\r
\r
\`\`\`python\r
p = Person("Alice", 25)\r
print(p.greet())  # Hello, my name is Alice and I am 25 years old.\r
\`\`\`\r
\r
## 2. Class vs Instance Attributes\r
\r
\`\`\`python\r
class Example:\r
    class_attr = "I am a class attribute"  # Shared across all instances\r
    \r
    def __init__(self, value):\r
        self.instance_attr = value  # Unique to each instance\r
\`\`\`\r
\r
## 3. Encapsulation (Private and Protected Attributes)\r
\r
\`\`\`python\r
class BankAccount:\r
    def __init__(self, balance):\r
        self.__balance = balance  # Private attribute (name mangled)\r
    \r
    def deposit(self, amount):\r
        self.__balance += amount\r
    \r
    def get_balance(self):\r
        return self.__balance\r
\`\`\`\r
\r
### Accessing Private Attributes\r
\r
\`\`\`python\r
account = BankAccount(1000)\r
print(account.get_balance())  # 1000\r
# print(account.__balance)  # Raises AttributeError\r
\`\`\`\r
\r
## 4. Inheritance\r
\r
\`\`\`python\r
class Employee(Person):  # Inheriting from Person\r
    def __init__(self, name, age, job_title):\r
        super().__init__(name, age)\r
        self.job_title = job_title\r
    \r
    def work(self):\r
        return f"{self.name} is working as a {self.job_title}."\r
\`\`\`\r
\r
### Using Inheritance\r
\r
\`\`\`python\r
e = Employee("Bob", 30, "Engineer")\r
print(e.greet())  # Inherited method\r
print(e.work())   # Engineer-specific method\r
\`\`\`\r
\r
## 5. Polymorphism (Method Overriding)\r
\r
\`\`\`python\r
class Animal:\r
    def speak(self):\r
        return "Animal sound"\r
\r
class Dog(Animal):\r
    def speak(self):\r
        return "Bark!"\r
\r
class Cat(Animal):\r
    def speak(self):\r
        return "Meow!"\r
\`\`\`\r
\r
### Using Polymorphism\r
\r
\`\`\`python\r
animals = [Dog(), Cat()]\r
for animal in animals:\r
    print(animal.speak())\r
\`\`\`\r
\r
## 6. Abstract Classes (For Enforcing Method Implementation)\r
\r
\`\`\`python\r
from abc import ABC, abstractmethod\r
\r
class Shape(ABC):\r
    @abstractmethod\r
    def area(self):\r
        pass\r
\r
class Square(Shape):\r
    def __init__(self, side):\r
        self.side = side\r
    \r
    def area(self):\r
        return self.side ** 2\r
\`\`\`\r
\r
## 7. Special Methods (\`__str__\`, \`__repr__\`, \`__len__\`, etc.)\r
\r
\`\`\`python\r
class Book:\r
    def __init__(self, title, pages):\r
        self.title = title\r
        self.pages = pages\r
\r
    def __str__(self):\r
        return f"Book: {self.title}"\r
    \r
    def __len__(self):\r
        return self.pages\r
\`\`\`\r
\r
### Using Special Methods\r
\r
\`\`\`python\r
b = Book("Python Guide", 300)\r
print(str(b))  # Book: Python Guide\r
print(len(b))  # 300\r
\`\`\`\r
\r
## 8. Static and Class Methods\r
\r
\`\`\`python\r
class Math:\r
    @staticmethod\r
    def add(x, y):\r
        return x + y\r
    \r
    @classmethod\r
    def description(cls):\r
        return "This is a Math class."\r
\`\`\`\r
\r
### Using Static & Class Methods\r
\r
\`\`\`python\r
print(Math.add(3, 5))  # 8\r
print(Math.description())  # This is a Math class.\r
\`\`\`\r
\r
## 9. Property Decorator (Getters & Setters)\r
\r
\`\`\`python\r
class Temperature:\r
    def __init__(self, celsius):\r
        self._celsius = celsius\r
    \r
    @property\r
    def fahrenheit(self):\r
        return (self._celsius * 9/5) + 32\r
    \r
    @fahrenheit.setter\r
    def fahrenheit(self, value):\r
        self._celsius = (value - 32) * 5/9\r
\`\`\`\r
\r
### Using Properties\r
\r
\`\`\`python\r
temp = Temperature(25)\r
print(temp.fahrenheit)  # 77.0\r
temp.fahrenheit = 86\r
print(temp._celsius)  # 30\r
\`\`\`\r
\r
## 10. Multiple Inheritance\r
\r
\`\`\`python\r
class A:\r
    def method_a(self):\r
        return "A"\r
\r
class B:\r
    def method_b(self):\r
        return "B"\r
\r
class C(A, B):\r
    pass\r
\`\`\`\r
\r
### Using Multiple Inheritance\r
\r
\`\`\`python\r
c = C()\r
print(c.method_a())  # A\r
print(c.method_b())  # B\r
\`\`\`\r
`;export{n as default};
