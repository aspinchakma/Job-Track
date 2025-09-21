import { Link } from "react-router-dom";
import resetImg from "../assets/reset.png";
const Reset = () => {
  return (
    <div className="lg:w-[28%] w-[80%] mx-auto shadow-lg p-6 my-12 rounded-lg lg:p-8">
      <img className="w-full" src={resetImg} alt="" />
      <h2 className="font-semibold text-[24px] text-center mt-4 mb-2">
        Password <span className="text-[#163bde]">Reset</span>
      </h2>
      <p className="text-[#595c5f]">
        Fill with your mail to receive instructions on how to reset your
        password.
      </p>
      <label className="label text-[18px] mb-2 mt-4 font-semibold text-black">
        Enter Email
      </label>
      <input
        type="email"
        className="input w-full mb-3 text-[16px] py-6 "
        placeholder="Email"
        required
      />
      <button className="py-3 bg-[#163bde] text-white font-semibold text-[16px] rounded-[4px] cursor-pointer border-1 border-[#163bde] hover:text-[#163bde] hover:bg-white mt-4 duration-500 w-full text-center">
        Reset password
      </button>
      <p className="text-[#595c5f] mt-4 text-center">
        Remember your password?{" "}
        <Link to={`/login`} className="underline text-black">
          Log in
        </Link>{" "}
      </p>
    </div>
  );
};

export default Reset;
