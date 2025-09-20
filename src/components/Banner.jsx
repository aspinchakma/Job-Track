import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#f8e968] py-[60px]">
      <div className="w-[95%] mx-auto lg:w-[85%] ">
        <div className="text-center lg:w-[60%] mx-auto ">
          <p>
            <span className="font-bold">#1</span> PLATFORM FOR JOBS
          </p>
          <h1 className="text-[30px] lg:text-[40px] font-extrabold lg:leading-[60px]">
            Find Your <span className="text-[#EE7236]">Dream Job</span> That
            Suit With Exciting Opportunities
          </h1>
          <p className="my-[30px]">
            Embark on a journey towards your dream career, your ultimate
            job-finding companion! We've curated a platform that connects
            talented individuals with exciting opportunities.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Job title, Salary, or Companies...."
              className="bg-white flex-1 px-4 rounded-[4x]"
            />
            <button className="btn bg-[#10141d] text-white px-6 py-6">
              Explore Now
            </button>
          </div>
          <div className="text-[15px] flex gap-3 items-center font-semibold mt-3 text-gray-500">
            <h3 className="">Popular Categories:</h3>
            <Link className=" underline">Product Manager</Link>
            <Link className=" underline">Frontend Dev</Link>
            <Link className=" underline">Data Analyst</Link>
          </div>
        </div>

        <div className="lg:w-[70%] mx-auto mt-6">
          <div className="flex justify-between">
            <div className="flex items-center text-center">
              <div>
                <h2 className="text-[20px]">Live Jobs</h2>
                <p className="text-[24px] font-extrabold">30000+</p>
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="flex items-center text-center">
              <div>
                <h2 className="text-[20px]">Daily Job Post</h2>
                <p className="text-[24px] font-extrabold">25000+</p>
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="flex items-center text-center">
              <div>
                <h2 className="text-[20px]">People Get Hired</h2>
                <p className="text-[24px] font-extrabold">5000+</p>
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="flex items-center text-center">
              <div>
                <h2 className="text-[20px]"> Companies</h2>
                <p className="text-[24px] font-extrabold">1000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
