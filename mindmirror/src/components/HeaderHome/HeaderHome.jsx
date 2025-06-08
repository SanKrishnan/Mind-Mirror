import { Link } from "react-router-dom";
import './HeaderHome.css';

const HeaderHome = () => {
  return (
    <header>
      <div className="top">
        <p id="head">Mind Mirror</p>
        <Link id="signin" to="#">Sign In</Link>
      </div>
      <div className="middle">
        <p id="subtitle">A place to release, reflect and discover</p>
        <Link id="create" to="/create">Create Blog</Link>
      </div>
    </header>
  );
};

export default HeaderHome;
