import DinnerImg from "../../../images/our-menu-05.jpg";
import { Link } from "react-router-dom";
const HomeMenuDinner = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="menu-img overflow-hidden"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <img
          className="img-fluid w-100 d-block rounded"
          src={DinnerImg}
          alt="DinnerImg"
        />
        <Link to="/menu" className="btn main-btn">
          Dinner
        </Link>
      </div>
    </div>
  );
};

export default HomeMenuDinner;
