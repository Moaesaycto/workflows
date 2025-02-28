# Conversions Between Different Data Types in Java

In Java, you can convert between different data types using **casting**, **wrapper classes**, and **built-in methods**. Here’s a breakdown:

---

## **1. Primitive Type Conversions**
### **Implicit (Widening) Conversion** *(Smaller to Larger)*
Happens automatically when there’s no risk of losing data.
```java
int num = 10;
double d = num;  // Implicit conversion (int → double)
System.out.println(d);  // 10.0
```

### **Explicit (Narrowing) Conversion** *(Larger to Smaller)*
Requires manual casting to avoid data loss.
```java
double d = 10.5;
int num = (int) d;  // Explicit cast (double → int)
System.out.println(num);  // 10
```

---

## **2. Converting Between Primitives and Wrapper Classes**
Java provides **Wrapper Classes** (`Integer`, `Double`, etc.) for primitive types.

### **Primitive to Wrapper (Autoboxing)**
```java
int num = 10;
Integer obj = num;  // Autoboxing (int → Integer)
```

### **Wrapper to Primitive (Unboxing)**
```java
Integer obj = 20;
int num = obj;  // Unboxing (Integer → int)
```

### **Using Wrapper Methods**
```java
String str = "123";
int num = Integer.parseInt(str);  // Converts String → int
double d = Double.parseDouble("3.14");  // String → double
```

---

## **3. Converting Primitives/Wrappers to Strings**
### **Using `String.valueOf()`**
```java
int num = 100;
String str = String.valueOf(num);  // int → String
System.out.println(str);  // "100"
```

### **Using `toString()`**
```java
Integer obj = 50;
String str = obj.toString();  // Integer → String
System.out.println(str);  // "50"
```

---

## **4. Converting Strings to Primitives**
```java
String str = "456";
int num = Integer.parseInt(str);  // String → int
double d = Double.parseDouble("3.1416");  // String → double
boolean bool = Boolean.parseBoolean("true");  // String → boolean
```

---

## **5. Converting Between Objects (Casting)**
### **Upcasting (Child → Parent)**
Happens automatically when assigning a subclass object to a superclass variable.
```java
class Animal {}
class Dog extends Animal {}

Animal a = new Dog();  // Upcasting
```

### **Downcasting (Parent → Child)**
Needs explicit casting to work.
```java
Animal a = new Dog();
Dog d = (Dog) a;  // Downcasting
```

---

## **6. Converting Between Lists & Arrays**
### **Array → List**
```java
String[] arr = {"A", "B", "C"};
List<String> list = new ArrayList<>(Arrays.asList(arr));
```

### **List → Array**
```java
List<String> list = Arrays.asList("X", "Y", "Z");
String[] arr = list.toArray(new String[0]);
```

---

## **7. Converting Between Numeric Types**
### **Using `Math.round()`, `Math.floor()`, `Math.ceil()`**
```java
double d = 5.7;
int rounded = (int) Math.round(d);  // 6
int floored = (int) Math.floor(d);  // 5
int ceiled = (int) Math.ceil(d);  // 6
```

### **Using `BigDecimal` for Precise Conversions**
```java
import java.math.BigDecimal;

double d = 2.34567;
BigDecimal bd = new BigDecimal(d).setScale(2, BigDecimal.ROUND_HALF_UP);
System.out.println(bd.doubleValue());  // 2.35
```

---

## **8. Converting Objects to JSON (Using Gson or Jackson)**
```java
import com.google.gson.Gson;

class Person {
    String name;
    int age;
    Person(String name, int age) { this.name = name; this.age = age; }
}

Gson gson = new Gson();
Person p = new Person("Alice", 25);
String json = gson.toJson(p);  // Object → JSON String
System.out.println(json);  // {"name":"Alice","age":25}
```