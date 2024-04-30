//추상클래스
//추상 : 여러개의 사물이나 개념에 공통적인 요소를 추출해서 만들어내는 개념이다.
//공통적인 속성을 가지고 있는 서로다른 요소의 객체를 만들어야하는 경우
//단, 추상클래스가 되려면 반드시 공통적인 속성 및 메서드가 1개 이상 존재해야함
// - 추상컨셉의 속성 및 메서드가 1개 이상

abstract class Developer {
  abstract coding()  :void;
  drink() : void {
    console.log("drink");
  }
}

class FrontEndDeveloper extends Developer {
  coding() :void {
    console.log("develop");
  }
  design() : void {
    console.log("design");
  }
}

//추상 클래스도 클래스
//일반적인 다른 클래스처럼 인스턴스를 만들어낼 수 있을까?
//추상클래스도 클래스이지만, 일반적인 클래스처럼 인스턴스를 만들어낼 수 없다

// const dev01 = new Developer();
const dev = new FrontEndDeveloper();
dev.coding();

// 클래스를 선언할 때, 클래스 안에는 속성 & 매서드
// 클래스 => 객체