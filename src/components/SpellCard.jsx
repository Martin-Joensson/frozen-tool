import { useState } from "react";

import frostgrave from "../assets/frostgrave.json";

export const SpellCard = () => {
  const [openDescription, setOpenDescription] = useState(true);

  let spellIndex = 14;

  const handleOpenDecription = () => {
    console.log("openingen");

    setOpenDescription(!openDescription);
  };

  console.log(frostgrave);
  return (
    <div className="bg-blue-100 text-black border-2 border-blue-500 rounded-3xl  flex flex-col">
      <div className="Statline flex flex-col">
        <div className="flex justify-between">
          <div className="p-2 text-2xl">
            {frostgrave.spells[spellIndex].name}
          </div>
          <div className="bg-blue-500 rounded-bl-2xl rounded-tr-2xl font-black text-xl w-20 p-2 text-center content-center">
            {frostgrave.spells[spellIndex].targetNumber}
          </div>
        </div>
        <div className="w-full bg-blue-200 text-center flex relative justify-center">
          <p>{frostgrave.spells[spellIndex].type}</p>
          <div className="absolute right-1" onClick={handleOpenDecription}>
            {openDescription ? <p>&#11032;</p> : <span>&#11033;</span>}
          </div>
        </div>
      </div>

      {openDescription ? (
        <div className="Description  p-2">
          <p> {frostgrave.spells[spellIndex].description} </p>
        </div>
          ) : null}
          <div className="h-8 bg-blue-200 rounded-b-2xl text-center text-blue-300">Description</div>
    </div>
  );
};
