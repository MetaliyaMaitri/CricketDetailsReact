import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div class="container">
          <div class="left_part">
            <div class="logo">
              <h1>
                <Link to="./">LOGO</Link>
              </h1>
            </div>
          </div>
          <div class="right_part">
            <ul class="header_ul">
              <li class="link">
                <Link to="./">Home</Link>
              </li>
              <li class="link">
                <Link to="./matches">All Match</Link>
              </li>
              <li class="link">
                <Link to="./match/5">Match Details</Link>
              </li>
            </ul>
          </div>
          <div class="login_btn_div">
            <button class="login_btn">Login</button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
