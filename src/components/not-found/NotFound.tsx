import { NavLink } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="notFound">
      <h1>Page Not Found...</h1>
      <NavLink to="/">Go Home Page</NavLink>
    </div>
  );
}

export default NotFound;
