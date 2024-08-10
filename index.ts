// Задание: Напишите функцию sayHello, которая принимает один параметр name типа string и возвращает строку приветствия.
function sayHello(name: string): string {
return `Здравствуйте, ${name}!`;
}
// console.log(sayHello("Алимхан"));

// Задание: Напишите функцию addNumbers, которая принимает два параметра num1 и num2 типа number и возвращает их сумму.
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(addNumbers(10, 5))

// Определите тип Person, который включает поля firstName и lastName типа string, и age типа number.
//  Напишите функцию getFullName, которая принимает параметр person типа Person и возвращает его полное имя.
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

const person: Person = {
  firstName: "Алимхан",
  lastName: "Магомадов",
  age: 18
};

// Задание: Определите тип Point с двумя полями x и y, оба типа number. 
// Напишите функцию getDistance, которая принимает два параметра типа Point и возвращает расстояние между ними.
type Point = {
  x: number;
  y: number;
};

function getDistance(point1: Point, point2: Point): number {
  const xDiff = point2.x - point1.x;
  const yDiff = point2.y - point1.y;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
};

const point1: Point = { x: 1, y: 2 };
const point2: Point = { x: 4, y: 6 };

// Задание: Напишите функцию filterByType, которая принимает 2 параметра, 1 - массив любого типа, 2 - строка (соответственно и тип (как строку)), а затем возвращает новый массив, содержащий только элементы указанного типа.
function filterByType<T>(array: T[], type: string): T[] {
  return array.filter((item) => typeof item === type);
}

const mixedArray = [1, "hello", true, 2.5, "world", false];

const numbers = filterByType(mixedArray, "number");
console.log(numbers);

const strings = filterByType(mixedArray, "string");
console.log(strings);  //Не особо понял как это работает(списал в общем)










