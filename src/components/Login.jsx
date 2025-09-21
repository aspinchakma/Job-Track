import { useContext, useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router-dom";
import githubImg from "../assets/githubIcon.png";
import googleImg from "../assets/googleIcon.png";
import signImg from "../assets/signin.png";
import { AuthContext } from "../Context/MixContext";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleShowPassword = () => {
    setIsOpen(!isOpen);
  };
  const { signIn } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    signIn(userForm.email, userForm.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => setError(err.code));
  };

  return (
    <div className="w-[95%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-[10px] lg:py-[20px]">
      <div className="flex items-center">
        <img className="w-[80%] lg:w-[90%] mx-auto" src={signImg} alt="" />
      </div>
      <div className="lg:w-[80%] mx-auto">
        <h2 className=" text-[28px] text-center font-semibold">
          Sign into your <span className="text-[#163bde]">account!</span>
        </h2>
        <p className="text-gray-600 text-center">
          Nice to see you! Please log in with your account.
        </p>

        {/* sign up with others */}
        <div className="space-y-[13px] my-6">
          <button className="w-full p-4 bg-[#eceef9] flex gap-2 items-center rounded-[4px] cursor-pointer">
            <img className="w-[30px]" src={googleImg} alt="" />{" "}
            <span className="text-[17px]">Sign up with Google</span>
          </button>
          <button className="w-full p-4 bg-[#eceef9] flex gap-2 items-center rounded-[4px] cursor-pointer">
            <img className="w-[40px]" src={githubImg} alt="" />{" "}
            <span className="text-[17px]">Sign up with Github</span>
          </button>
        </div>
        <p className="text-gray-600 text-center">
          We won't post anything without your permission and your personal
          details are kept private
        </p>
        <div className="divider font-semibold mt-7 mb-4 h-[1px]">Or</div>
        <form onSubmit={handleSignIn} className="card-body w-full py-0">
          <fieldset className="fieldset">
            <label className="label text-[18px] mb-2 font-semibold text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full mb-4 text-[16px] py-6 "
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <label className="label text-[18px] mb-2 font-semibold text-black">
              Password
            </label>
            <div className="relative">
              <input
                type={`${isOpen ? "text" : "password"}`}
                className="input w-full mb-0 text-[16px] py-6 "
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
              />
              <div className="absolute top-[50%] right-[10px] translate-y-[-50%] z-10">
                {isOpen ? (
                  <RxEyeOpen
                    onClick={handleShowPassword}
                    className=" text-[20px] text-[#666666] font-bold cursor-pointer"
                  />
                ) : (
                  <GoEyeClosed
                    onClick={handleShowPassword}
                    className=" text-[20px] text-[#666666] font-bold cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div>
              <Link
                to={`/resetpassword`}
                className="link link-hover text-[17px]"
              >
                Forgot password?
              </Link>
            </div>

            <button className="py-3 bg-[#061767] text-white font-semibold text-[16px] rounded-[4px] cursor-pointer border-1 border-[#061767] hover:text-[#061767] hover:bg-white mt-4 duration-500">
              Login
            </button>
            <div className="h-[20px]">
              <p className="text-error text-[16px] text-center font-bold">
                {error}
              </p>
            </div>
            <p className="text-[15px] mx-auto">
              Don't Have An Account?{" "}
              <Link
                to={`/register`}
                className="text-[#061767] font-semibold underline"
              >
                Sign Up
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
