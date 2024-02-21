//약수를 구하려면 정수를 나누었을때 나머지 값이 0이 나오는 숫자들을 찾아야한다.
// 1.받아오는 숫자를 찾아온다
// 두수의 약수들 중에서 가장 큰수를 가져온다

const numf = document.querySelector("#number1");
const nums = document.querySelector("#number2");
const result = document.querySelector("#result");
const button = document.querySelector("form input[type='submit']");

const getGCD = (numf, nums) => {
  const max = numf > nums ? numf : nums;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    it(numf % i === 0 && nums % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = (e) => {
  e.preventDefault();
  result.innerText = getGCD(numf.value, nums.value);
};