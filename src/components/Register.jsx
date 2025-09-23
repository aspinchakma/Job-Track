import { updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import githubImg from "../assets/githubIcon.png";
import googleImg from "../assets/googleIcon.png";
import signImg from "../assets/login.png";
import { AuthContext } from "../Context/MixContext";
import { auth } from "../firebase/firebase.init";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    document.title = "Register";
  }, []);
  const [userForm, setUserForm] = useState({
    fullName: "",
    url: "",
    email: "",
    password: "",
  });
  const handleShowPassword = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const { register, setUser, handeSignInWithGoogle, handleSignInWithGithub } =
    useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkbox.checked) {
      setError("Please Agree With Terms & Conditions.");
      return;
    }
    setError("");
    register(userForm.email, userForm.password)
      .then((result) => {
        setUser(result);
        updateProfile(auth.currentUser, {
          displayName: userForm.fullName,
          photoURL: userForm.url,
        })
          .then(() => {
            setUser(result.user);
          })
          .catch((err) => setError(err.code));
      })
      .catch((err) => setError(err.code));
  };

  // sign in with google
  const signInWithGoogle = () => {
    handeSignInWithGoogle()
      .then(() => navigate(`${location.state ? location.state : "/"}`))
      .catch((err) => setError(err.code));
  };

  // sign in with github
  const signInWithGithub = () => {
    handleSignInWithGithub()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
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
          Sign up your your <span className="text-[#163bde]">account!</span>
        </h2>
        <p className="text-gray-600 text-center text-[14px] mt-3">
          Start your 15-day trial, no credit card required
        </p>

        {/* sign up with others */}
        <div className="space-y-[13px] my-6">
          <button
            onClick={signInWithGoogle}
            className="w-full p-4 bg-[#eceef9] flex gap-2 items-center rounded-[4px] cursor-pointer"
          >
            <img className="w-[30px]" src={googleImg} alt="" />{" "}
            <span className="text-[17px]">Sign up with Google</span>
          </button>
          <button
            onClick={signInWithGithub}
            className="w-full p-4 bg-[#eceef9] flex gap-2 items-center rounded-[4px] cursor-pointer"
          >
            <img className="w-[40px]" src={githubImg} alt="" />{" "}
            <span className="text-[17px]">Sign up with Github</span>
          </button>
        </div>
        <p className="text-gray-600 text-center">
          We won't post anything without your permission and your personal
          details are kept private
        </p>
        <div className="divider font-semibold mt-7 mb-4 h-[1px]">Or</div>
        <form onSubmit={handleSubmit} className="card-body w-full py-0">
          <fieldset className="fieldset">
            <label className="label text-[18px] mb-1 font-semibold text-black">
              Full Name
            </label>
            <input
              type="text"
              className="input w-full mb-4 text-[16px] py-6 "
              placeholder="Full Name"
              required
              name="fullName"
              onChange={handleChange}
            />
            <label className="label text-[18px] mb-1 font-semibold text-black">
              Profile Link
            </label>
            <input
              type="txt"
              className="input w-full mb-4 text-[16px] py-6 "
              placeholder="Profile Link"
              required
              name="url"
              onChange={handleChange}
            />
            <label className="label text-[18px] mb-1 font-semibold text-black">
              Email
            </label>
            <input
              type="email"
              className="input w-full mb-4 text-[16px] py-6 "
              placeholder="Email"
              required
              name="email"
              onChange={handleChange}
            />
            <label className="label text-[18px] mb-1 font-semibold text-black">
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
            <div></div>
            <label className="label text-[16px] mt-3">
              <input type="checkbox" name="checkbox" className="checkbox" />
              By signing up, you agree to the{" "}
              <span className="underline font-semibold">terms of service</span>
            </label>
            <button className="py-3 bg-[#061767] text-white font-semibold text-[16px] rounded-[4px] cursor-pointer border-1 border-[#061767] hover:text-[#061767] hover:bg-white mt-4 duration-500">
              Sign Up
            </button>
            <div className="h-[20px]">
              <p className="text-error text-[16px] text-center font-bold">
                {error}
              </p>
            </div>
            <p className="text-[15px] mx-auto">
              Already have an account?{" "}
              <Link
                to={`/login`}
                className="text-[#061767] font-semibold underline"
              >
                Sign In
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
