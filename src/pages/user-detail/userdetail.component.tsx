import { Button } from "antd";
import { useUserdetailStyles } from "./userdetail.style";
import { useCallback} from "react";
import { environment } from "../../core/configs/app.config";
import { useNavigate } from "react-router-dom";

function UserDetailComponent() {
  const navigate = useNavigate();
  const { page, logoutButton } = useUserdetailStyles();
  const handleLogout = useCallback(()=>{
    localStorage.removeItem(`${environment.applicationName}-token`);
    console.log('logout');
    
    navigate('/auth/login');
  },[navigate])
  return (
    <div className={`${page}`}>
      <div className="row">
        <div className="col-12">
          <p>Welcome</p>
          <p>user123</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Button onClick={handleLogout} className={logoutButton}> Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailComponent;
