import React, { useState, useEffect } from "react";
const PlayerList = ({ playerData }) => {
  const [localPlayerData, setLocalPlayerData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    setLocalPlayerData(playerData);
  }, [playerData]);

  useEffect(() => {
    let newData = [];
    if (searchData) {
      newData = playerData.filter((player) =>
        player.playerName.toLowerCase().includes(searchData.toLowerCase())
      );
    } else {
      newData = playerData;
    }
    setLocalPlayerData(newData);
  }, [searchData]);

  return (
    <div className="container p-1">
      <header className="text-center">
        <h4 className="font-weight-bold">PLAYER LIST</h4>
        <hr />
      </header>

      <div className="row">
        <div className="form-group col-3">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search Player..."
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
      </div>

      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {localPlayerData.map((player) => (
            <tr key={player.playerName}>
              <td>{player.playerName}</td>
              <td>{player.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
