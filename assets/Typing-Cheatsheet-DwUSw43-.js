const n=`# Python Typing Guide\r
\r
## 1. Introduction to Typing in Python\r
\r
Python is dynamically typed, but type hints (introduced in Python 3.5) allow static type checking.\r
\r
\`\`\`python\r
def add(x: int, y: int) -> int:\r
    return x + y\r
\`\`\`\r
\r
Type hints do **not** enforce types at runtime but help with code readability and static analysis.\r
\r
## 2. Basic Type Annotations\r
\r
\`\`\`python\r
x: int = 10\r
name: str = "Alice"\r
is_active: bool = True\r
price: float = 9.99\r
\`\`\`\r
\r
### Common Built-in Types:\r
- \`int\`: Integer values\r
- \`float\`: Floating point numbers\r
- \`str\`: String values\r
- \`bool\`: Boolean values (\`True\`/\`False\`)\r
- \`None\`: Represents the absence of a value\r
\r
## 3. Typing for Collections\r
\r
### Lists, Tuples, Sets, and Dictionaries\r
\r
\`\`\`python\r
from typing import List, Tuple, Set, Dict\r
\r
numbers: List[int] = [1, 2, 3]\r
names: Tuple[str, str] = ("Alice", "Bob")\r
unique_values: Set[int] = {1, 2, 3}\r
user_ages: Dict[str, int] = {"Alice": 25, "Bob": 30}\r
\`\`\`\r
\r
## 4. Using \`Any\` and \`Union\`\r
\r
### \`Any\`: Allows any type\r
\r
\`\`\`python\r
from typing import Any\r
\r
def process(data: Any) -> None:\r
    print(data)\r
\`\`\`\r
\r
### \`Union\`: Multiple possible types\r
\r
\`\`\`python\r
from typing import Union\r
\r
def get_value(flag: bool) -> Union[int, str]:\r
    return 42 if flag else "Hello"\r
\`\`\`\r
\r
## 5. Optional Types\r
\r
Use \`Optional[T]\` to indicate that a variable can be \`None\`.\r
\r
\`\`\`python\r
from typing import Optional\r
\r
def find_user(name: str) -> Optional[str]:\r
    return "User found" if name else None\r
\`\`\`\r
\r
Equivalent shorthand:\r
\`\`\`python\r
def find_user(name: str) -> str | None:\r
    return "User found" if name else None\r
\`\`\`\r
\r
## 6. Typing for Functions\r
\r
\`\`\`python\r
from typing import Callable\r
\r
def execute(func: Callable[[int, int], int], x: int, y: int) -> int:\r
    return func(x, y)\r
\`\`\`\r
\r
## 7. Typing for Classes and Methods\r
\r
\`\`\`python\r
class Person:\r
    def __init__(self, name: str, age: int) -> None:\r
        self.name: str = name\r
        self.age: int = age\r
    \r
    def greet(self) -> str:\r
        return f"Hello, my name is {self.name}."\r
\`\`\`\r
\r
## 8. Generics in Typing\r
\r
Use \`TypeVar\` for generic types.\r
\r
\`\`\`python\r
from typing import TypeVar, Generic\r
\r
T = TypeVar('T')\r
\r
class Box(Generic[T]):\r
    def __init__(self, content: T) -> None:\r
        self.content = content\r
    \r
    def get_content(self) -> T:\r
        return self.content\r
\`\`\`\r
\r
### Example Usage\r
\`\`\`python\r
int_box = Box(10)\r
str_box = Box("Hello")\r
\`\`\`\r
\r
## 9. Type Aliases\r
\r
Define custom types for readability.\r
\r
\`\`\`python\r
from typing import Dict\r
\r
UserDict = Dict[str, int]\r
users: UserDict = {"Alice": 25, "Bob": 30}\r
\`\`\`\r
\r
## 10. \`Literal\` for Fixed Values\r
\r
\`\`\`python\r
from typing import Literal\r
\r
def set_status(status: Literal["active", "inactive"]) -> str:\r
    return f"Status set to {status}"\r
\`\`\`\r
\r
## 11. \`TypedDict\` for Dictionary Structures\r
\r
\`\`\`python\r
from typing import TypedDict\r
\r
class User(TypedDict):\r
    name: str\r
    age: int\r
\r
user: User = {"name": "Alice", "age": 25}\r
\`\`\`\r
\r
## 12. \`NewType\` for Stronger Type Differentiation\r
\r
\`\`\`python\r
from typing import NewType\r
\r
UserId = NewType('UserId', int)\r
\r
def get_user(user_id: UserId) -> str:\r
    return f"User with ID {user_id}"\r
\`\`\`\r
\r
## 13. \`Final\` to Prevent Overriding\r
\r
\`\`\`python\r
from typing import Final\r
\r
PI: Final = 3.14159  # Cannot be changed\r
\`\`\`\r
\r
## 14. \`@overload\` for Function Overloading\r
\r
\`\`\`python\r
from typing import overload\r
\r
@overload\r
def repeat(val: int, times: int) -> List[int]: ...\r
\r
@overload\r
def repeat(val: str, times: int) -> List[str]: ...\r
\r
def repeat(val, times):\r
    return [val] * times\r
\`\`\`\r
\r
## 15. Type Checking with \`mypy\`\r
\r
Use \`mypy\` for static type checking:\r
\`\`\`sh\r
pip install mypy\r
mypy script.py\r
\`\`\``;export{n as default};
