import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import resetImg from "../assets/reset.png";
import { AuthContext } from "../Context/MixContext";
const Reset = () => {
  const { handleResetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = e.target.email.value;
    handleResetPassword(email)
      .then(() => {
        setSuccess("Password reset email sent!");
      })
      .catch((err) => {
        setError(err.code);
      });
  };
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
      <form onSubmit={handleFormSubmit}>
        <label className="label text-[18px] mb-2 mt-4 font-semibold text-black">
          Enter Email
        </label>
        <input
          type="email"
          className="input w-full mb-3 text-[16px] py-6 "
          placeholder="Email"
          required
          name="email"
        />
        <button className="py-3 bg-[#163bde] text-white font-semibold text-[16px] rounded-[4px] cursor-pointer border-1 border-[#163bde] hover:text-[#163bde] hover:bg-white mt-4 duration-500 w-full text-center">
          Reset password
        </button>
        <div className="h-[20px] mt-1">
          {success && (
            <p className="text-success text-[16px] text-center font-bold">
              {success}
            </p>
          )}
          {error && (
            <p className="text-error text-[16px] text-center font-bold">
              {error}
            </p>
          )}
        </div>
        <p className="text-[#595c5f] mt-2 text-center">
          Remember your password?{" "}
          <Link to={`/login`} className="underline text-black">
            Log in
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Reset;
