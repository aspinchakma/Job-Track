import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

const Jobs = ({ job, website }) => {
  const {
    bannerImage,
    jobType,
    location,
    salary,
    title,
    id,
    description,
    requirements,
  } = job;
  return (
    <div className="lg:flex lg:flex-row lg:justify-between gap-3 shadow-lg px-3 py-10 rounded-lg items-center bg-gradient-to-r from-[#fffde7c1] to-white cursor-pointer">
      <div className="lg:flex gap-3 lg:items-center">
        <img
          className="lg:w-[70px] lg:h-[70px] rounded-lg object-cover"
          src={bannerImage}
          alt=""
        />
        <div className="text-center lg:text-left mt-5 lg:mt-0">
          <h2 className="font-bold text-[24px] hover:text-[#163bde] duration-500">
            {title}
          </h2>
          <div className="flex gap-2 items-center  w-fit mx-auto text-gray-500 lg:mx-0">
            <h3>{location}</h3>/<h2>{jobType}</h2>
          </div>
        </div>
      </div>
      <h3 className="text-center lg:text-left text-[20px]">{salary}</h3>
      <div>
        <button
          onClick={() => document.getElementById(id).showModal()}
          className="flex gap-3 border-[#163bde] px-4 py-2 rounded-[4px] border-2 text-[#163bde] font-bold mx-auto mt-4 lg:mt-0 cursor-pointer"
        >
          View Job <FaArrowRight />
        </button>
      </div>

      {/* modal */}
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img className="rounded-lg" src={bannerImage} alt="" />
          <h3 className="font-bold text-lg text-[24px] text-center mt-4">
            {title}
          </h3>
          <div className="text-center">
            <p className="text-[20px] font-semibold">{description}</p>
            <div className="flex gap-2 items-center text-center w-fit mx-auto">
              <div className="flex gap-2 items-center mt-2 mb-1 text-[18px]">
                <FaLocationDot />
                <p>{location}</p> <p>/</p> <p>{jobType}</p>
              </div>
            </div>
            <p className="text-[20px] mb-4">{salary}</p>
            <div className="text-left">
              <h3 className="text-[22px] font-bold mb-3">Requirements:</h3>
              <ul>
                {requirements.map((d, idx) => (
                  <li key={idx}>
                    {idx + 1}. {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-action text-center w-fit mx-auto">
              <a
                href={website}
                target="_blank"
                className="border-[#163bde] border-1 px-5 font-semibold bg-[#163bde] text-white py-2 rounded-[4px] hover:bg-white hover:text-[#163bde] duration-500"
              >
                Apply
              </a>
              <form method="dialog">
                <button className="bg-[#b6068f] text-white border-1 border-[#b6068f] hover:text-[#b6068f] hover:bg-white duration-500 font-semibold px-5 py-2 rounded-[4px] cursor-pointer">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Jobs;
