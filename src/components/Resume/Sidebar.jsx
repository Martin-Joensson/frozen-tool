import React from "react";
import { Skills } from "./Skills";
import { Personal } from "./Personal";

export const Sidebar = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" bg-amber-300 flex flex-col bg-center h-full p-4"
    >
      <h2>Martin Jönsson</h2>
      <p>Frontend Developer</p>
      <Personal />
      <Skills />
    </div>
  );
};
