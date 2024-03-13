const lat = 37.5025398;
const lng = 127.0248679;

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = {
    center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
    level: 12 // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

const clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});

const url = "https://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=d3ZaTozm4ZxdqQTS2R51AqDdArFdMN4jZq5JpxyCzi7yoJIKBXYdx8JiyJxTHb5a9TprgsI2pRJw05OjtT2P1g%3D%3D&numOfRows=3000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json";

fetch(url)
  .then(result => result.json())
  .then(json => {
    const data = json.response.body.items.item;

    let markers = [];

    const makeOverListener = () => {
      return () => { infowindow.open(map, marker); }
    }
    const makeOutListener = () => {
      return () => { infowindow.close(); }
    }
    for (let i = 0; i < data.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });

      markers.push(marker);

      // const infowindow = new kakao.maps.infoWindow({
      //   content: data[i].facltNm
      // });
      // kakao.maps.event.addListener(
      //   marker, "mouseover", makeOverListener(map, marker, infowindow),
      // );
      // kakao.maps.event.addListener(
      //   marker, "mouseout", makeOutListener(map, marker, infowindow),
      // );
    }
    clusterer.addMarkers(markers);
  });

//공공데이터 포털사이트
//공공API = 접근에 대한 제한 조건 제한이 없음
//데이터를 가져올 때 -> 마이페이지 > 데이터활용 > openAPI > 승인된 API데이터 > 상세기능 > 미리보기 > URL복사
//반드시, openAPI url을 가져올 때 맨 뒤에 ?_type=json
// => 공공데이터를 가져오는 1차방법

//fetch() API함수 => json():객체전환
//카카오맵 API => 카카오 APIkey발급 => 클러스터기능 ($libraries=clusterer)

//카카오 지도 기능활용
//1)sample > 지도 생성하기
//(기본위치정보 세팅: 현재 나의 위치:구글맵)
//2)sample > 오버레이 > 마커생성하기
//(마커의 정보를 생성 => 빈배열 생성 => 반복문 활용 => 공공데이터 빈배열에 저장)
//3) sample > 오버레이 > 여러개 마커 표시하기
//4) sample > 라이브러리 > 마커 클러스터러 사용하기