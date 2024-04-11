// const studentA = {
//   name:"david",
//   grade: "A+",
//   study() {
//     console.log("공부합시다");
//   },
//   introduce() {
//     console.log("반갑습니다.");
//   },
// };
// const studentB = {
//   name:"Juliet",
//   grade: "B+",
//   study() {
//     console.log("공부합시다");
//   },
//   introduce() {
//     console.log("반갑습니다.");
//   },
// };

// 클래스가 필요한 이유
//1)대다수의 데이터가 객체 자료 형식을 갖기 마련 - 반복적으로 사용되는 객체자료형식을 커스텀해서 사용
//(굉장히 유사한 패턴을 가지고 있는 객체 자료를 다수 생성)

class Student {
  //객체에서 사용할 수 있는 key값 선언
  // field
  name;
  age;
  grade;

  //constructor function = 생성자 함수
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;    
  }

  study() {
    console.log("열심히 공부함");
  }
  introduce(){
    console.log("안녕핫요");
  }
}

const studentA = new Student("Romeo", 22, "A+");