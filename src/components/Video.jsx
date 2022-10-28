import "./mainCompnents.css";
import MainHeading from "./MainHeading";

const Video = ({ myVideo }) => {
  return (
    <div className="video-box d-flex justify-content-center align-items-center gap-5 flex-column">
      <MainHeading sub="Discover" main="OUR VIDEO" />
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="myModal"
        className="btn main-btn rounded-circle px-4 py-3"
      >
        <i className="fs-5 fa-solid fa-play"></i>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Pato Resturant
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <video controls muted autoPlay className="w-100">
                <source src={myVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
