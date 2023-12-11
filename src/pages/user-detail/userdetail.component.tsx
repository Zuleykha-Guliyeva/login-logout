import { Button } from "antd";
import { useUserdetailStyles } from "./userdetail.style";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../store/store";
import { environment } from "core/configs/app.config";
import useLocalization from "assets/lang";
import { Routes } from "router/routes";

function UserDetailComponent() {
  const navigate = useNavigate();
  const translate = useLocalization();
  const { page, logoutButton, title, userTitleColor } = useUserdetailStyles();
  const user = useSelector((state: IState) => state.user);
  const handleLogout = useCallback(() => {
    localStorage.removeItem(`${environment.applicationName}-token`);
    navigate(`${Routes.login}`);
  }, [navigate]);
  return (
    <div className={`${page}`}>
      <div>
        <p className={title}>{translate("welcome")}</p>
        <p className={`${title} ${userTitleColor}`}>{user?.username}</p>
      </div>
      <div>
        <Button onClick={handleLogout} className={logoutButton}>
          {translate("logout")}
        </Button>
      </div>
    </div>
  );
}

export default UserDetailComponent;
