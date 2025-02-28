const r=`# Java Collections & Streams Cheat Sheet\r
\r
## **1. Array vs. ArrayList**\r
\r
| Feature | \`int[]\` | \`ArrayList<Integer>\` |\r
|---------|--------|------------------|\r
| **Size** | Fixed | Dynamic |\r
| **Performance** | Faster | Slightly slower (due to resizing) |\r
| **Generics** | No | Yes (\`ArrayList<T>\`) |\r
| **Methods** | Basic operations | Rich API (\`add()\`, \`remove()\`, etc.) |\r
| **Primitive storage** | Yes (\`int[]\`) | No (stores \`Integer\` objects) |\r
\r
### **Example Usage**\r
\`\`\`java\r
import java.util.*;\r
\r
public class ArrayExample {\r
    public static void main(String[] args) {\r
        int[] arr = {1, 2, 3, 4, 5};\r
        for (int num : arr) {\r
            System.out.print(num + " ");\r
        }\r
\r
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\r
        list.add(6);\r
        System.out.println("\\n" + list);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
## **2. List Methods (\`ArrayList<T>\`)**\r
\r
| Method | Description |\r
|--------|-------------|\r
| \`add(T item)\` | Adds an item to the list |\r
| \`add(index, item)\` | Inserts at specified index |\r
| \`remove(index)\` | Removes item at index |\r
| \`remove(Object obj)\` | Removes first occurrence of object |\r
| \`get(index)\` | Retrieves item at index |\r
| \`set(index, item)\` | Replaces item at index |\r
| \`size()\` | Returns list size |\r
| \`contains(Object obj)\` | Checks if list contains item |\r
| \`indexOf(Object obj)\` | Returns first index of item |\r
| \`isEmpty()\` | Returns \`true\` if list is empty |\r
| \`clear()\` | Removes all elements |\r
| \`toArray()\` | Converts list to array |\r
\r
### **Example Usage**\r
\`\`\`java\r
import java.util.*;\r
\r
public class ListExample {\r
    public static void main(String[] args) {\r
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));\r
        numbers.add(5);\r
        numbers.remove(Integer.valueOf(2));\r
        System.out.println(numbers); // [1, 3, 4, 5]\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
## **3. Streams API**\r
### **Creating Streams**\r
\`\`\`java\r
import java.util.*;\r
import java.util.stream.*;\r
\r
public class StreamExample {\r
    public static void main(String[] args) {\r
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\r
        Stream<String> nameStream = names.stream();\r
    }\r
}\r
\`\`\`\r
\r
### **ForEach (Looping through items)**\r
\`\`\`java\r
names.forEach(System.out::println);\r
\`\`\`\r
\r
### **Filtering Items**\r
\`\`\`java\r
List<String> filtered = names.stream()\r
    .filter(name -> name.startsWith("A"))\r
    .collect(Collectors.toList());\r
System.out.println(filtered); // [Alice]\r
\`\`\`\r
\r
### **Mapping (Transforming Items)**\r
\`\`\`java\r
List<Integer> lengths = names.stream()\r
    .map(String::length)\r
    .collect(Collectors.toList());\r
System.out.println(lengths); // [5, 3, 7]\r
\`\`\`\r
\r
### **Sorting a Stream**\r
\`\`\`java\r
List<String> sortedNames = names.stream()\r
    .sorted()\r
    .collect(Collectors.toList());\r
System.out.println(sortedNames); // [Alice, Bob, Charlie]\r
\`\`\`\r
\r
### **Reducing a Stream (Aggregating Data)**\r
\`\`\`java\r
int sum = Arrays.asList(1, 2, 3, 4, 5).stream()\r
    .reduce(0, Integer::sum);\r
System.out.println(sum); // 15\r
\`\`\`\r
\r
### **Collecting to a List**\r
\`\`\`java\r
List<String> uppercaseNames = names.stream()\r
    .map(String::toUpperCase)\r
    .collect(Collectors.toList());\r
System.out.println(uppercaseNames); // [ALICE, BOB, CHARLIE]\r
\`\`\`\r
\r
---\r
\r
## **4. More Useful Collection Methods**\r
\r
| Method | Description |\r
|--------|-------------|\r
| \`Collections.sort(list)\` | Sorts list in ascending order |\r
| \`Collections.reverse(list)\` | Reverses list order |\r
| \`Collections.shuffle(list)\` | Randomises list order |\r
| \`Collections.max(list)\` | Finds max value |\r
| \`Collections.min(list)\` | Finds min value |\r
| \`Collections.frequency(list, item)\` | Counts occurrences of item |\r
\r
### **Example Usage**\r
\`\`\`java\r
import java.util.*;\r
\r
public class CollectionsExample {\r
    public static void main(String[] args) {\r
        List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 3);\r
        Collections.sort(numbers);\r
        System.out.println(numbers); // [1, 2, 3, 5, 8]\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
## **5. Converting Between Arrays & Lists**\r
\r
### **Array to List**\r
\`\`\`java\r
String[] arr = {"A", "B", "C"};\r
List<String> list = new ArrayList<>(Arrays.asList(arr));\r
\`\`\`\r
\r
### **List to Array**\r
\`\`\`java\r
List<String> list = Arrays.asList("A", "B", "C");\r
String[] arr = list.toArray(new String[0]);\r
\`\`\`\r
`;export{r as default};
