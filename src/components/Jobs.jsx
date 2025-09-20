import { FaArrowRight } from "react-icons/fa6";

const Jobs = ({ job }) => {
  const { bannerImage, jobType, location, salary, title } = job;
  console.log(job);
  return (
    <div className="lg:flex flex-col lg:flex-row lg:justify-between gap-3 shadow-lg py-5 px-2 rounded-lg items-center">
      <div className="lg:flex gap-3 lg:items-center">
        <img
          className="lg:w-[100px] lg:h-[100px] rounded-lg object-cover"
          src={bannerImage}
          alt=""
        />
        <div>
          <h2 className="font-bold text-[20px]">{title}</h2>
          <div className="flex gap-2 items-center">
            <h3>{location}</h3>/<h2>{jobType}</h2>
          </div>
        </div>
      </div>
      <h3>{salary}</h3>
      <div>
        <button className="flex gap-3 border-[#163bde] px-4 py-2 rounded-[4xl] border-2 text-[#163bde] font-bold">
          View Job <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Jobs;
