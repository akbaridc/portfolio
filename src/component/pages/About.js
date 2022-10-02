import React, { useEffect, useState } from "react";
import { dataSkills, dataCertificates } from "../datas/About";
import ModalsImg from "../modals/ModalsImg";

function About() {
  useEffect(() => {
    document.title = "Portfolio - Tentang";
  }, []);

  const [clickImg, setClickImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (data, index) => {
    setCurrentIndex(index);
    setClickImg(data.img);
  };

  const handleRotationRight = () => {
    const totalLength = dataCertificates.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = dataCertificates[0].img;
      setClickImg(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;
    const newUrl = dataCertificates.filter((data) => {
      return dataCertificates.indexOf(data) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = dataCertificates.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = dataCertificates[totalLength - 1].img;
      setClickImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = dataCertificates.filter((data) => {
      return dataCertificates.indexOf(data) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container">
      <div className="py-3">
        <h1 className="text-4xl text-center lg:text-start uppercase font-black text-dark tracking-wider">
          Tentang
        </h1>
        <span className="block border border-b-dark w-1/3 lg:w-1/6 mx-auto lg:mx-0"></span>
        <div className="lg:flex">
          <div className="py-6 lg:self-center lg:mt-10 lg:w-[40%]">
            <p className="text-lg text-dark text-center lg:text-start p-0 lg:p-3">
              Halo, Saya seorang Web Developer yang memiliki pengalaman
              menggunakan teknologi PHP Native, Codeigniter, Vanilla Javascript,
              Jquery Bootstrap. Saya dapat menggunakan Framework Lain seperti
              ReactJs, Tailwind dan Laravel Meskipun tidak expert atau dibilang
              basic, saat ini saya sedang mempelajari dan memperdalam framework
              atau teknologi seperti ReactJs, Laravel dan NodeJs
            </p>
          </div>
          <div className="mt-10 lg:w-[60%]">
            <div>
              <h1 className="text-xl text-dark font-bold tracking-wider">
                Skill
              </h1>
              <span className="block border border-b-dark w-1/4 lg:w-[8%]"></span>
              <div className="flex flex-wrap justify-start mt-5 px-6 gap-2">
                {dataSkills.map((data, index) => {
                  return (
                    <div key={index} className="skill">
                      <i
                        className={data.icon + " colored text-[70px]"}
                        title={data.title}
                      ></i>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-xl text-dark font-bold tracking-wider">
              Sertifikat
            </h1>
            <span className="block border border-b-dark w-1/2 lg:w-[10%]"></span>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 px-6 gap-4 p-3">
              {dataCertificates.map((data, index) => {
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
              })}
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
