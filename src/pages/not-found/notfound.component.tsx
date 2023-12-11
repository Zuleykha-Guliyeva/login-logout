import useLocalization from "assets/lang";
import { useNotfoundStyles } from "./notfound.style";

const NotfoundComponent = () => {
    const {page} = useNotfoundStyles();
    const translate = useLocalization();
    return (
      <div className={page}>
        <div className="row">
          <div className="col-12">
            <h1>{translate("notfound")}</h1>
          </div>
        </div>
      </div>
    );
}
export default NotfoundComponent;