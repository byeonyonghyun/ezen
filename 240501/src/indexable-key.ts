interface keyValueType {
  [key: string]: string;
}

//반환해야할 값이 존재하는데, 군디 해당 함수의 문법을 표현식문으로 작성해주고 싶은 경우, 결과값 부분에 소괄호 처리를 해서 해당 값이 반환값이라는 것을 알려줘야함

const makeObject = (key: string, value: string): keyValueType => ({
  [key]: value,
});

console.log(makeObject("name", "david"));
console.log(makeObject("firstName", "jane"));

//전통적인 함수에서 this객체가 의미하는 것은 => 현재 이벤트가 발생된 요소 이거나 혹은 class 함수에서 this객체가 의미하는 것은 => 인스턴스 객체 안에서 어떤키를 지칭해주고자 할 때
// this 객체는 화살표 함수에서는 사용불가
//사용하면 코드가 멈추는가? No
// this객체가 가르키는것이 window 객체이기 때문에 원하는 값이 나오지 않을 수도 있다.s