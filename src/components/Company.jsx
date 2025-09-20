import { Link } from "react-router-dom";

const Company = ({ company }) => {
  const { industry, location, logo, name, id } = company;
  return (
    <Link
      to={`/company/${id}`}
      className=" px-3 py-4 rounded-lg cursor-pointer duration-500 hover:scale-[0.95] border-2 border-[#061767] hover:bg-linear-to-r hover:from-white hover:to-[#1207ea22] "
    >
      <div className="flex gap-3 items-center">
        <img className="w-[100px] h-[100px]" src={logo} alt="" />
        <div>
          <h2 className="text-[18px] font-semibold">{name}</h2>
          <p>{industry}</p>
          <p>{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default Company;
