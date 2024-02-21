// 키170 => 몸무게/(170/100 =>제곱 )
// 몸무게 73
// 73 / (1.7 * 1.7)

// 1. 몸무게와 키 입력값을 받아온다.
// 2. BMI를 계산하는 버튼을 가져온다.
// 3.결과값이 나타날 수 있는 result값을 가져온다.
// 4. BMI계산함수를 입력한다.
// 5.결과값을 result에 넣는다


const calc = document.querySelector("form input[type='submit']");






const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;
  if (bmi >= 30) {
    group = "중등도 비만";
  } else if (bmi >= 25) {
    group = "경도비만";
  } else if (bmi >= 23) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }

  result.innerText = `${bmi} = ${group}입니다`
};

const bmiCalc = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  if (weightInput.value != "" && heightInput.value != "") {

    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = calculate(weight, height);

    display(bmi);
  }
  heightInput.value = "";
  weightInput.value = "";
};

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};
calc.onclick = bmiCalc;

