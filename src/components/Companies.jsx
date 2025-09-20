import { useContext } from "react";
import { CompaniesContext } from "../Context/MixContext";
import Company from "./Company";

const Companies = () => {
  const companies = useContext(CompaniesContext);
  return (
    <div className=" my-10 lg:my-20">
      <div className=" w-[95%] lg:w-[85%] mx-auto">
        <div className="grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-extrabold text-[20px] lg:text-[35px]">
              Choose Your Dream{" "}
              <span className="text-[#EE7236]">Companies</span>
            </h2>
            <p className="max-w-[500px]">
              Start your journey towards a fulfilling career by exploring the
              top companies that are actively seeking talented individuals like
              you
            </p>
          </div>
          <div className="text-right">
            <button className="py-3 px-6 bg-[#10141d] text-white rounded-[4px] font-semibold">
              View All Companies
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4 mt-5 lg:mt-8">
          {companies?.map((company) => (
            <Company key={company.id} company={company}></Company>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
