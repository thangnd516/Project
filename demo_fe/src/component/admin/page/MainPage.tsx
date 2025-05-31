import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./main-page.scss";
import { useEffect } from "react";
import MainLayout from "../MainLayout";

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/introduction");
    }
  }, [location, navigate]);
  return (
    <MainLayout>
      <div className="main-page-container">
        <Outlet />
      </div>
    </MainLayout>
  );
};

export default MainPage;   