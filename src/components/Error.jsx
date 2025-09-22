import { Link } from "react-router-dom";
import errorImg from "../assets/drror.png";
const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:w-[85%] w-[95%] mx-auto">
      <div>
        <img className="w-[80%] lg:w-[45%] mx-auto" src={errorImg} alt="" />
        <h2 className="text-[30px] lg:text-[34px] font-semibold text-center mt-4">
          Page not pound.
        </h2>
        <p className="text-center max-w-[700px] mx-auto mt-2 mb-3">
          The server encountered something unexpected that didn't allow it to
          complete the request. We apologize. You can go back to main page:
        </p>
        <div className="text-center">
          <Link
            to={`/`}
            className="duration-500 py-2 px-6 rounded-[4px] text-white bg-[#061767] border-2 border-[#061767] hover:text-[#061767] hover:bg-white inline-block font-bold"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
