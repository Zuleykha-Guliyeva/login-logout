import { useNotfoundStyles } from "./notfound.style";

const NotfoundComponent = () => {
    const {page} = useNotfoundStyles();
    return (
      <div className={page}>
        <div className="row">
          <div className="col-12">
            <h1>Not Found</h1>
          </div>
        </div>
      </div>
    );
}
export default NotfoundComponent;