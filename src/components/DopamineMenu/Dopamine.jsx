import { useRef, useEffect } from "react";

export const Dopamine = () => {
  const printableRef = useRef(null);

  const categories = [
    {
      title: "Appetizers",
      text: "Quick 5-15 min tasks that get you a hit of healthy dopamine. Should be finite, no infinite doom scrolling.",
    },
    {
      title: "Mains",
      text: "Everything from 30 min to 2 hours. Should reflect things you enjoy doing but might not take the time to actually start.",
    },
    {
      title: "Desserts",
      text: "Rewards for finishing mains. These can be easy to overdo but when done last they can be guilt free pleasures. Time irrelevant since other more substantial dopamine boosts have already come before this.",
    },
    {
      title: "Specials",
      text: "For the big reset. Sometimes you need to do something big to just reset. These are those things. They might take a whole evening to complete or maybe a whole day, but that’s ok. ",
    },
    {
      title: "Sides",
      text: "Activities you can do alongside other tasks to make them more enjoyable.",
    },
  ];

  let printContents = null;
  useEffect(() => {
    printContents = printableRef.current;
  }, []);

  const printDiv = () => {
    console.log(printContents.innerHTML);

    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents.innerHTML;

    window.print();

    // document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <>
      <div
        ref={printableRef}
        className="wide:w-2/3 w-full bg-white text-black "
      >
        <div className="w-2/3 m-auto my-4 print:!hidden">
          <button className="text-light-links" onClick={printDiv}>
            Print me!
          </button>
        </div>
        <div className="text-center font-poppins flex flex-col gap-4 w-full">
          <div className="top text-center">
            <h2 className="my-2 ">Dopamine Menu</h2>
            <p className="max-w-[75ch] w-2/3 m-auto">
              Write your prefered dopamine boosters on the lines. When you feel
              yourself reaching for dopamine that you do not want, reach for
              this instead.
            </p>
          </div>
          <div className="categories w-2/3 m-auto flex flex-col gap-4">
            {categories.map((cats, index) => (
              <div key={index}>
                <h3 className="text-xl">{cats.title}</h3>
                <p className="print:!hidden text-gray-500">{cats.text}</p>
                <ul className="font-sans">
                  <hr className="my-6"></hr>
                  <hr className="my-6"></hr>
                  <hr className="my-6"></hr>
                  <hr className="my-6"></hr>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
