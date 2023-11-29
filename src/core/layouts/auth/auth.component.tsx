import { Link, Outlet } from "react-router-dom";
import { useAuthStyles } from "./auth.style";
import orangePng from "../../../assets/images/sign/Saly-3.png";
import lightPng from "../../../assets/images/sign/Saly-2.png";

const AuthComponent = () => {
  const { auth, orangePanel, orangeLogo, lightPanel, orangeImg, lightImg } =
    useAuthStyles();

  return (
    <div className={auth}>
      <div className="row p-0">
        <div className={orangePanel}>
          <div className="row">
            <div className="col-12">
              <Link className={orangeLogo} to="/">
                Your Logo
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img className={orangeImg} src={orangePng} alt="orangePng" />
            </div>
          </div>
        </div>
        <div className={`${lightPanel} row align-center`}>
          <img className={lightImg} src={lightPng} alt="lightPng" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthComponent;
