const button = document.querySelector("button");
const result = document.querySelector("#result");
console.log(button, result);

// 로또 규칙
//한 번 추첨 시 : 6개의 숫자 (+반드시 중복x)
//각각의 6개의 숫자 : 최대 45까지 가능
//1~45까지의 구간 숫자, 랜덤 => 수학객체 random() *45
//반복문!! *6번
//절대 중복 x => set()
//result출력


const luckNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckNumber;
  const numList = new Set();
  for (let i = 0; i < digitCount; i++) {
    const lucky = Math.ceil(Math.random() * maxNumber);
    numList.add(lucky);
  }
  if (numList.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      const lucky = Math.ceil(Math.random() * maxNumber);
      numList.add(lucky);
    }
  } else {
    result.innerText = `${[...numList]}`;
  }
  console.log(numList);
};

button.addEventListener("click", lottoPlay);