class Employee {
  //필드
  // private name: string; //자동으로 public
  // public age: number;//자동으로 public
  // public position: string;//자동으로 public

  //생성자 함수
  constructor( protected name: string, public age:number, public position: string){
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  //매서드
  work() {
    console.log("열심히 일함");
  }
}

const EmployeeA: Employee = new Employee("곽두팔", 32, "일용직");
EmployeeA.work();

// EmployeeA.name = "피구왕 통키";
EmployeeA.age = 26;
EmployeeA.position = "피구왕";
console.log(EmployeeA);

// 상속=extends : 부모요소로부터 값을 받을 수 있다는 전제를 설정하는 것이지, 반드시 상속받을 값을 구현해야할 의무x


// 실행 = implement : 반드시 실행

class ExecutiveOfficer extends Employee {
  //필드값은 변함없이 상속
  //super() 사용X, 메서드만 추가
  func(){
    console.log(`${this.name}`);
    console.log(`${this.age}`);
  }
}

// TS접근제어자
// public - 모든 범위에서 접근할 수 있는 제어자 설정 (class를 생성 기본  세팅된 default 제어자)
// private - 클래스 내부 범위에서만 접근할 수 있는 제어자 설정
// protected - 클래스 내부 + 상속받은 파생 클래스에서만 접근할 수 있는 제어자 설정