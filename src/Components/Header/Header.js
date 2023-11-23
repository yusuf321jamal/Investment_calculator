import "./Header.css";
import logo from "../../Assets/invest-calc-logo.png";

function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
}
export default Header;
