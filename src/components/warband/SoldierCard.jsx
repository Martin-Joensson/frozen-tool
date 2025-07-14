import { useState, useEffect } from "react";
import {
  Sword,
  BowAndArrow,
  Coins,
  Brain,
  WalkingBoot,
  Heart,
  Shield,
} from "../icons/Icons.jsx";

export const SoldierCard = ({ soldier }) => {
  const checkCost = (cost) => {
    if (cost === 0) {
      return "free";
    } else {
      return cost;
    }
  };

  return (
    <div className="bg-gray-100 text-black rounded-3xl flex flex-col">
      <div className="flex justify-between">
        <div className="p-2 text-2xl">
          <p>{soldier.name}</p>
          <hr></hr>
          <p className="text-lg"> {soldier.type}</p>
        </div>
        <div className="bg-gray-500 rounded-bl-2xl min-w-16 rounded-tr-2xl p-2 font-black text-3xl text-white text-center flex flex-col items-center">
          <span>
            <Heart />
          </span>
          <span>{soldier.health}</span>
        </div>
      </div>
      <div className="Statline flex flex-col">
        <div className="flex justify-center text-2xl">
          <div className="flex flex-col items-center border-2 rounded-xl m-2 p-2">
            <p>
              <WalkingBoot />
            </p>{" "}
            <p> {soldier.move}</p>
          </div>
          <div className="Offence flex border-2 rounded-xl m-2 p-2">
            <div className="flex flex-col items-center border-r-2 px-2">
              <p>
                <Sword />
              </p>
              <p> {soldier.fight}</p>
            </div>

            <div className="flex flex-col items-center px-2">
              <p>
                <BowAndArrow />
              </p>
              <p> {soldier.shoot}</p>
            </div>
          </div>
          <div className="Defence flex border-2 rounded-xl m-2 p-2">
            <div className="flex flex-col items-center border-r-2 px-2">
              <p>
                <Shield />
              </p>
              <p> {soldier.armour}</p>
            </div>
            <div className="flex flex-col items-center px-2">
              <p>
                <Brain />
              </p>
              <p> {soldier.will}</p>
            </div>
          </div>
        </div>
        <div className="p-2"> Gear: {soldier.gear} </div>
        {soldier.notes ? <div> Notes: {soldier.notes} </div> : null}
      </div>
      <div className="p-2 bg-gray-200 rounded-b-2xl  text-amber-600 flex gap-2 items-center justify-center">
        <p>
          <Coins />
        </p>
        <p> {checkCost(soldier.cost)} gold</p>
      </div>
    </div>
  );
};
