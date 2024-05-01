export class A {
  value: number = 1;
  method: () => void = function(): void {
    console.log(`value: ${this.value}`);
  };
}

//함수에서 매개변수의 타입을 지정하지않으면 에러
//함수의 매개변수