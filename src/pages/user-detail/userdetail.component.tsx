import { Button } from "antd";
import { useUserdetailStyles } from "./userdetail.style";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../store/store";
import { environment } from "core/configs/app.config";

function UserDetailComponent() {
  const navigate = useNavigate();
  const { page, logoutButton, title, userTitleColor } = useUserdetailStyles();

  const user = useSelector((state: IState) => state.user);
  console.log(user);
  
 
  const handleLogout = useCallback(() => {
    localStorage.removeItem(`${environment.applicationName}-token`);
    navigate("/auth/login");
  }, [navigate]);
  
  return (
    <div className={`${page}`}>
      <div className="row">
        <div className="col-12">
          <p className={title}>Welcome</p>
          <p className={`${title} ${userTitleColor}`}>{user?.username}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Button onClick={handleLogout} className={logoutButton}>
            {" "}
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailComponent;
