import { Link } from "react-router-dom";
import footerLogo from "../assets/footerLogo.png";

const Footer = () => {
  return (
    <footer className="py-5 lg:py-12 bg-black text-gray-300">
      <div className="w-[95%] lg:w-[85%] mx-auto">
        <h2 className="text-center text-white text-[30px] lg:text-[40px] font-extrabold">
          Explore Your <span className="text-[#ee7236]">Next Career</span> Move
        </h2>
        <p className="max-w-[700px] mx-auto text-center my-3">
          Are you ready to take the next step in your career? JobLink help you
          discover exciting opportunities tailored to your skills and
          aspirations
        </p>
        <div className="w-fit mx-auto">
          <Link
            className="inline-block py-2 px-6 rounded-[4px] bg-white text-black font-bold"
            to={`/login`}
          >
            Sign Up Now
          </Link>
        </div>

        <div className="divider h-[1px] bg-gray-500 my-7"></div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <img src={footerLogo} alt="" />
              <p className="mt-3">
                Join thousands of successful job seekers who have found their
                dream careers through our platform. Your future begins here!
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-[20px] lg:text-[24px] font-bold">Home</h3>
              <h3>Companies</h3>
              <h3>Mentoring</h3>
            </div>
            <div>
              <h3 className="text-[24px] lg:text-[30px] font-extrabold text-white max-w-[300px] leading-[30px]">
                Subscribe to our newsletter
              </h3>
              <div className="mt-3 flex items-center gap-2">
                <input
                  className="bg-white rounded-lg px-3 py-3 text-black"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="bg-[#ee7236] py-3 text-white font-bold px-4 rounded-[4px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <p className="mt-3">2023 JobLink. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
