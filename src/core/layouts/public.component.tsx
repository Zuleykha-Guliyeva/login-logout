import { Outlet } from "react-router-dom";
import { usePublicLayoutStyles } from "./public.style";

const PublicComponent = () => {
  const { publicClasses, orangePanel} = usePublicLayoutStyles();

  return (
    <div className={publicClasses}>
      <div className="row p-0">
        <div className={orangePanel}>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default PublicComponent;
