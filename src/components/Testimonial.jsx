import Marquee from "react-fast-marquee";
import { FaPlus, FaStar } from "react-icons/fa";
import companyLogo from "../assets/companyLogo.png";
import img1 from "../assets/imag!.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Testimonial = () => {
  return (
    <div className="w-[95%] lg:w-[85%] mx-auto my-8 lg:my-12">
      <h2 className="text-[#2747d5] w-fit px-6 py-2 rounded-full mx-auto bg-[#dee3f7]">
        Testimonial
      </h2>
      <h2 className="text-center font-semibold text-[30px] lg:text-[45px] my-3">
        See what our <span className="text-[#2747d5]">clients</span> say about
        us
      </h2>

      <p className="text-center mx-auto max-w-[600px] text-gray-500 ">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many.
      </p>
      <div className="flex justify-center mt-7">
        <div className="flex relative items-center">
          <div>
            <img
              className="w-[60px] h-[60px] rounded-full object-cover "
              src={img1}
              alt=""
            />
          </div>
          <div className="relative left-[-15px] p-1 bg-white rounded-full">
            <img
              className="w-[60px] h-[60px] rounded-full object-cover"
              src={img2}
              alt=""
            />
          </div>
          <div className="relative left-[-30px] p-1 bg-white rounded-full">
            <img
              className="w-[60px] h-[60px] rounded-full object-cover "
              src={img3}
              alt=""
            />
          </div>
          <div className="relative left-[-45px] p-1 bg-white rounded-full">
            <img
              className="w-[60px] h-[60px] rounded-full  object-cover "
              src={img4}
              alt=""
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-full object-cover relative left-[-60px] p-1 bg-white">
            <div className="bg-[#2747d5] w-full h-full  flex items-center justify-center rounded-full">
              <FaPlus className="text-[30px] text-white" />
            </div>
          </div>
          <p className="font-semibold text-gray-500 relative left-[-40px]">
            +11K reviews
          </p>
        </div>
      </div>

      {/* reviews */}
      <Marquee
        speed={20}
        pauseOnHover
        gradient={true}
        gradientWidth={200}
        className="lg:mt-5 mb-5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:w-[600px] rounded-lg shadow-lg overflow-hidden mt-8 py-3 lg:py-0">
          <img
            className="lg:w-full lg:h-full object-cover lg:col-span-2 h-[200px] mx-auto"
            src={img1}
            alt=""
          />
          <div className="lg:px-8  p-2 col-span-1 lg:col-span-3">
            <div className="flex gap-1 justify-center lg:justify-start">
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
            </div>
            <h3 className="text-[15px] lg:text-[20px] italic font-semibold text-center lg:text-left mt-3 mb-5 w-[200px] lg:w-full">
              “It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing.”
            </h3>
            <div className="flex items-center h-[60px] gap-5 justify-center">
              <img className="lg:w-[60px] w-[40px]" src={companyLogo} alt="" />
              <div className="border-1 border-gray-300 h-full"></div>
              <div>
                <h3 className="text-[16px] lg:text-[20px]">Mike Carlson</h3>
                <p className="text-gray-400">@Project Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:w-[600px] rounded-lg shadow-lg overflow-hidden mt-8 py-3 lg:py-0">
          <img
            className="lg:w-full lg:h-full object-cover lg:col-span-2 h-[200px] mx-auto"
            src={img2}
            alt=""
          />
          <div className="lg:px-8  p-2 col-span-1 lg:col-span-3">
            <div className="flex gap-1 justify-center lg:justify-start">
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
            </div>
            <h3 className="text-[15px] lg:text-[20px] italic font-semibold text-center lg:text-left mt-3 mb-5 w-[200px] lg:w-full">
              “It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing.”
            </h3>
            <div className="flex items-center h-[60px] gap-5 justify-center">
              <img className="lg:w-[60px] w-[40px]" src={companyLogo} alt="" />
              <div className="border-1 border-gray-300 h-full"></div>
              <div>
                <h3 className="text-[16px] lg:text-[20px]">Mike Carlson</h3>
                <p className="text-gray-400">@Project Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:w-[600px] rounded-lg shadow-lg overflow-hidden mt-8 py-3 lg:py-0">
          <img
            className="lg:w-full lg:h-full object-cover lg:col-span-2 h-[200px] mx-auto"
            src={img3}
            alt=""
          />
          <div className="lg:px-8  p-2 col-span-1 lg:col-span-3">
            <div className="flex gap-1 justify-center lg:justify-start">
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
            </div>
            <h3 className="text-[15px] lg:text-[20px] italic font-semibold text-center lg:text-left mt-3 mb-5 w-[200px] lg:w-full">
              “It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing.”
            </h3>
            <div className="flex items-center h-[60px] gap-5 justify-center">
              <img className="lg:w-[60px] w-[40px]" src={companyLogo} alt="" />
              <div className="border-1 border-gray-300 h-full"></div>
              <div>
                <h3 className="text-[16px] lg:text-[20px]">Mike Carlson</h3>
                <p className="text-gray-400">@Project Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:w-[600px] rounded-lg shadow-lg overflow-hidden mt-8 py-3 lg:py-0">
          <img
            className="lg:w-full lg:h-full object-cover lg:col-span-2 h-[200px] mx-auto"
            src={img4}
            alt=""
          />
          <div className="lg:px-8  p-2 col-span-1 lg:col-span-3">
            <div className="flex gap-1 justify-center lg:justify-start">
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
              <FaStar className="text-[#ffc107] text-[22px]" />
            </div>
            <h3 className="text-[15px] lg:text-[20px] italic font-semibold text-center lg:text-left mt-3 mb-5 w-[200px] lg:w-full">
              “It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing.”
            </h3>
            <div className="flex items-center h-[60px] gap-5 justify-center">
              <img className="lg:w-[60px] w-[40px]" src={companyLogo} alt="" />
              <div className="border-1 border-gray-300 h-full"></div>
              <div>
                <h3 className="text-[16px] lg:text-[20px]">Mike Carlson</h3>
                <p className="text-gray-400">@Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonial;
