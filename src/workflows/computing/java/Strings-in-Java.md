# Java Strings Guide

## **1. Creating Strings**
### **Using String Literals**
```java
String str1 = "Hello";
```
- Stored in the **String pool** for memory optimization.

### **Using the `new` Keyword**
```java
String str2 = new String("Hello");
```
- Creates a new object in heap memory, not in the string pool.

---

## **2. Common String Methods**
### **String Length**
```java
String text = "Java";
System.out.println(text.length());  // 4
```

### **Concatenation**
```java
String first = "Hello";
String second = "World";
String result = first + " " + second;
System.out.println(result);  // "Hello World"
```
Or using `concat()`:
```java
String result = first.concat(" ").concat(second);
```

### **Comparing Strings**
#### **Using `equals()`** (Case-sensitive comparison)
```java
String a = "Java";
String b = "java";
System.out.println(a.equals(b));  // false
```
#### **Using `equalsIgnoreCase()`** (Case-insensitive comparison)
```java
System.out.println(a.equalsIgnoreCase(b));  // true
```
#### **Using `compareTo()`** (Lexicographical comparison)
```java
System.out.println("apple".compareTo("banana"));  // -1 (apple comes before banana)
```

### **Substring Extraction**
```java
String word = "HelloWorld";
System.out.println(word.substring(0, 5));  // "Hello"
```

### **Character Extraction**
```java
String s = "Java";
System.out.println(s.charAt(1));  // 'a'
```

### **Checking Prefixes & Suffixes**
```java
System.out.println("JavaScript".startsWith("Java"));  // true
System.out.println("JavaScript".endsWith("Script"));  // true
```

### **Replacing Characters & Substrings**
```java
String text = "Hello World";
System.out.println(text.replace("World", "Java"));  // "Hello Java"
```

### **Trimming Whitespace**
```java
String spaced = "   Java   ";
System.out.println(spaced.trim());  // "Java"
```

---

## **3. String Formatting**
### **Using `String.format()`**
```java
String name = "Alice";
int age = 25;
String formatted = String.format("My name is %s and I am %d years old.", name, age);
System.out.println(formatted);
```

### **Using `printf()`**
```java
System.out.printf("Value: %.2f", 3.14159);  // Output: "Value: 3.14"
```

---

## **4. Splitting Strings**
```java
String sentence = "apple,banana,grape";
String[] fruits = sentence.split(",");
System.out.println(Arrays.toString(fruits));
```

---

## **5. Converting Data to Strings**
### **Using `String.valueOf()`**
```java
int num = 100;
String numStr = String.valueOf(num);
System.out.println(numStr);  // "100"
```
### **Using `toString()`**
```java
Integer num = 42;
System.out.println(num.toString());  // "42"
```

---

## **6. StringBuilder vs StringBuffer**
### **Using `StringBuilder` (Faster, Not Thread-Safe)**
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb.toString());  // "Hello World"
```

### **Using `StringBuffer` (Thread-Safe, Slower)**
```java
StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");
System.out.println(sb.toString());  // "Hello World"
```

---

## **7. String Immutability**
Strings are **immutable**, meaning they cannot be changed after creation. Operations like `concat()` create new strings.
```java
String original = "Hello";
String modified = original.concat(" World");
System.out.println(original);  // "Hello"
System.out.println(modified);  // "Hello World"
```

---

## **8. Converting Strings to Other Types**
```java
String numStr = "123";
int num = Integer.parseInt(numStr);
double d = Double.parseDouble("3.14");
boolean flag = Boolean.parseBoolean("true");
```

---

## **9. Reversing a String**
```java
String original = "Java";
String reversed = new StringBuilder(original).reverse().toString();
System.out.println(reversed);  // "avaJ"
```

---

## **10. Checking If a String is Empty or Null**
```java
String str = "";
System.out.println(str.isEmpty());  // true
System.out.println(str == null);  // false
System.out.println(str != null && str.isBlank());  // true (Java 11+)
```
