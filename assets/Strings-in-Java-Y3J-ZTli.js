const n=`# Java Strings Guide\r
\r
## **1. Creating Strings**\r
### **Using String Literals**\r
\`\`\`java\r
String str1 = "Hello";\r
\`\`\`\r
- Stored in the **String pool** for memory optimization.\r
\r
### **Using the \`new\` Keyword**\r
\`\`\`java\r
String str2 = new String("Hello");\r
\`\`\`\r
- Creates a new object in heap memory, not in the string pool.\r
\r
---\r
\r
## **2. Common String Methods**\r
### **String Length**\r
\`\`\`java\r
String text = "Java";\r
System.out.println(text.length());  // 4\r
\`\`\`\r
\r
### **Concatenation**\r
\`\`\`java\r
String first = "Hello";\r
String second = "World";\r
String result = first + " " + second;\r
System.out.println(result);  // "Hello World"\r
\`\`\`\r
Or using \`concat()\`:\r
\`\`\`java\r
String result = first.concat(" ").concat(second);\r
\`\`\`\r
\r
### **Comparing Strings**\r
#### **Using \`equals()\`** (Case-sensitive comparison)\r
\`\`\`java\r
String a = "Java";\r
String b = "java";\r
System.out.println(a.equals(b));  // false\r
\`\`\`\r
#### **Using \`equalsIgnoreCase()\`** (Case-insensitive comparison)\r
\`\`\`java\r
System.out.println(a.equalsIgnoreCase(b));  // true\r
\`\`\`\r
#### **Using \`compareTo()\`** (Lexicographical comparison)\r
\`\`\`java\r
System.out.println("apple".compareTo("banana"));  // -1 (apple comes before banana)\r
\`\`\`\r
\r
### **Substring Extraction**\r
\`\`\`java\r
String word = "HelloWorld";\r
System.out.println(word.substring(0, 5));  // "Hello"\r
\`\`\`\r
\r
### **Character Extraction**\r
\`\`\`java\r
String s = "Java";\r
System.out.println(s.charAt(1));  // 'a'\r
\`\`\`\r
\r
### **Checking Prefixes & Suffixes**\r
\`\`\`java\r
System.out.println("JavaScript".startsWith("Java"));  // true\r
System.out.println("JavaScript".endsWith("Script"));  // true\r
\`\`\`\r
\r
### **Replacing Characters & Substrings**\r
\`\`\`java\r
String text = "Hello World";\r
System.out.println(text.replace("World", "Java"));  // "Hello Java"\r
\`\`\`\r
\r
### **Trimming Whitespace**\r
\`\`\`java\r
String spaced = "   Java   ";\r
System.out.println(spaced.trim());  // "Java"\r
\`\`\`\r
\r
---\r
\r
## **3. String Formatting**\r
### **Using \`String.format()\`**\r
\`\`\`java\r
String name = "Alice";\r
int age = 25;\r
String formatted = String.format("My name is %s and I am %d years old.", name, age);\r
System.out.println(formatted);\r
\`\`\`\r
\r
### **Using \`printf()\`**\r
\`\`\`java\r
System.out.printf("Value: %.2f", 3.14159);  // Output: "Value: 3.14"\r
\`\`\`\r
\r
---\r
\r
## **4. Splitting Strings**\r
\`\`\`java\r
String sentence = "apple,banana,grape";\r
String[] fruits = sentence.split(",");\r
System.out.println(Arrays.toString(fruits));\r
\`\`\`\r
\r
---\r
\r
## **5. Converting Data to Strings**\r
### **Using \`String.valueOf()\`**\r
\`\`\`java\r
int num = 100;\r
String numStr = String.valueOf(num);\r
System.out.println(numStr);  // "100"\r
\`\`\`\r
### **Using \`toString()\`**\r
\`\`\`java\r
Integer num = 42;\r
System.out.println(num.toString());  // "42"\r
\`\`\`\r
\r
---\r
\r
## **6. StringBuilder vs StringBuffer**\r
### **Using \`StringBuilder\` (Faster, Not Thread-Safe)**\r
\`\`\`java\r
StringBuilder sb = new StringBuilder("Hello");\r
sb.append(" World");\r
System.out.println(sb.toString());  // "Hello World"\r
\`\`\`\r
\r
### **Using \`StringBuffer\` (Thread-Safe, Slower)**\r
\`\`\`java\r
StringBuffer sb = new StringBuffer("Hello");\r
sb.append(" World");\r
System.out.println(sb.toString());  // "Hello World"\r
\`\`\`\r
\r
---\r
\r
## **7. String Immutability**\r
Strings are **immutable**, meaning they cannot be changed after creation. Operations like \`concat()\` create new strings.\r
\`\`\`java\r
String original = "Hello";\r
String modified = original.concat(" World");\r
System.out.println(original);  // "Hello"\r
System.out.println(modified);  // "Hello World"\r
\`\`\`\r
\r
---\r
\r
## **8. Converting Strings to Other Types**\r
\`\`\`java\r
String numStr = "123";\r
int num = Integer.parseInt(numStr);\r
double d = Double.parseDouble("3.14");\r
boolean flag = Boolean.parseBoolean("true");\r
\`\`\`\r
\r
---\r
\r
## **9. Reversing a String**\r
\`\`\`java\r
String original = "Java";\r
String reversed = new StringBuilder(original).reverse().toString();\r
System.out.println(reversed);  // "avaJ"\r
\`\`\`\r
\r
---\r
\r
## **10. Checking If a String is Empty or Null**\r
\`\`\`java\r
String str = "";\r
System.out.println(str.isEmpty());  // true\r
System.out.println(str == null);  // false\r
System.out.println(str != null && str.isBlank());  // true (Java 11+)\r
\`\`\`\r
`;export{n as default};
