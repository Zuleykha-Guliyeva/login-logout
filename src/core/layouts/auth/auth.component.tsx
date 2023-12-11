import { Link, Outlet } from "react-router-dom";
import { useAuthStyles } from "./auth.style";
import orangePng from "../../../assets/images/sign/Saly-3.png";
import lightPng from "../../../assets/images/sign/Saly-2.png";
import useLocalization from "assets/lang";
import {Routes} from 'router/routes'
const AuthComponent = () => {
  const { auth, orangePanel, orangeLogo, lightImgPanel, orangeImgPanel } =
    useAuthStyles();
  const translate = useLocalization();
  return (
    <div className={auth}>
      <div className={orangePanel}>
        <Link className={orangeLogo} to={Routes.default}>
          {translate("logoText")}
        </Link>
        <div className={orangeImgPanel}>
          <img src={orangePng} alt="orangePng" />
        </div>
      </div>
      <div className={`${lightImgPanel} row align-center`}>
        <img src={lightPng} alt="lightPng" />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthComponent;
