const Card = ({ data, index, type }) => {
  let position = type === "left" ? "left" : "right";
  return (
    <div className="relative z-10" key={data.id}>
      <div className="timeline-numeric">
        <p className="text-2xl text-center">{index + 1}</p>
      </div>
      <div className={"timeline-container timeline-container-" + position}>
        <div
          className={"timeline-pointer timeline-pointer-" + position}
          aria-hidden="true"
        ></div>
        <div className="bg-dark p-6 rounded-md shadow-xl">
          <span className="font-bold text-primary lg:text-lg text-xl tracking-wide">
            {data.principle}
          </span>
          <span className="block lg:text-[11px] text-[12px] text-slate-400">
            {data.startWorking + " - " + data.endWorking}
          </span>
          <h1 className="text-2xl lg:text-xl tracking-widest font-bold pt-1 text-slate-300">
            {data.position != null ? data.position : ""}
          </h1>
          <div className="pt-1 ml-2 text-slate-300 lg:text-sm text-lg tracking-wide">
            {data.jobs.map((job, index) => {
              return (
                <div key={index}>
                  <ul style={{ listStyleType: "circle" }}>
                    <li key={index}>{job.description}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
