import React, { useEffect, useState } from 'react';
import PlayerChart from './playerChart'; // Assuming this is the correct import path
import { useParams } from 'react-router-dom';

const PlayerState = () => {
  // Get the "item" object from URL parameters
  const { playername, playerrating, country, since, rankHistory, index } = useParams();

  // State to hold player data
  const [playerData, setPlayerData] = useState({
    name: playername || 'Unknown',
    country: country || 'Unknown',
    rating: playerrating || 0,
    since: since || 0,
    rankhistory: Array.isArray(rankHistory) ? rankHistory : [], // Assuming this is a default value
  });

  // Effect to update player data on component mount (you can fetch data here if needed)
  useEffect(() => {
    // For simplicity, you can fetch data here if needed
    // Fetching logic should go here, update setPlayerData accordingly
    // You might want to make an API call to fetch the player's data
  }, [playername, playerrating, country, since, index]);

  return (
    <div className="w-full mx-auto bg-white rounded-md overflow-hidden shadow-lg mt-8 flex">
      <PlayerChart rankHistory={playerData.rankhistory} />
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
