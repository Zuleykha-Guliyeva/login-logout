import { Outlet } from "react-router-dom";
import { usePublicLayoutStyles } from "./public.style";

const PublicComponent = () => {
  const { publicClasses, orangePanel } = usePublicLayoutStyles();

  return (
    <div className={publicClasses}>
      <div className={orangePanel}></div>
      <Outlet />
    </div>
  );
};

export default PublicComponent;
