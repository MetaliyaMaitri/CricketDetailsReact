import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "./card.css";
function Matches() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    fetch("https://6321dfbdfd698dfa29016942.mockapi.io/matchresult/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMatches(res);
      });
  }, []);
  const formatedMatch = matches.map((mat) => {
    return (
      <>
        <Link to={"../match/" + mat.id}>
          <div class="row">
            <div class="col-2">
              <div class="card">
                <div class="image">
                  <img src={mat.Team1Image} />
                </div>
                <div class="button">
                  <button>{mat.Team1Name}</button>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="card">
                <div class="image">
                  <img src={mat.Team2Image} />
                </div>
                <div class="button">
                  <button>{mat.Team2Name}</button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  });
  return formatedMatch;
}
export default Matches;
