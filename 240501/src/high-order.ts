// // 일반적인 함수
// const add1 = (a: number, b: number): number => a + b;

// // 고차 함수
// const add2 = (a: number): ((arg0: number) => number) =>
//   (b: number): number =>
//     a + b ; // 클로점 

// const result = add2(1)(2);
// console.log(result);
export type NumbertoNumberFunc = (arg0: number) => number;
const add = (a:number): NumbertoNumberFunc => {
  const _add:NumbertoNumberFunc = (b: number): number => {
    return a + b;
  }
  return _add;
}

//고차함수는 함수안에 또다른 함수를 실행시킨 후 바깥쪽에서 실행된 결과값을 받아서 내부에서연산 및 처리작업 후 최종결과값을 출력할 수 있도록 하기 위해 고안된 함수
// 클로저는 고차함수를 실행시키기 위한 중요한 자바스크립트의 개념 중 하나.
//변수: scope => Global / Local