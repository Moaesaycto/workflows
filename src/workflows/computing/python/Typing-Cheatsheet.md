# Python Typing Guide

## 1. Introduction to Typing in Python

Python is dynamically typed, but type hints (introduced in Python 3.5) allow static type checking.

```python
def add(x: int, y: int) -> int:
    return x + y
```

Type hints do **not** enforce types at runtime but help with code readability and static analysis.

## 2. Basic Type Annotations

```python
x: int = 10
name: str = "Alice"
is_active: bool = True
price: float = 9.99
```

### Common Built-in Types:
- `int`: Integer values
- `float`: Floating point numbers
- `str`: String values
- `bool`: Boolean values (`True`/`False`)
- `None`: Represents the absence of a value

## 3. Typing for Collections

### Lists, Tuples, Sets, and Dictionaries

```python
from typing import List, Tuple, Set, Dict

numbers: List[int] = [1, 2, 3]
names: Tuple[str, str] = ("Alice", "Bob")
unique_values: Set[int] = {1, 2, 3}
user_ages: Dict[str, int] = {"Alice": 25, "Bob": 30}
```

## 4. Using `Any` and `Union`

### `Any`: Allows any type

```python
from typing import Any

def process(data: Any) -> None:
    print(data)
```

### `Union`: Multiple possible types

```python
from typing import Union

def get_value(flag: bool) -> Union[int, str]:
    return 42 if flag else "Hello"
```

## 5. Optional Types

Use `Optional[T]` to indicate that a variable can be `None`.

```python
from typing import Optional

def find_user(name: str) -> Optional[str]:
    return "User found" if name else None
```

Equivalent shorthand:
```python
def find_user(name: str) -> str | None:
    return "User found" if name else None
```

## 6. Typing for Functions

```python
from typing import Callable

def execute(func: Callable[[int, int], int], x: int, y: int) -> int:
    return func(x, y)
```

## 7. Typing for Classes and Methods

```python
class Person:
    def __init__(self, name: str, age: int) -> None:
        self.name: str = name
        self.age: int = age
    
    def greet(self) -> str:
        return f"Hello, my name is {self.name}."
```

## 8. Generics in Typing

Use `TypeVar` for generic types.

```python
from typing import TypeVar, Generic

T = TypeVar('T')

class Box(Generic[T]):
    def __init__(self, content: T) -> None:
        self.content = content
    
    def get_content(self) -> T:
        return self.content
```

### Example Usage
```python
int_box = Box(10)
str_box = Box("Hello")
```

## 9. Type Aliases

Define custom types for readability.

```python
from typing import Dict

UserDict = Dict[str, int]
users: UserDict = {"Alice": 25, "Bob": 30}
```

## 10. `Literal` for Fixed Values

```python
from typing import Literal

def set_status(status: Literal["active", "inactive"]) -> str:
    return f"Status set to {status}"
```

## 11. `TypedDict` for Dictionary Structures

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    age: int

user: User = {"name": "Alice", "age": 25}
```

## 12. `NewType` for Stronger Type Differentiation

```python
from typing import NewType

UserId = NewType('UserId', int)

def get_user(user_id: UserId) -> str:
    return f"User with ID {user_id}"
```

## 13. `Final` to Prevent Overriding

```python
from typing import Final

PI: Final = 3.14159  # Cannot be changed
```

## 14. `@overload` for Function Overloading

```python
from typing import overload

@overload
def repeat(val: int, times: int) -> List[int]: ...

@overload
def repeat(val: str, times: int) -> List[str]: ...

def repeat(val, times):
    return [val] * times
```

## 15. Type Checking with `mypy`

Use `mypy` for static type checking:
```sh
pip install mypy
mypy script.py
```