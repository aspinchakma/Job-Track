import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      {/* content will change  */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
