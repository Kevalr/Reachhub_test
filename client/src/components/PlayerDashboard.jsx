import React from "react";
import { Link } from "react-router-dom";
import Loader from "../components/common/Loader";
import { useNavigate } from "react-router-dom";
import {  useGetTop50PlayersList } from "../hooks/lichessTask";
import { data } from "../constants/playersData";

const PlayerDashboard = () => {
  const navigate = useNavigate();
  // const { data: playersList, isLoading } = useGetTop50PlayersList();

   const PlayerData = data.PlayerData;

  // playersList && console.log(playersList);
  // if (isLoading) return <Loader />;

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
                    key={item.id}
                    onClick={() => navigate(`/playerstats/${item.id}`)}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-400"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 cursor-pointer text-blue-700">
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
