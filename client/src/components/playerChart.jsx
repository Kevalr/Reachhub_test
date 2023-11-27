import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function PlayerChart({ rankhistory }) {
  console.log(rankhistory);
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Create a dictionary to store the latest entry for each unique time
  const latestEntries = {};
  rankhistory.forEach((entry) => {
    // Filter entries where rank is greater than 100 and time is in four digits and not exceeding the current year
    if (entry.rank > 100 && entry.time >= 1000 && entry.time <= currentYear) {
      latestEntries[entry.time] = entry;
    }
  });

  // Convert the dictionary values to an array
  const filteredRankHistory = Object.values(latestEntries);

  // Format time as years
  const formattedRankHistory = filteredRankHistory.map((entry) => ({
    ...entry,
    time: entry.time,
  }));

  return (
    <LineChart width={500} height={300} data={formattedRankHistory}>
      <XAxis dataKey="time" />
      <YAxis dataKey="rank" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="rank" stroke="#8884d8" />
    </LineChart>
  );
}
