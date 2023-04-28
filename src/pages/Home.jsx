import React from "react";
import "./home.css";

import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Self from "../assets/self.png";
import Hug from "../assets/hug.png";
import generous from "../assets/generous.png";
import EndSapa from "../components/EndSapa";
import Arrow from "../assets/arrow-right.png";
import ImageGrid from "../components/ImageGrid";

const Home = () => {
  return (
    <div className="homepage">
      <section className="home">
        <div className="motto">
          <h1>
            Give <br />
            Happiness <br />
            With Every <span>Naira</span>
          </h1>
          <h4>Give Help, Show Kindness, Put a Smile on a Face.</h4>
          <div className="sapa__btn">
            <button className="btn btn-dark btn-lg download-button">
              <FaGooglePlay /> Download
            </button>
            <button
              className="btn btn-outline-light btn-lg download-button"
              type="button"
            >
              <FaApple />
              Download
            </button>
          </div>
        </div>
        <div className="picBackground">
          <ImageGrid
            searchTerm="africa children"
            numImages={2}
            className="singleImg"
          />
        </div>
      </section>
      <section className="about">
        <div className="steps">
          <p>What to expect</p>
          <h2>
            Getting help on <em>saPA</em> takes just a few minutes
          </h2>
        </div>

        <div className="d-flex how justify-content-between">
          <div className="links">
            <div>
              <strong className="bullets">1</strong>
            </div>
            <h3>Begin</h3>
            <p>Start with your name and location.</p>
          </div>
          <div className="links">
            <div>
              <strong className="bullets">2</strong>
            </div>
            <h3>Yarn your tori</h3>
            <p>Let our template guide you</p>
          </div>

          <div className="links">
            <div>
              <strong className="bullets">3</strong>
            </div>
            <h3>Share with the world</h3>
            <p>Soro Soke and get help.</p>
          </div>
        </div>
      </section>
      <section className="end__sapa d-flex">
        <div className="endS_text">end saPA for ...</div>
        <div
          className="end__sapa__links d-flex"
          style={{ background: "oliveGreen" }}
        >
          <EndSapa icon={Self} text="YourSelf" img={Arrow} />
          <EndSapa icon={Hug} text="Your Padi" img={Arrow} />
          <EndSapa icon={generous} text="Do Giveaway" img={Arrow} />
        </div>
      </section>
      <section className="gallery">
        <h1>Gallery</h1>
        <ImageGrid
          searchTerm="people africa"
          numImages={15}
          className="image-grid custom"
        />
        <div className="empty"></div>
      </section>
    </div>
  );
};

export default Home;
