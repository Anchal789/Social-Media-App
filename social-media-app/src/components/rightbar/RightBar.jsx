import React from "react";
import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Priyal</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Reject</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Sakshi</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Reject</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Naveen</span> change the profile picture
              </p>
            </div>
            <span>14 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Pranav</span> change the profile picture
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Gaurav</span> like your photo
              </p>
            </div>
            <span>7 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Raunak</span> post a photo
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Sameer</span> commented on photo you're tagged in
              </p>
            </div>
            <span>14 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Raunak Roy Burman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Gaurav Verma</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Sameer Husseni</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto-compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Selmon Bhai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
