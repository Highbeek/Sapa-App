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
            numImages={1}
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
        <div className="row how d-flex justify-content-center">
          <div className="col-md-4 col-sm-12">
            <div className="links">
              <strong className="bullets">1</strong>
              <h3>Begin</h3>
              <p>Start with your name and location.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="links">
              <strong className="bullets">2</strong>
              <h3>Yarn your tori</h3>
              <p>Let our template guide you</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="links">
              <strong className="bullets">3</strong>
              <h3>Share with the world</h3>
              <p>Soro Soke and get help.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="end__sapa">
        <div className="endS__text">
          {" "}
          <h3>end saPA for ...</h3>
        </div>
        <div
          className="end__sapa__links d-flex"
          style={{ background: "oliveGreen" }}
        >
          <EndSapa
            className="img-fluid"
            icon={Self}
            text="YourSelf"
            img={Arrow}
          />
          <EndSapa
            className="img-fluid"
            icon={Hug}
            text="Your Padi"
            img={Arrow}
          />
          <EndSapa
            className="img-fluid"
            icon={generous}
            text="Do Giveaway"
            img={Arrow}
          />
        </div>
      </section>
      <section className="gallery">
        <h1>Gallery</h1>
        <ImageGrid
          searchTerm="people africa"
          numImages={15}
          className="image-grid custom img-fluid"
        />
        <div className="empty"></div>
      </section>
    </div>
  );
};

export default Home;
