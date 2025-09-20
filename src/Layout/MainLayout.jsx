import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 bg-white">
        <Header />
      </div>
      {/* content will change  */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
