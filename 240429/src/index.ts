//타입 주석 달았다

import { StringLiteral } from "typescript";

// let n: number = 1;
// let b: boolean = true;
// let s: string = "hello";
// let o: object = {};

//타입 불일치가 발생했을 경우 즉각 경고
// n = "hello";
// b = 1;
// s = false;

// 실제 실무에서는 타입의 주석을 특별한 케이스가 아니면 잘 사용하지 않음
// 타입스크립트는 타입 추론

// let m = 1 ;
// let p = "Hello";
// let q = false;
// let obj = {};

// let any: any  = 0;

// any = "10";
// any = true;
// any = {} ;
// any = undefined;

// let unTest: undefined = undefined ;

// let numTest = 10;

// 실무에서는 object 타입을 거의 안씀

// let o: object = {
//   name: "David",
//   age: 20,
// };

// o = {
//   name: 7,
//   age: 2,
// }

interface IPerson {
  name : string;
  age : number;
};

let good = {
  name: "david",
  age : 20,
};

// good = {
//   name: 7,
// };

// let bad: IPerson = {
//   name: "David",
// }

interface IPerson2 {
  name: string;
  age: number;
  etc?: boolean;
}

let good1 = {
  name: "Paris",
  age : 20
};
let good2 = {
  name: "Paris",
  age : 20,
  etc: true
};

//  익명 interface => 고차함수
let ai : {
  name:string;
  age:number;
  etc?:boolean;
} = {
  name: "David",
  age: 20,
}

const printMe = (me: { name: string, age:number, etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
};

printMe(ai);