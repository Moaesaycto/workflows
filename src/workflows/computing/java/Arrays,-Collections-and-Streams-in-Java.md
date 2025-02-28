# Java Collections & Streams Cheat Sheet

## **1. Array vs. ArrayList**

| Feature | `int[]` | `ArrayList<Integer>` |
|---------|--------|------------------|
| **Size** | Fixed | Dynamic |
| **Performance** | Faster | Slightly slower (due to resizing) |
| **Generics** | No | Yes (`ArrayList<T>`) |
| **Methods** | Basic operations | Rich API (`add()`, `remove()`, etc.) |
| **Primitive storage** | Yes (`int[]`) | No (stores `Integer` objects) |

### **Example Usage**
```java
import java.util.*;

public class ArrayExample {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        for (int num : arr) {
            System.out.print(num + " ");
        }

        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        list.add(6);
        System.out.println("\n" + list);
    }
}
```

---

## **2. List Methods (`ArrayList<T>`)**

| Method | Description |
|--------|-------------|
| `add(T item)` | Adds an item to the list |
| `add(index, item)` | Inserts at specified index |
| `remove(index)` | Removes item at index |
| `remove(Object obj)` | Removes first occurrence of object |
| `get(index)` | Retrieves item at index |
| `set(index, item)` | Replaces item at index |
| `size()` | Returns list size |
| `contains(Object obj)` | Checks if list contains item |
| `indexOf(Object obj)` | Returns first index of item |
| `isEmpty()` | Returns `true` if list is empty |
| `clear()` | Removes all elements |
| `toArray()` | Converts list to array |

### **Example Usage**
```java
import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        numbers.add(5);
        numbers.remove(Integer.valueOf(2));
        System.out.println(numbers); // [1, 3, 4, 5]
    }
}
```

---

## **3. Streams API**
### **Creating Streams**
```java
import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        Stream<String> nameStream = names.stream();
    }
}
```

### **ForEach (Looping through items)**
```java
names.forEach(System.out::println);
```

### **Filtering Items**
```java
List<String> filtered = names.stream()
    .filter(name -> name.startsWith("A"))
    .collect(Collectors.toList());
System.out.println(filtered); // [Alice]
```

### **Mapping (Transforming Items)**
```java
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());
System.out.println(lengths); // [5, 3, 7]
```

### **Sorting a Stream**
```java
List<String> sortedNames = names.stream()
    .sorted()
    .collect(Collectors.toList());
System.out.println(sortedNames); // [Alice, Bob, Charlie]
```

### **Reducing a Stream (Aggregating Data)**
```java
int sum = Arrays.asList(1, 2, 3, 4, 5).stream()
    .reduce(0, Integer::sum);
System.out.println(sum); // 15
```

### **Collecting to a List**
```java
List<String> uppercaseNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
System.out.println(uppercaseNames); // [ALICE, BOB, CHARLIE]
```

---

## **4. More Useful Collection Methods**

| Method | Description |
|--------|-------------|
| `Collections.sort(list)` | Sorts list in ascending order |
| `Collections.reverse(list)` | Reverses list order |
| `Collections.shuffle(list)` | Randomises list order |
| `Collections.max(list)` | Finds max value |
| `Collections.min(list)` | Finds min value |
| `Collections.frequency(list, item)` | Counts occurrences of item |

### **Example Usage**
```java
import java.util.*;

public class CollectionsExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 3);
        Collections.sort(numbers);
        System.out.println(numbers); // [1, 2, 3, 5, 8]
    }
}
```

---

## **5. Converting Between Arrays & Lists**

### **Array to List**
```java
String[] arr = {"A", "B", "C"};
List<String> list = new ArrayList<>(Arrays.asList(arr));
```

### **List to Array**
```java
List<String> list = Arrays.asList("A", "B", "C");
String[] arr = list.toArray(new String[0]);
```
