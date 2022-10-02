import { CgScrollH } from "react-icons/cg";

const InfoScroll = () => {
  return (
    <div>
      <h3 className="hidden lg:rotate-90 lg:absolute lg:block lg:-right-12 lg:top-1/2 text-dark font-bold shadow-xs font-serif tracking-[0.3rem]">
        Scroll in Content <CgScrollH className="inline-block" />
      </h3>
    </div>
  );
};

export default InfoScroll;
