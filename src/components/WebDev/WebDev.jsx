import React from "react";
import { Hero } from "./Hero";
import { Testimonial } from "./Testimonial";
import { Location } from "./Location";
import { ImageContainer } from "./ImageContainer";

export const WebDev = () => {
  return (
    <div className="wide:w-2/3 wide:m-auto">
      <Hero />
      <ImageContainer
        content={true}
        heading="No project is too big or too small"
        text="We will help you get noticed on the web."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Testimonial />
      <Location />
    </div>
  );
};
