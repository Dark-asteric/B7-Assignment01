// Exercice - 01 :
function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// Exercice - 02 :
function reverse(str: string): string {
  return str.split("").reverse().join("");
}

// Exercice - 03 :
type StringOrNumber = string | number;

function typeCheck(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string"){ return "String";
  }
  return "Number";
}

// Exercice - 04 :
function getProperty<T, K extends keyof T>(key: T, value: K): T[K] {
  return key[value];
}

// Exercice - 05 :
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggle(book: Book, isRead: boolean = true): Book & { isRead: boolean } {
  return { ...book, isRead };
}

// Exercice - 06 :
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Exercice - 07 :
function getIntersection(a: number[], b: number[]): number[] {
  const B = new Set(b);
  return a.filter((num) => B.has(num));
}

