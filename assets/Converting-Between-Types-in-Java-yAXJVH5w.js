const n=`# Conversions Between Different Data Types in Java\r
\r
In Java, you can convert between different data types using **casting**, **wrapper classes**, and **built-in methods**. Here’s a breakdown:\r
\r
---\r
\r
## **1. Primitive Type Conversions**\r
### **Implicit (Widening) Conversion** *(Smaller to Larger)*\r
Happens automatically when there’s no risk of losing data.\r
\`\`\`java\r
int num = 10;\r
double d = num;  // Implicit conversion (int → double)\r
System.out.println(d);  // 10.0\r
\`\`\`\r
\r
### **Explicit (Narrowing) Conversion** *(Larger to Smaller)*\r
Requires manual casting to avoid data loss.\r
\`\`\`java\r
double d = 10.5;\r
int num = (int) d;  // Explicit cast (double → int)\r
System.out.println(num);  // 10\r
\`\`\`\r
\r
---\r
\r
## **2. Converting Between Primitives and Wrapper Classes**\r
Java provides **Wrapper Classes** (\`Integer\`, \`Double\`, etc.) for primitive types.\r
\r
### **Primitive to Wrapper (Autoboxing)**\r
\`\`\`java\r
int num = 10;\r
Integer obj = num;  // Autoboxing (int → Integer)\r
\`\`\`\r
\r
### **Wrapper to Primitive (Unboxing)**\r
\`\`\`java\r
Integer obj = 20;\r
int num = obj;  // Unboxing (Integer → int)\r
\`\`\`\r
\r
### **Using Wrapper Methods**\r
\`\`\`java\r
String str = "123";\r
int num = Integer.parseInt(str);  // Converts String → int\r
double d = Double.parseDouble("3.14");  // String → double\r
\`\`\`\r
\r
---\r
\r
## **3. Converting Primitives/Wrappers to Strings**\r
### **Using \`String.valueOf()\`**\r
\`\`\`java\r
int num = 100;\r
String str = String.valueOf(num);  // int → String\r
System.out.println(str);  // "100"\r
\`\`\`\r
\r
### **Using \`toString()\`**\r
\`\`\`java\r
Integer obj = 50;\r
String str = obj.toString();  // Integer → String\r
System.out.println(str);  // "50"\r
\`\`\`\r
\r
---\r
\r
## **4. Converting Strings to Primitives**\r
\`\`\`java\r
String str = "456";\r
int num = Integer.parseInt(str);  // String → int\r
double d = Double.parseDouble("3.1416");  // String → double\r
boolean bool = Boolean.parseBoolean("true");  // String → boolean\r
\`\`\`\r
\r
---\r
\r
## **5. Converting Between Objects (Casting)**\r
### **Upcasting (Child → Parent)**\r
Happens automatically when assigning a subclass object to a superclass variable.\r
\`\`\`java\r
class Animal {}\r
class Dog extends Animal {}\r
\r
Animal a = new Dog();  // Upcasting\r
\`\`\`\r
\r
### **Downcasting (Parent → Child)**\r
Needs explicit casting to work.\r
\`\`\`java\r
Animal a = new Dog();\r
Dog d = (Dog) a;  // Downcasting\r
\`\`\`\r
\r
---\r
\r
## **6. Converting Between Lists & Arrays**\r
### **Array → List**\r
\`\`\`java\r
String[] arr = {"A", "B", "C"};\r
List<String> list = new ArrayList<>(Arrays.asList(arr));\r
\`\`\`\r
\r
### **List → Array**\r
\`\`\`java\r
List<String> list = Arrays.asList("X", "Y", "Z");\r
String[] arr = list.toArray(new String[0]);\r
\`\`\`\r
\r
---\r
\r
## **7. Converting Between Numeric Types**\r
### **Using \`Math.round()\`, \`Math.floor()\`, \`Math.ceil()\`**\r
\`\`\`java\r
double d = 5.7;\r
int rounded = (int) Math.round(d);  // 6\r
int floored = (int) Math.floor(d);  // 5\r
int ceiled = (int) Math.ceil(d);  // 6\r
\`\`\`\r
\r
### **Using \`BigDecimal\` for Precise Conversions**\r
\`\`\`java\r
import java.math.BigDecimal;\r
\r
double d = 2.34567;\r
BigDecimal bd = new BigDecimal(d).setScale(2, BigDecimal.ROUND_HALF_UP);\r
System.out.println(bd.doubleValue());  // 2.35\r
\`\`\`\r
\r
---\r
\r
## **8. Converting Objects to JSON (Using Gson or Jackson)**\r
\`\`\`java\r
import com.google.gson.Gson;\r
\r
class Person {\r
    String name;\r
    int age;\r
    Person(String name, int age) { this.name = name; this.age = age; }\r
}\r
\r
Gson gson = new Gson();\r
Person p = new Person("Alice", 25);\r
String json = gson.toJson(p);  // Object → JSON String\r
System.out.println(json);  // {"name":"Alice","age":25}\r
\`\`\``;export{n as default};
