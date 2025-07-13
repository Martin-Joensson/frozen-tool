import frostgrave from "../../assets/frostgrave.json";
import { SoldierCard } from "./SoldierCard";

export const SoldierReference = () => {


  return (
    <div>
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
