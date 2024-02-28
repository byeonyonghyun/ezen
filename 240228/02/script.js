//원기둥의 부피 = 밑면적 x 높이
//밑면적 = 파이 x ((지름 /2 )제곱)

//생성자 함수 혹은 class를 활용해서 코드 작성

//지름과 높이, 버튼, 결과창을 가져온다
//지름과 높이 input값을 가져온다

// function Cylinder(diameter, height) {
//   this.diameter = diameter;
//   this.height = height;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);//값을 반환해야하는구나
//   };
// }

// const cylinder = new Cylinder(10, 10);
// console.log(cylinder.getVolume());

const form = document.querySelector("form");
const result = document.querySelector("#result");

class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;


  if (diameter === "" || height === "") {//예외 조항 처리
    result.innerText = "지름과 높이값을 입력하세요"
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height));//자료값이 string일수있으니 꼭 확인하자!
    result.innerText = cylinder.getVolume();
  }
});