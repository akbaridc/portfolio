import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center text-center">
        <div className="w-full mt-16 lg:mt-5 self-center px-4 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-primary md:text-4xl">
            Halo{" "}
            <img
              className="inline-block"
              src="/img/hi.gif"
              alt="Hi"
              width={40}
            />
            , Saya <span className="nama-saya">Akbar Imawan</span>
            <span className="nama-saya">Dwi Cahya</span>
          </h1>
          <h2 className="font-medium text-slate-500 text-lg mb-5 mt-2 lg:text-xl">
            Fullstack Web Developer
          </h2>

          <a
            href="#d"
            className="text-base font-semibold mt-3 text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Download CV
          </a>
        </div>

        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="profile-me">
            <img src="/profile.png" alt="unsplash" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
