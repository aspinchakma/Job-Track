import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPersonAdd } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { CompaniesContext } from "../Context/MixContext";
import companyBg from "../assets/companyBg.jpg";
import Jobs from "./Jobs";

const ComapnyDetails = () => {
  const { id } = useParams();
  const companies = useContext(CompaniesContext);
  const targetedCompanyData = companies.find((comp) => comp.id == id);
  return (
    <div className="w-[95%] lg:w-[85%] mx-auto mt-5">
      <div className="px-[10px] py-[30px] lg:p-5 shadow-lg rounded-lg">
        <img
          className="min-h-[250px] rounded-lg object-cover"
          src={companyBg}
          alt=""
        />
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-end">
          <div>
            <div className="flex items-center gap-4 relative px-[20px] lg:px-[40px] mt-2">
              <img
                className="w-[140px] h-[140px] relative top-[-30px] rounded-lg shadow-lg"
                src={targetedCompanyData?.logo}
                alt=""
              />
              <div>
                <div className="flex items-center gap-2 text-[24px] lg:text-[28px] font-bold">
                  <h2 className="lg:leading-0">{targetedCompanyData?.name}</h2>

                  <MdVerified className="text-[#2747d5]" />
                </div>

                <p className="text-[19px] font-semibold mt-2">
                  {targetedCompanyData?.industry}
                </p>
                <div className="flex items-center gap-1 my2">
                  <FaLocationDot />
                  <p>{targetedCompanyData?.location}</p>
                </div>
                <div>
                  <Link
                    className="text-[#2747d5] flex items-center gap-1 font-semibold"
                    to={targetedCompanyData?.website}
                  >
                    Visit Website <IoOpenOutline />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-[#061767] text-white border-2 border-[#061767] px-4 py-2 rounded-[4px] font-semibold hover:bg-white hover:text-[#061767] duration-500 cursor-pointer">
              {targetedCompanyData?.jobs.length < 10 && "0"}
              {targetedCompanyData?.jobs.length} Opens Jobs
            </button>
            <button className="px-3 py-2 rounded-[4px] border-2 cursor-pointer border-[#2747d5] flex items-center gap-3 hover:text-white hover:bg-[#2747d5] duration-300">
              <IoIosPersonAdd className="text-[24px]" /> Follow
            </button>
          </div>
        </div>
      </div>
      {/* about company */}
      <div>
        <h2 className="text-[28px] font-semibold mt-10">
          About the <span className="text-[#08068d]">company</span>
        </h2>
        <p className="text-[#707070] text-[18px] mt-3">
          {targetedCompanyData?.about}
        </p>
      </div>
      {/* Available job section */}
      <div>
        <h3 className="text-[20px] flex gap-2 font-bold mt-8">
          <span className="text-[#08068d] ">
            {targetedCompanyData?.jobs?.length < 10
              ? `0${targetedCompanyData?.jobs.length}`
              : targetedCompanyData?.jobs.length}
          </span>
          total jobs available.
        </h3>
        <div className="grid grid-cols-1 gap-4 mt-5">
          {targetedCompanyData?.jobs.map((job) => (
            <Jobs
              key={job.id}
              website={targetedCompanyData?.website}
              job={job}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComapnyDetails;
