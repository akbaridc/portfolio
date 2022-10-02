import { projects } from "../datas/Project";
import InfoScroll from "../button/InfoScroll";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    document.title = "Portfolio - Projek";
  }, []);

  const CheckSource = (props) => {
    if (props.datas.link !== null) {
      return (
        <a
          href={props.datas.link}
          target="_BLANK"
          rel="noreferrer"
          className="text-md flex flex-wrap gap-1 text-primary py-1"
        >
          {props.datas.icon} {props.datas.name}
        </a>
      );
    }
  };
  return (
    <div className="container lg:flex">
      <InfoScroll />

      <div className="py-3 lg:w-[30%] lg:self-center">
        <h1 className="text-4xl text-center lg:text-start uppercase font-black text-dark tracking-wider">
          Projek
        </h1>
        <span className="block border border-b-dark w-1/3 lg:w-44 mx-auto lg:mx-0"></span>
      </div>

      <div className="w-full lg:max-h-[33rem] lg:overflow-y-scroll lg:scroll-smooth no-scrollbar py-4 mt-7">
        <div className="container px-3 lg:px-4 sm:flex sm:flex-wrap sm:gap-6 lg:m-5 md:justify-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="no-underline rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-1/2 md:w-64 lg:w-72 bg-dark hover:shadow-3xl hover:scale-105 group hover:relative"
            >
              <img
                src={item.image[0].source}
                alt="img-caption"
                className="w-full object-fill max-h-56 h-56 rounded-b-lg"
              />
              <div className="pl-6 pr-3 py-4 text-slate-200">
                <div className="font-extrabold text-xl mb-2 text-primary">
                  {item.name}
                </div>
                <p className="text-base text-start tracking-normal lg:text-sm sm:text-sm">
                  {/* {item.description.slice(0, 70) + " ... "} */}
                  {item.description}
                  <br />
                  <div className="flex flex-wrap gap-5">
                    {item.sources.map((source, sourceIdx) => (
                      <CheckSource key={sourceIdx} datas={source} />
                    ))}
                  </div>
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  {item.stack.map((value, idx) => (
                    <span
                      key={idx}
                      className={`py-1 px-2 rounded-lg text-sm self-center lg:text-xs lg:tracking-widest sm:text-xs sm:tracking-widest ${value.color}`}
                    >
                      <i className={`${value.icon} text-sm text-white`}></i>{" "}
                      {value.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
