import React from "react";
import ProjectDetailSlick from "../slick/ProjectDetailSlick";
import { CgScrollH } from "react-icons/cg";

const ModalsDetailProject = ({ detailProject, setDetailProject }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setDetailProject(null);
    }
  };
  return (
    <>
      <div>
        <div className="fixed top-0 left-0 right-0 w-full h-full items-center z-[999] backdrop-blur-sm blurDiv">
          <h3 className="hidden lg:rotate-90 lg:absolute lg:block lg:-left-12 lg:top-1/2 text-white font-bold shadow-xs font-serif tracking-[0.3rem]">
            Scroll in Content <CgScrollH className="inline-block" />
          </h3>

          <button
            type="button"
            className="block absolute top-6 lg:top-2 right-2 lg:right-[22rem] w-10 bg-slate-300 rounded-full dismiss z-[99999]"
            onClick={handleClick}
          >
            <span className="humberger-line  rotate-45 origin-top-left ml-[9px]"></span>
            <span className="humberger-line ml-[5px] scale-0"></span>
            <span className="humberger-line -rotate-45 origin-bottom-left ml-[9px]"></span>
          </button>
          <div className="border border-transparent w-[88%] max-h-[80%] lg:max-w-3xl lg:max-h-[93%] overflow-y-scroll no-scrollbar bg-white rounded-lg absolute left-1/2 -translate-x-1/2 top-[5%] lg:top-[3%]">
            <div className="pl-3 pb-3 pr-3">
              <ProjectDetailSlick data={detailProject.image} />

              <hr className="mt-6 mb-4" />

              <div className="grid gap-2 grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
                <div>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                  <p>konten kiri</p>
                </div>
                <div>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                  <p>konten kanan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalsDetailProject;
