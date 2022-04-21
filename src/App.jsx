import "./App.css";
import React, { useState, useEffect } from "react";

import SwipePlayers from "./components/swipePlayers";
import PlayerList from "./components/playerList";

const App = () => {
  const [playerData, setPlayerData] = useState([]);
  let LOCALTEAM_ONE = [
    "Mayank Agarwal",
    "Liam Livingstone",
    "Kagiso Rabada",
    "Shahrukh Khan",
    "Shikhar Dhawan",
    "jonny Bairstow",
    "Odean Smith",
    "Rahul Chahar",
    "Rohit Sharma",
    "Virat kohil",
  ];

  let LOCALTEAM_TWO = [
    "Arshdeep Singh",
    "Harpreet Brar",
    "Suresh Rani",
    "Steven Smith",
    "Zaheer Khan",
    "Virender Shewag",
    "Ronin Singh",
    "David Warner",
    "Ben Stokes",
    "Eion Morgan",
  ];

  let LOCALTEAM_THREE = [
    "Prabhismran Singh",
    "Sandeep Sharma",
    "Ishan Porel",
    "M S Dhoni",
    "Umesh Yadav",
    "Hardik Pandey",
    "Krunal Pandey",
    "Rahul Tripati",
    "Deepak Chahar",
    "Shradul Thakur",
  ];

  useEffect(() => {
    let newPlayerData = [];
    for (let i in LOCALTEAM_ONE)
      newPlayerData.push({ playerName: LOCALTEAM_ONE[i], team: "One" });
    for (let i in LOCALTEAM_TWO)
      newPlayerData.push({ playerName: LOCALTEAM_TWO[i], team: "Two" });
    for (let i in LOCALTEAM_THREE)
      newPlayerData.push({ playerName: LOCALTEAM_THREE[i], team: "Three" });
    setPlayerData(newPlayerData);
  }, []);

  const onSaveTeams = ({ teamOneClone, teamTwoClone, teamThreeClone }) => {
    if (
      teamOneClone.length === 10 &&
      teamTwoClone.length === 10 &&
      teamThreeClone.length === 10
    ) {
      let newPlayerData = [];
      for (let i in teamOneClone)
        newPlayerData.push({ playerName: teamOneClone[i], team: "One" });
      for (let i in teamTwoClone)
        newPlayerData.push({ playerName: teamTwoClone[i], team: "Two" });
      for (let i in teamThreeClone)
        newPlayerData.push({ playerName: teamThreeClone[i], team: "Three" });

      setPlayerData(newPlayerData);
    } else alert("Each Team Should Consist 10  members");
  };

  return (
    <div className="p-5">
      <SwipePlayers
        onSaveTeams={onSaveTeams}
        LOCALTEAM_ONE={LOCALTEAM_ONE}
        LOCALTEAM_TWO={LOCALTEAM_TWO}
        LOCALTEAM_THREE={LOCALTEAM_THREE}
      />
      <hr></hr>
      <PlayerList
        playerData={playerData.sort((a, b) =>
          a.playerName.localeCompare(b.playerName)
        )}
      />
    </div>
  );
};

export default App;
