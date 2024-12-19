import "./error.css";
import { Link } from "react-router";

export const Error404 = () => {
  return (
    <div className="container error_container">
      <div className="row">
        <div className="col-12">
          <center>
            <img
              src="../../public/error4041.jpg"
              alt="Error 404: Página no encontrada"
              className="error_image"
            />
            <Link className="btn_error" to="/">
              INICIO
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};
