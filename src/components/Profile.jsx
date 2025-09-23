import { useContext } from "react";
import { AuthContext } from "../Context/MixContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="w-[95%] lg:w-[60%] mx-auto mb-5 lg:mb-8">
      <img
        className="max-w-[400px] max-h-[400px] rounded-[4px]"
        src={user.photoURL}
        alt=""
      />
      <h3 className="text-[30px] font-bold lg:text-[37px]">
        {user?.displayName}
      </h3>
      <h2 className=" text-[20px] font-semibold">Email: {user.email}</h2>
      <h3 className="font-bold mt-3 mb-1">
        Created At: {user.metadata.creationTime}
      </h3>
      <h3 className="font-bold mb-8">
        Last Login: {user.metadata.lastSignInTime}
      </h3>

      <button className="text-[14px] font-bold px-6 py-2 rounded-[4px] bg-[#061767] text-white inline-block border-1 border-[#061767] hover:bg-white hover:text-[#061767] duration-500 cursor-pointer ">
        Edit Your Profile
      </button>
    </div>
  );
};

export default Profile;
