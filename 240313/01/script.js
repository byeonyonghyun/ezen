// const getLocation = document.querySelector("button");

// const showPosition = (position) => {
//   console.log(position);
//   document.querySelector(
//     "#result"
//   ).innerHTML = `<b>위도:${position.coords.latitude}</b>, <b>경도:${position.coords.longitude}</b>`;
// }


// getLocation.addEventListener("click", () => {
//   if (window.navigator.geolocation) {
//     window.navigator.geolocation.getCurrentPosition(
//       showPosition,
//       // errorPosition
//     );
//   } else {
//     alert("지오로케이션을 지원하지 않습니다!");
//   }
// });

const getLocation = document.querySelector("button");
const errorPosition = (err) => { alert(err.message) };
const showPosition = (position) => {
  console.log(position);
  document.querySelector("#result")
    .innerHTML = `<b>위도:${position.coords.latitude}</b>, <b>경도:${position.coords.longitude}</b>`;
}

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const option = {
      enableHighAccuracy: ture,
      timeout: 5000,
      maximumAge: 0,
    };

    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      option
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 10000);
  } else {
    alert("지오로케이션을 지원하지 않습니다!");
  }
});