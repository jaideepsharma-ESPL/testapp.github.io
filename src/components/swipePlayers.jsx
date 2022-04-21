import React, { useState, useEffect } from "react";

const SwipePlayers = ({
  onSaveTeams,
  LOCALTEAM_ONE,
  LOCALTEAM_TWO,
  LOCALTEAM_THREE,
}) => {
  const [teamOneClone, setTeamOneClone] = useState([]);
  const [teamTwoClone, setTeamTwoClone] = useState([]);
  const [teamThreeClone, setTeamThreeClone] = useState([]);

  useEffect(() => {
    console.log("Swipe Did Mount");
    setTeamOneClone(LOCALTEAM_ONE);
    setTeamTwoClone(LOCALTEAM_TWO);
    setTeamThreeClone(LOCALTEAM_THREE);
  }, []);

  const onReset = () => {
    setTeamOneClone(LOCALTEAM_ONE);
    setTeamTwoClone(LOCALTEAM_TWO);
    setTeamThreeClone(LOCALTEAM_THREE);
  };

  const onSwipeData = (type, index, data) => {
    let newData = [];
    switch (type) {
      case "C_TEAM1_TEAM2":
        if (teamTwoClone.length >= 20) {
          alert("Maximum limit reached for team two");
        } else {
          newData = [...teamTwoClone, data];
          setTeamTwoClone(newData);
          teamOneClone.splice(index, 1);
          setTeamOneClone(teamOneClone);
        }
        break;
      case "C_TEAM2_TEAM1":
        if (teamOneClone.length >= 10) {
          alert("Maximum limit reached for team One");
        } else {
          newData = [...teamOneClone, data];
          setTeamOneClone(newData);
          teamTwoClone.splice(index, 1);
          setTeamTwoClone(teamTwoClone);
        }
        break;
      case "C_TEAM2_TEAM3":
        if (teamThreeClone.length >= 10) {
          alert("Maximum limit reached for team Three");
        } else {
          newData = [...teamThreeClone, data];
          setTeamThreeClone(newData);
          teamTwoClone.splice(index, 1);
          setTeamTwoClone(teamTwoClone);
        }
        break;
      case "C_TEAM3_TEAM2":
        if (teamTwoClone.length >= 20) {
          alert("Maximum limit reached for team two");
        } else {
          newData = [...teamTwoClone, data];
          setTeamTwoClone(newData);
          teamThreeClone.splice(index, 1);
          setTeamThreeClone(teamThreeClone);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="container   p-1">
      <div className="row">
        <div className="form-group col-4">
          <div className="card">
            <div className="card-header">
              <label>
                Team One
                <span className=" m-2 badge badge-secondary">
                  {teamOneClone.length}
                </span>
              </label>
            </div>
            <div className="card-body">
              {teamOneClone?.map((team, i) => (
                <div key={i} className="card card-header">
                  <div className="row">
                    <div className="col-10">
                      <label>{team}</label>
                    </div>
                    <div className="col-2">
                      <button
                        name="btnTeamOneRightSwipe"
                        className="btn btn-sm btn-primary"
                        onClick={() => onSwipeData("C_TEAM1_TEAM2", i, team)}
                        value={team}
                      >
                        {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group col-4">
          <div className="card">
            <div className="card-header">
              <label>
                Team Two
                <span className=" m-2 badge badge-secondary">
                  {teamTwoClone.length}
                </span>
              </label>
            </div>
            <div className="card-body">
              {teamTwoClone.map((team, i) => (
                <div key={i} className="card card-header">
                  <div className="row">
                    <div className="col-2">
                      <button
                        name="btnTeamTwoLeftSwipe"
                        className="btn btn-sm btn-primary"
                        onClick={() => onSwipeData("C_TEAM2_TEAM1", i, team)}
                        value={team}
                      >
                        {"<"}
                      </button>
                    </div>

                    <div className="col-8 text-center">
                      <label>{team}</label>
                    </div>
                    <div className="col-2">
                      <button
                        name="btnTeamTwoRightSwipe"
                        className="btn btn-sm btn-primary"
                        onClick={() => onSwipeData("C_TEAM2_TEAM3", i, team)}
                        value={team}
                      >
                        {">"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group col-4">
          <div className="card">
            <div className="card-header">
              <label>
                Team Three
                <span className=" m-2 badge badge-secondary">
                  {teamThreeClone.length}
                </span>
              </label>
            </div>
            <div className="card-body">
              {teamThreeClone.map((team, i) => (
                <div key={i} className="card card-header">
                  <div className="row">
                    <div className="col-2">
                      <button
                        name="btnTeamThreeLeftSwipe"
                        className="btn btn-sm btn-primary"
                        onClick={() => onSwipeData("C_TEAM3_TEAM2", i, team)}
                        value={team}
                      >
                        {"<"}
                      </button>
                    </div>
                    <div className="col-10 text-right">
                      <label>{team}</label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="form-group col-1">
          <button
            className="btn btn-primary m-2"
            onClick={() =>
              onSaveTeams({ teamOneClone, teamTwoClone, teamThreeClone })
            }
          >
            Save
          </button>
        </div>
        <div className="form-group col-1">
          <button className="btn  btn-secondary m-2" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipePlayers;
