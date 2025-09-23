import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
gsap.registerPlugin(SplitText);
const Banner = () => {
  const textRef = useRef();

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "words",
      aria: "hidden",
    });
    gsap.from(split.words, {
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,
    });

    // cleanup (optional)
    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="bg-[#061767] text-white py-[60px]">
      <div className="w-[95%] mx-auto lg:w-[85%] ">
        <div className="text-center lg:w-[70%] mx-auto ">
          <p className="lg:mb-5">
            <span className="font-bold">#1</span> PLATFORM FOR JOBS
          </p>
          <h1
            ref={textRef}
            className="text-[30px] lg:text-[50px] font-extrabold lg:leading-[60px]"
          >
            Find Your <span className="text-[#EE7236]">Dream Job</span> That
            Suit With Exciting Opportunities
          </h1>
          <p className="my-[30px] lg:my-10">
            Embark on a journey towards your dream career, your ultimate
            job-finding companion! We've curated a platform that connects
            talented individuals with exciting opportunities.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Job title, Salary, or Companies...."
              className="bg-white flex-1 px-4 rounded-[4x] text-gray-700"
            />
            <button className="bg-[#10141d] text-white px-6 py-3 cursor-pointer">
              Explore Now
            </button>
          </div>
          <div className="text-[15px] lg:flex gap-3 items-center font-semibold mt-3 text-gray-400">
            <h3 className="">Popular Categories:</h3>
            <Link className=" underline p-2">Product Manager</Link>
            <Link className=" underline p-2">Frontend Dev</Link>
            <Link className=" underline p-2">Data Analyst</Link>
          </div>
        </div>

        <div className="lg:w-[70%] mx-auto mt-5 lg:mt-9">
          <div className="flex justify-between">
            <div className="flex items-center text-center">
              <div>
                <h2 className="lg:text-[20px] text-[15px]">Live Jobs</h2>
                <p className="lg:text-[24px] font-extrabold">30000+</p>
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="flex items-center text-center">
              <div>
                <h2 className="lg:text-[20px] text-[15px]">Daily Job Post</h2>
                <p className="lg:text-[24px] font-extrabold">25000+</p>
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="flex items-center text-center">
              <div>
                <h2 className="lg:text-[20px] text-[15px]">People Get Hired</h2>
                <p className="lg:text-[24px] font-extrabold">5000+</p>
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="flex items-center text-center">
              <div>
                <h2 className="lg:text-[20px] text-[15px]"> Companies</h2>
                <p className="lg:text-[24px] font-extrabold">1000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
