import { projects } from "../datas/Project";
import ReadMoreButton from "../button/ReadMoreButton"

const Project = () => {
  console.log(ReadMoreButton);
  return (
    <div className="container lg:flex">
      <div className="py-3 lg:w-[30%] lg:self-center">
        <h1 className="text-4xl text-center lg:text-start uppercase font-black text-dark tracking-wider">
          Project
        </h1>
        <span className="block border border-b-dark w-1/3 lg:w-48 mx-auto lg:mx-0"></span>
      </div>

      <div className="w-full lg:max-h-[33rem] lg:overflow-y-scroll lg:scroll-smooth no-scrollbar py-4 mt-7">
        <div className="container px-3 lg:px-4 sm:flex sm:flex-wrap sm:gap-6 lg:m-5 md:justify-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="no-underline rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-1/2 md:w-64 lg:w-72 bg-dark hover:shadow-3xl hover:scale-105 group hover:relative"
            >
              {/* <div className="hidden mt-3 group-hover:block group-hover:absolute group-hover:w-full group-hover:h-full group-hover:backdrop-blur-md group-hover:mt-0 group-hover:rounded-lg">
                <div className="absolute left-1/2 top-[40%] -translate-x-1/2 flex flex-col gap-5">
                  {item.sources.map((data, i) => (
                    <button
                      key={i}
                      className={`py-3 px-5 lg:py-2 lg:px-4 w-full rounded-lg hover:shadow-xl transition-all duration-300 ${data.name === "link"
                        ? "hover:border border-transparent hover:bg-white"
                        : "border-primary bg-primary hover:bg-opacity-70"
                        } ${data.link === null ? "hidden" : ""}`}
                    >
                      <a
                        href={data.link}
                        target="_BLANK"
                        rel="noreferrer"
                        className="text-xl flex font-bold tracking-wider lg:text-lg sm:text-base"
                      >
                        <span className="mr-2 mt-1">{data.icon}</span>{" "}
                        <p>{data.name}</p>
                      </a>
                    </button>
                  ))}
                </div>
              </div> */}
              <img
                src={item.img}
                alt="img-caption"
                className="w-full object-fill max-h-56 h-56 rounded-b-lg"
              />
              <div className="pl-6 pr-3 py-4 text-slate-200">
                <div className="font-extrabold text-xl mb-2 text-primary">{item.name}</div>
                <p className="text-base text-start whitespace-normal tracking-normal lg:text-sm sm:text-sm">
                  {((item.description).length > 70) ?
                    (((item.description).substring(0, 70 - 3)) + `... ${<ReadMoreButton title={'Read More'} />}`) :
                    item.description}
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
