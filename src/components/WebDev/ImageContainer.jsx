import { useState, useEffect } from "react";

export const ImageContainer = ({ image, text, heading, content }) => {
  const [overlay, setOverlay] = useState(false);
  const bgImg = image;

  console.log;
  useEffect(() => {
    if (content) {
      setOverlay(true);
    } else {
      setOverlay(false);
    }
  }, [content]);

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover h-60"
    >
      {overlay ? (
        <div className="bg-[rgba(0,0,0,0.8)] text-platinum h-full w-full flex flex-col text-center justify-center p-6 tablet:px-20 gap-2">
          <div className="tablet:w-2/3 desktop:w-1/2 self-center">
            {heading ? <h2>{heading}</h2> : null}
            {text ? <p>{text}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
