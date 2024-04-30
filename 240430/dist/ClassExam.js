// JS Class => TS 접근제어자
// const studentA = {
//   name: "짱구",
//   grade: "A+",
//   age: 22,
//   study() {
//     console.log("죽도록 공부함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   }
// };
// const studentA = {
//   name: "철수",
//   grade: "B+",
//   age: 21,
//   study() {
//     console.log("축구를 좋아함");
//   },
//   introduce() {
//     console.log("공.");
//   }
// };
class Student {
    //필드
    name;
    grade;
    age;
    //생성자 함수
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    //매서드 함수
    study() {
        console.log("열심히 공부함");
    }
    introduce() {
        console.log(`안녕하세요! ${this.name}입니다!`);
    }
}
const studentA = new Student("짱구", "A+", 22);
studentA.study();
studentA.introduce();
//JS Class 생성 후 상속가능!!!
//부모 > 자식
class SutdentDeveloper extends Student {
    //필드
    favoriteSkill;
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    //매서드
    Programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함`);
    }
}
const studentB = new SutdentDeveloper("슛돌이", "B+", 21, "Javascript");
studentB.Programming();
export {};
// TS class를 생성하거나 상속하거나 받는 개념 거으 동일하나, 살짝 "접근제어자+타입정의"만 상이함
//# sourceMappingURL=ClassExam.js.map