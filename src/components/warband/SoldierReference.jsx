import frostgrave from "../../assets/frostgrave.json";
import { SoldierCard } from "./SoldierCard";

export const SoldierReference = () => {


  return (
      <div>
          <h2 className="text-center m-4 font-heading">The types of soldiers in Frostgrave</h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2">
        {frostgrave.soldiers.map((item, index) => (
          <div key={index}>
            <SoldierCard soldier={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
