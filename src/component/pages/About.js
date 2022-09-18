import React, { useEffect, useState } from "react";
import Datas from "../datas/About";
import ModalsImg from "../modals/ModalsImg";

function About() {
  const [datas, setDatas] = useState({});
  const [loading, setLoading] = useState(true);
  const [clickImg, setClickImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    setDatas(Datas);
    setLoading(false);
  }, []);

  const handleClick = (data, index) => {
    setCurrentIndex(index);
    setClickImg(data.img);
  };

  const handleRotationRight = () => {
    const totalLength = datas.dataCertificates.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = datas.dataCertificates[0].img;
      setClickImg(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;
    const newUrl = datas.dataCertificates.filter((data) => {
      return datas.dataCertificates.indexOf(data) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = datas.dataCertificates.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = datas.dataCertificates[totalLength - 1].img;
      setClickImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = datas.dataCertificates.filter((data) => {
      return datas.dataCertificates.indexOf(data) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container">
      <div className="py-3">
        <h1 className="text-4xl text-center lg:text-start uppercase font-black text-dark tracking-wider">
          About
        </h1>
        <span className="block border border-b-dark w-1/3 lg:w-1/6 mx-auto lg:mx-0"></span>
        <div className="lg:flex">
          <div className="py-6 lg:self-center lg:mt-10 lg:w-[40%]">
            <p className="text-lg text-dark text-center lg:text-start p-0 lg:p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quis eligendi nesciunt, ipsam maiores tempora
              praesentium magnam harum earum cupiditate.
            </p>
          </div>
          <div className="mt-10 lg:w-[60%]">
            <div>
              <h1 className="text-xl text-dark font-bold tracking-wider">
                Skills
              </h1>
              <span className="block border border-b-dark w-1/4 lg:w-[10%]"></span>
              <div className="flex flex-wrap justify-start mt-5 px-6 gap-2">
                {loading ? (
                  <span>Loading data....</span>
                ) : (
                  datas?.dataSkills.map((data, index) => {
                    return (
                      <div key={index} className="skill">
                        <i
                          className={data.icon + " colored text-[70px]"}
                          title={data.title}
                        ></i>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-xl text-dark font-bold tracking-wider">
              Certificates
            </h1>
            <span className="block border border-b-dark w-1/2 lg:w-[14%]"></span>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 px-6 gap-4 p-3">
              {loading ? (
                <span>Loading data....</span>
              ) : (
                datas?.dataCertificates.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="h-48 shadow-lg w-full border border-transparent rounded-lg overflow-hidden group relative hover:scale-95 hover:shadow-2xl hover:cursor-pointer transition-all duration-500 lg:h-56"
                      onClick={() => handleClick(data, index)}
                    >
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-full h-full object-fill group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {clickImg && (
        <ModalsImg
          clickImg={clickImg}
          handleRotationRight={handleRotationRight}
          handleRotationLeft={handleRotationLeft}
          setClickImg={setClickImg}
        />
      )}
    </div>
  );
}

export default About;
