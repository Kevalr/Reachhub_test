import React, { useEffect, useState } from "react";
import PlayerChart from "./playerChart"; // Assuming this is the correct import path
import { useParams } from "react-router-dom";
import Loader from "./common/Loader";
import { data } from "../constants/playersData";

const PlayerState = () => {
  const PlayerList = data.PlayerData;
  const { id } = useParams();
  const [playerData, setPlayerData] = useState({});

  useEffect(() => {
    const player = PlayerList.find((item) => item.id == id);

    setPlayerData({
      name: player.playername,
      country: player.country,
      rating: player.playerrating,
      since: player.since,
      rankhistory: player.rankHistory,
    });
  }, [id]);

  if (!playerData.rankhistory) return <Loader />;

  return (
    <div className="w-full mx-auto bg-white rounded-md overflow-hidden shadow-lg mt-8 flex">
      <PlayerChart rankhistory={playerData.rankhistory} />
      <div className="p-6 border-l -2 border-black mx-auto my-auto">
        <h2 className="text-2xl font-bold mb-2" id="playerName">
          {playerData.name}
        </h2>
        <p className="text-gray-600" id="playerCountry">
          Country: {playerData.country}
        </p>
        <p className="text-gray-600" id="playerRating">
          Rating: {playerData.rating}
        </p>
        <p className="text-gray-600" id="playingSince">
          Playing Since: {playerData.since}
        </p>
      </div>
    </div>
  );
};

export default PlayerState;
