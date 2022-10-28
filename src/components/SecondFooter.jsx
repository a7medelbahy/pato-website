import { Link } from "react-router-dom";
const SecondFooter = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="footer-links">
        <h4 className="main-font text-white mb-3">USEFUL LINKS</h4>
        <ul className="links d-flex flex-column gap-3">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms OF Service</Link>
          </li>
          <li>
            <Link to="/">Safety Center</Link>
          </li>
          <li>
            <Link to="/contact">Help Center</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondFooter;
