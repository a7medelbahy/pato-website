import LunchImg from "../../../images/our-menu-01.jpg";
import { Link } from "react-router-dom";
const HomeMenuLunch = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="menu-img overflow-hidden"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <img
          className="img-fluid w-100 d-block rounded"
          src={LunchImg}
          alt="lunchImg"
        />
        <Link to="/menu" className="btn main-btn">
          Lunch
        </Link>
      </div>
    </div>
  );
};

export default HomeMenuLunch;
