import React from "react";
import { Rules } from "./Rules";
import catastrophic from "../../assets/catastrophic.png";
import frog from "../../assets/FrogMerchantbig.jpg";
import chest from "../../assets/Chest.png";
import coin from "../../assets/Coin.png";

export const Catastrophic = () => {
  return (
    <div className="wide:w-2/3  bg-white text-black flex flex-col">
      <img src={catastrophic} className="m-auto pb-4" />
      <h2 className="py-4 hidden">Catastrophic Failure</h2>
      <img
        src={chest}
        className="w-1/2 laptop:w-1/4 m-auto rounded-full"
        alt="A pixelart chest."
      />

      <p className="w-1/2 m-auto">
        {" "}
        Catastrophic Failure is an upcoming RPG by me and my friends. The basic
        premise being that you get to do pretty much everything, but the
        consequences might be dire.
      </p>

      <p className="w-1/2 m-auto">Check back soon for more!</p>
      <img
        src={coin}
        className="w-1/2 laptop:w-1/4 m-auto rounded-full"
        alt="A pixelart frog with blue sky."
      />
      {/* <Rules /> */}
    </div>
  );
};
