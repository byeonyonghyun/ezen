import React  from "react";

// const numA = 1;
// const numB = 2;

// const strA = "안녕"
// const strB = "React"

// const boolA = true;
// const boolB = false;

// const objA = {
//   a: 1,
//   b: 2,
// }


const Body = () => {
  const num = 19 ;
  if(num % 2 === 0) {
    return <><h1>짝수</h1></>
  } else {
    return <><h1>홀수</h1></>
  }
};

export default Body;