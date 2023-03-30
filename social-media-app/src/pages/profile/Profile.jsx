import React from "react";
import "./Profile.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagramicon from "@mui/icons-material/Instagram";
import Github from "@mui/icons-material/GitHub";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://blog.paper.li/wp-content/uploads/2020/02/LinkedIn-banner-5-1024x256.png"
          alt=""
        />
        <img
          src="https://scontent.fbom38-1.fna.fbcdn.net/v/t1.6435-9/59781260_2384822971804503_1751032203501895680_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=108&ccb=1-7&_nc_sid=110474&_nc_ohc=YtzG5szLKNgAX_l1TcP&_nc_ht=scontent.fbom38-1.fna&oh=00_AfACyTQPEYIUvhugamzh9V6mE64x4Z5emdKfKMmEcRgfdg&oe=644CF2C0"
          className="profilePicture"
          alt=""
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/uas/login-submit">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://github.com/">
              <Github fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <Instagramicon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Modi Ji</span>
            <div className="item">
              <span>Prime Minister India</span>
            </div>
            <button>Follow</button>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
