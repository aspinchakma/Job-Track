import { useContext } from "react";
import { CompaniesContext } from "../Context/MixContext";

const Companies = () => {
  const context = useContext(CompaniesContext);
  console.log(context);
  return (
    <div className="py-5 lg:py-10 min-h-screen">
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
      </div>
    </div>
  );
};

export default Companies;
