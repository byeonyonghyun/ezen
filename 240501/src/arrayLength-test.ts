import { arrayLength, isEmpty } from "./arrayLength";

interface IPerson {
  name:string;
  age?:number;
}


const numArray: number[] = [1,2,3];
const strArray: string[] = ["Hello", "Javascript"];
const personArray: IPerson[] = [{name: "Daivd"},{name:"Jane", age: 22}];

console.log(
  arrayLength(numArray), arrayLength(strArray), arrayLength(personArray), isEmpty([]), isEmpty([1])
);