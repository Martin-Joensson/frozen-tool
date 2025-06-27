import React from "react";
import { Work } from "./Work";
import { Education } from "./Education";
import { Sidebar } from "./Sidebar";
import { Bio } from "./Bio";

export const Resume = () => {
  return (
    <div className="flex w-full justify-between">
      {/* Sidebar */}
      {/* <div className="w-1/4">
        <Sidebar />
      </div> */}

      {/* Main Content */}
      <div className="bg-slate-600 w-full">
        {/* <Bio />
        <Work />
        <Education /> */}
        <iframe
          src="https://portfolio.raglancreation.com"
          className="w-full min-h-full scroll-auto scrollbar-hidden"
        ></iframe>
      </div>
    </div>
  );
};
