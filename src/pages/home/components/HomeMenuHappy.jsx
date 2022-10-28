import HappyImg from "../../../images/our-menu-13.jpg";
import { Link } from "react-router-dom";
const HomeMenuHappy = () => {
  return (
    <div className="col-lg-8 col-md-6">
      <div
        className="menu-img overflow-hidden"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <img
          className="img-fluid w-100 d-block rounded"
          src={HappyImg}
          alt="HappyImg"
        />
        <Link to="/menu" className="btn main-btn">
          Happy Hour
        </Link>
      </div>
    </div>
  );
};

export default HomeMenuHappy;
