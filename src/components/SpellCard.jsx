import { useState, useEffect } from "react";

import frostgrave from "../assets/frostgrave.json";
import { checkSchool } from "./checkSchool";

export const SpellCard = ({ spell }) => {
  const [openDescription, setOpenDescription] = useState(false);

  const handleOpenDecription = () => {
    setOpenDescription(!openDescription);
  };

  return (
    <div className="bg-blue-100 text-black rounded-3xl flex flex-col">
      <div className="Statline flex flex-col">
        <div className="flex justify-between">
          <div className="p-2 text-2xl">
            <p>{spell.name}</p>
            <hr></hr>
            <p className="text-lg"> {checkSchool(spell.school)}</p>
          </div>
          <div className="bg-blue-500 rounded-bl-2xl rounded-tr-2xl font-black text-3xl text-white w-20 text-center content-center">
            {spell.targetNumber}
          </div>
        </div>
        <div onClick={handleOpenDecription} className="cursor-pointer">
          <div>
            <div className="w-full bg-blue-200 text-center flex relative justify-center cursor-pointer">
              <p>{spell.type}</p>
              <div className="absolute right-1 text-4xl ">
                {openDescription ? <p>&#710;</p> : <span>&#711;</span>}
              </div>
            </div>
          </div>

          {openDescription ? (
            <div className="Description  p-2">
              <p> {spell.description} </p>
            </div>
          ) : null}
          <div className="h-8 bg-blue-100 rounded-b-2xl text-center text-blue-300 cursor-pointer">
            Description
          </div>
        </div>
      </div>
    </div>
  );
};
