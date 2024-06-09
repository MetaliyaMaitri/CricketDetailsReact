import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Matches from "./Matches";

export default function FacultyAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://6321dfbdfd698dfa29016942.mockapi.io/matchresult" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>Enter Team1Name</td>
          <td>:</td>
          <td>
            <input
              value={data.Team1Name}
              onChange={(e) => {
                setData({ ...data, Team1Name: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Team2Name</td>
          <td>:</td>
          <td>
            <input
              value={data.Team2Name}
              onChange={(e) => {
                setData({ ...data, Team2Name: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter WinnerName</td>
          <td>:</td>
          <td>
            <input
              value={data.WinnerName}
              onChange={(e) => {
                setData({ ...data, WinnerName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Enter MatchDate</td>
          <td>:</td>
          <td>
            <input
              value={data.MatchDate}
              onChange={(e) => {
                setData({ ...data, MatchDate: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Team1Image</td>
          <td>:</td>
          <td>
            <input
              value={data.Team1Image}
              onChange={(e) => {
                setData({ ...data, Team1Image: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Team2Image</td>
          <td>:</td>
          <td>
            <input
              value={data.Team2Image}
              onChange={(e) => {
                setData({ ...data, Team2Image: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <button
              onClick={() => {
                if (params.id > 0) {
                } else {
                  fetch(
                    "https://6321dfbdfd698dfa29016942.mockapi.io/matchresult/:id" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/matches");
                  });
                }
                fetch(
                  "https://6321dfbdfd698dfa29016942.mockapi.io/matchresult",
                  {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }
                ).then(() => {
                  navigate("/matches");
                });
              }}
            >
              {params.id > 0 && "Edit"}
              {!(params.id > 0) && "Add"}
              MatchTeam
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
