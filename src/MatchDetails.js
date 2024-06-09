import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MatchDetails() {
  let params = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState({});
  useEffect(() => {
    fetch(
      "https://6321dfbdfd698dfa29016942.mockapi.io/matchresult/" + params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMatch(res);
      });
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>Team1Name</td>
          <td>{match.Team1Name}</td>
        </tr>
        <tr>
          <td>Team2Name</td>
          <td>{match.Team2Name}</td>
        </tr>

        <tr>
          <td>MatchDate</td>
          <td>{match.MatchDate}</td>
        </tr>
        <tr>
          <tr>
            <td>Team1Image</td>
          </tr>
          <td style={{ width: "50%" }}>
            <br />
            <img src={match.Team1Image} />
          </td>

          <tr>
            <center>
              {" "}
              <td>Team2Image</td>
            </center>
          </tr>
          <td style={{ width: "50%" }}>
            <img src={match.Team2Image} />
          </td>
        </tr>
        <tr>
          <td>
            <td>
              WinnerName:
              {match.WinnerName}
            </td>
          </td>
        </tr>

        <tr>
          <td>
            <button
              onClick={() => {
                fetch(
                  "https://6321dfbdfd698dfa29016942.mockapi.io/matchresult/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/matches");
                });
              }}
            >
              Delete
            </button>
          </td>

          <td>
            <button
              onClick={() => {
                navigate("/match/edit/" + params.id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
export default MatchDetails;
