import React from "react";





const Buttons = () =>{
  const handleOnClick = (e) => {
    console.log(e.target.name)
  }
  return (
    <div>
      <button name="a버튼" onClick={handleOnClick}>버튼A</button>
      <button name="b버튼" onClick={handleOnClick}>버튼B</button>
    </div>
  )
}

export default Buttons