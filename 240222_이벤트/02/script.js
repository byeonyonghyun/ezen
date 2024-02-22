//오른쪽 버튼을 누르면 슬라이드가 다음 사진으로 이동
//왼쪽 버튼을 누르면 슬라이드가 이전 사진으로 이동

const arrows = document.querySelectorAll(".arrow");//슬라이드 버튼 가져오기
const container = document.querySelector("#container");//이미지가 들어갈 콘테이너 가져오기
let i = 0; // 웹 브라우저 진입시 시작되는 이미지의 인덱스값 부여
const pics = [ //배열
  "pic-1.jpg",//index0
  "pic-2.jpg",//index1
  "pic-3.jpg",//index2
  "pic-4.jpg",//index3
  "pic-5.jpg",//index4
  "pic-6.jpg"//index5
];//이미지 변수로 지정


container.style.backgroundImage = `url(./images/${pics[0]}`;//콘테이너에 백그라운드 이미지로 이미지 집어넣기
arrows.forEach((arrow) => { //forEach함수 사용
  arrow.addEventListener("click", (e) => { //버튼에 이벤트리스너 부여
    if (e.target.id === "left") {//버튼클릭시 해당 버튼의 id값 가져오기
      i--;
      if (i < 0) {
        i = pisc.length - 1; //첫 이미지에서 이전 버튼 클릭시 마지막 이미지로 이동
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) { //마지막 이미지에서 다음 버튼 클릭시 첫 이미지로 이동
        i = 0;
      }
    }

    container.style.backgroundImage = `url(./images/${pics[i]}`;
  });
});