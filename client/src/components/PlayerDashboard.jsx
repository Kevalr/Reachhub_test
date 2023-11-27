import React from "react";
import { Link } from "react-router-dom";
import Loader from "../components/common/Loader";
import { useNavigate } from "react-router-dom";
import {  useGetTop50PlayersList } from "../hooks/lichessTask";

const PlayerDashboard = () => {
  const navigate = useNavigate();
  const { data: playersList, isLoading } = useGetTop50PlayersList();

   const PlayerData = [
    { playername: "Vatsal", playerrating: 100,country:"india",since:2002, rankHistory: [
        { time: 2001, rank: 2000 },
        { time: 2002, rank: 2050 },
        { time: 2003, rank: 2100 },
        { time: 2005, rank: 2500 },
        { time: 2008, rank: 2648 },
        { time: 2023, rank: 2847 },
        { time: 2023, rank: 99 },
        { time: 2023, rank: 2850 },
        { time: 2024, rank: 2847 },
      ],
    },

    { playername: "Keval", playerrating: 2000, country:"india",since:2002, rankHistory: [
        { time: 2001, rank: 2000 },
        { time: 2002, rank: 2050 },
        { time: 2003, rank: 2100 },
        { time: 2005, rank: 2500 },
        { time: 2008, rank: 2648 },
        { time: 2023, rank: 2847 },
        { time: 2023, rank: 99 },
        { time: 2023, rank: 2850 },
        { time: 2024, rank: 2847 },
      ],
     },
    // Add more dummy data as needed
  ];

  
  playersList && console.log(playersList , "====== test =====");
  if (isLoading) return <Loader />;

  if (!PlayerData) return;

  return (
    <div>
      <div className="flex justify-between items-center pb-3">
        <h2 className="text-2xl text pl-4 font-bold">Players</h2>
      
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Player
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Rating
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  {PlayerData.map((item, index) => (
                    // <Link to={`/playerstats/${item}}`} key={index}>
                    
                    <tr 
                    //   key={student._id}
                    onClick={() => navigate(`/playerstats/${item.playername}/${item.playerrating}/${item.country}/${item.since}/${item.rankHistory}/${index}`)}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-400"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                      {item.playername}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                      {item.playerrating}
                      </td>
                     
                    </tr>
                    
                    // </Link>
                   
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;
