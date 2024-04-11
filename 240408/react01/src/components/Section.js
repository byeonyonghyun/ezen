import './Section.css'

const Section = ({title, item, result}) => {
  if (title === "computer" && result !== "tie" && result !=="") {
    result = result === "win" ? "lose" : "win";
  } else {
    result = result;
  }
  return (
    <div className={`section ${result}`}>
      <h1>{title}</h1>
      <img className='item-img' src={item?.img}/>
      <h2>{result}</h2>
    </div>
  )
}

export default Section