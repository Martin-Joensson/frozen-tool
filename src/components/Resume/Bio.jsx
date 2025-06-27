import React from "react";

export const Bio = () => {
  const phone = "+46 73 909 1199";
    const title = "Front End Developer";
    const linkedIn = ""

  return (
    <div className="w-3/4 tablet:w-1/2 border-2 bg-amber-400">
      Bio
      <h2>Martin Jönsson</h2>
      <div className="subtitle flex gap-4">
        <a className="" href="tel: +46739091199">
          {phone}
        </a>
        <h3 className="subtitle text-gray-800">{title.toUpperCase()}</h3>
      </div>
    </div>
  );
};
