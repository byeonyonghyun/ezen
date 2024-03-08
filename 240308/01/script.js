//배열의 메서드 (sort/ map / filter / reduce) 실습예제 + XHR 프로토타입 => 외부에서 데이터를 가져와서 활용 빈도 높아짐

//1) 데이터를 생성할 때마다 json을 만들어야하나? => 배포단계에 로컬컴퓨터에만 존재해야하나?
// => fake server : git-hub (레포지토리 => server) 단, 10mb 이상 안됨!!
//2) json 파일을 직접 커스터마이징 해야하나요?

const url = "https://reqres.in/api/products/10";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(xhr.responseText);
    console.log(product);
    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>생산년도 : ${product.data.year}</p>
    `;
  }
}
