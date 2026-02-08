import ReactLogo from "/react.png";

const style = {
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

function Header() {
  return (
    <div style={style}>
      <img src={ReactLogo} alt="React logo" width={100} />
      <h1>The React Quiz</h1>
    </div>
  );
}

export default Header;
