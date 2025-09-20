const Company = ({ company }) => {
  const { industry, location, logo, name } = company;
  return (
    <div className=" px-3 py-4 rounded-lg cursor-pointer duration-500 hover:scale-[0.95] border-1 border-black">
      <div className="flex gap-3 items-center">
        <img className="w-[100px] h-[100px]" src={logo} alt="" />
        <div>
          <h2 className="text-[18px] font-semibold">{name}</h2>
          <p>{industry}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
