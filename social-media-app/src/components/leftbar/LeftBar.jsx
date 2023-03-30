import React, { useContext } from "react";
import "./LeftBar.scss";
import Friends from "../../asset/Friends.png";
import Groups from "../../asset/Groups.png";
import MarketPlace from "../../asset/MarketPlace.png";
import Watch from "../../asset/Watch.png";
import Memories from "../../asset/Memories.png";
import Event from "../../asset/Events.png";
import Gaming from "../../asset/Gameing.png";
import Gallery from "../../asset/Gallery.png";
import Videos from "../../asset/Video.png";
import Message from "../../asset/Message.png";
import Flight from "../../asset/Flight.png";
import Gym from "../../asset/Gym.png";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);


  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={MarketPlace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Event} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Message} alt="" />
            <span>Message</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Flight} alt="" />
            <span>Book a Flight</span>
          </div>
          <div className="item">
            <img src={Gym} alt="" />
            <span>Gym</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
