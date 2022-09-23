import { useState } from "react";
import { projects } from "../datas/Project";
import ModalsDetailProject from "../modals/ModalsDetailProject";

const Project = () => {
  const [detailProject, setDetailProject] = useState(null);

  const handleClick = (data) => {
    setDetailProject(data);
  };

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
              <img
                onClick={() => handleClick(item)}
                src={item.image[0].source}
                alt="img-caption"
                className="w-full object-fill max-h-56 h-56 rounded-b-lg cursor-pointer"
              />
              <div className="pl-6 pr-3 py-4 text-slate-200">
                <div className="font-extrabold text-xl mb-2 text-primary">
                  {item.name}
                </div>
                <p className="text-base text-start tracking-normal lg:text-sm sm:text-sm">
                  {item.description.slice(0, 70) + " ... "}
                  <span
                    onClick={() => handleClick(item)}
                    className="inline-block text-primary cursor-pointer"
                  >
                    Read More
                  </span>
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
      {detailProject && (
        <ModalsDetailProject
          detailProject={detailProject}
          setDetailProject={setDetailProject}
        />
      )}
    </div>
  );
};

export default Project;
