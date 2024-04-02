
const Header = () => {
  const handleOnClick = () => {
    alert("버튼을 눌렀구나...")
  }
  return (
    <header>
      <h1>header</h1>
      <button onClick={handleOnClick}>클릭하세요</button>
    </header>
  );
}

export default Header;