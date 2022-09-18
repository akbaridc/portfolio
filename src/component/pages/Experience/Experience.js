import React, { useEffect, useState } from "react";
import Datas from "../../datas/Experience";
import Card from "./Card";

const Experience = () => {
  const [datas, setDatas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDatas(Datas);
    setLoading(false);
  }, []);

  return (
    <div className="container lg:flex">
      <div className="py-3 lg:w-[30%] lg:self-center">
        <h1 className="text-4xl text-center lg:text-start uppercase font-black text-dark tracking-wider">
          Experience
        </h1>
        <span className="block border border-b-dark w-1/3 lg:w-72 mx-auto lg:mx-0"></span>
      </div>
      <div className="lg:w-[78%] lg:max-h-[33rem] lg:overflow-y-scroll lg:scroll-smooth no-scrollbar">
        <div className="relative container mx-auto px-2 flex flex-col space-y-8 lg:my-5">
          <div className="absolute z-0 w-1 h-[calc(100vh - 20px)] mt-8 bg-white shadow-md inset-0 left-17 hidden lg:mx-auto lg:right-0 lg:left-0 lg:block "></div>

          {loading ? (
            <span>Loading data....</span>
          ) : (
            datas?.data.map((data, index) => {
              if (index % 2 === 0) {
                //sebelah kanan
                return (
                  <div key={index}>
                    <Card data={data} index={index} type={"right"} />
                  </div>
                );
              } else {
                //sebelah kiri
                return (
                  <div key={index}>
                    <Card data={data} index={index} type={"left"} />
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
