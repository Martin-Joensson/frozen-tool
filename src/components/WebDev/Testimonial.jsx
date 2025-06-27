import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const sideImg =
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-purple-300 w-full flex justify-between bg-cover"
    >
      <img src={sideImg} className="object-cover w-2/5 hidden tablet:block" />
      <div className="flex flex-col m-10 gap-2 z-20 w-full tablet:w-1/2 tablet:justify-right border rounded-lg p-10 justify-center">
        <h2>What are others saying about us</h2>
        <TestimonialCard
          text='"It was easy working with Martin!"'
          face="1"
          rating={4}
        />
        <TestimonialCard
          text='"The new site is our link to our members."'
          face="3"
          rating={4.5}
        />
        <TestimonialCard
          text='"Timely delivery and well executed from our specs. Would hire again."'
          face="2"
          rating={5}
        />
      </div>
    </div>
  );
};
