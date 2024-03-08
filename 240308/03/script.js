//js언어 이야기
//객체지향언어

//외부에서 json 형식의 데이터를 가져와서 웹브라우저 출력해야하는 상황

//js언어 => 태생적으로 동기 처리 방식을 하도록 만들어짐

//동기 => 순차적으로 무언가를 처리한다는 뜻

const displayA = () => {
  console.log("A");
}
const displayB = () => {
  console.log("B");
}
const displayC = () => {
  console.log("C");
};

const odrer (coffee, callback) => {
  callback(coffee);
}

odrer("아메리카노", display);