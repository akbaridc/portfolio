import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const clickHandleWhatsapp = () => {
    window.open("https://wa.me/6283111693720", "_blank");
  };

  const clickHandleLinkedin = () => {
    window.open("https://www.linkedin.com/in/akbaridc/", "_blank");
  };

  const clickHandleInstagram = () => {
    window.open("https://www.instagram.com/akbaridc_/", "_blank");
  };

  const clickHandleFacebook = () => {
    window.open("https://www.facebook.com/rt4rw6/", "_blank");
  };
  return (
    <div>
      <div className="container">
        <div className="py-3 mt-10">
          <h1 className="text-4xl text-center uppercase font-black text-dark tracking-wider">
            Contact Me in
          </h1>
          <span className="block border border-b-dark w-1/3 lg:w-72 mx-auto"></span>
        </div>
        <div className="container mt-12 flex flex-wrap gap-4 lg:justify-center lg:px-32 lg:py-10 lg:gap-16 lg:mt-8">
          <div
            className="w-full max-h-32 border border-green-600 hover:border-transparent py-6 px-4 rounded-2xl shadow-lg relative hover:bg-green-400 hover:shadow-2xl hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer group lg:w-1/3"
            onClick={clickHandleWhatsapp}
          >
            <div className="flex">
              <div className="w-1/3">
                <FaWhatsapp className="w-full h-16 text-green-600 group-hover:text-white transition-all duration-500 ease-in-out" />
              </div>
              <p className="self-center px-3 text-3xl font-bold text-green-600 tracking-wider group-hover:text-white transition-all duration-500 ease-in-out">
                Whatsapp
              </p>
            </div>
          </div>

          <div
            className="w-full max-h-32 border border-blue-600 hover:border-transparent py-6 px-4 rounded-2xl shadow-lg relative hover:bg-blue-400 hover:shadow-2xl hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer group lg:w-1/3"
            onClick={clickHandleLinkedin}
          >
            <div className="flex">
              <div className="w-1/3">
                <FaLinkedin className="w-full h-16 text-blue-600 group-hover:text-white transition-all duration-500 ease-in-out" />
              </div>
              <p className="self-center px-3 text-3xl font-bold text-blue-600 tracking-wider group-hover:text-white transition-all duration-500 ease-in-out">
                Linkedin
              </p>
            </div>
          </div>

          <div
            className="w-full max-h-32 border border-pink-600 hover:border-transparent py-6 px-4 rounded-2xl shadow-lg relative hover:bg-rose-400 hover:shadow-2xl hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer group lg:w-1/3"
            onClick={clickHandleInstagram}
          >
            <div className="flex">
              <div className="w-1/3">
                <FaInstagram className="w-full h-16 text-pink-600 group-hover:text-white transition-all duration-500 ease-in-out" />
              </div>
              <p className="self-center px-3 text-3xl font-bold text-pink-600 tracking-wider group-hover:text-white transition-all duration-500 ease-in-out">
                Instagram
              </p>
            </div>
          </div>

          <div
            className="w-full max-h-32 border border-cyan-600 hover:border-transparent py-6 px-4 rounded-2xl shadow-lg relative hover:bg-cyan-400 hover:shadow-2xl hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer group lg:w-1/3"
            onClick={clickHandleFacebook}
          >
            <div className="flex">
              <div className="w-1/3">
                <FaFacebook className="w-full h-16 text-cyan-600 group-hover:text-white transition-all duration-500 ease-in-out" />
              </div>
              <p className="self-center px-3 text-3xl font-bold text-cyan-600 tracking-wider group-hover:text-white transition-all duration-500 ease-in-out">
                Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
