import React from 'react';
import { Link } from 'react-router-dom';

const HIWSection = () => {
  return (
    <div className="grid">
      <div className="cards-v3__card">
        <div className="cards-v3__card-icon-wrap">
          <img
            decoding="async"
            className="cards-v3__icon"
            alt="How GoFundMe Works"
            src="https://www.gofundme.com/c/wp-content/themes/sage-8.5.4/assets/svg/info-icons/handout.svg"
          />
        </div>
        <div className="cards-v3__card-content">
          <h3>1. Start your fundraiser</h3>
          <ul>
            <li>Set your fundraiser goal</li>
            <li>Tell your story</li>
            <li>Add a picture or video</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=Dcf4H8fchbE"
                target="_blank"
                rel="noopener"
              >
                Watch a video tutorial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cards-v3__card">
        <div className="cards-v3__card-icon-wrap">
          <img
            decoding="async"
            className="cards-v3__icon"
            alt="How GoFundMe Works"
            src="https://www.gofundme.com/c/wp-content/themes/sage-8.5.4/assets/svg/info-icons/add-people.svg"
          />
        </div>
        <div className="cards-v3__card-content">
          <h3>2. Share with friends</h3>
          <ul>
            <li>Send emails</li>
            <li>Send text messages</li>
            <li>Share on social media</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=DWC2ClFUyvI"
                target="_blank"
                rel="noopener"
              >
                Watch a video tutorial
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cards-v3__card">
        <div className="cards-v3__card-icon-wrap">
          <img
            decoding="async"
            className="cards-v3__icon"
            alt="How GoFundMe Works"
            src="https://www.gofundme.com/c/wp-content/themes/sage-8.5.4/assets/svg/info-icons/dashboard.svg"
          />
        </div>
        <div className="cards-v3__card-content">
          <h3>3. Manage donations</h3>
          <ul>
            <li>Accept donations</li>
            <li>Thank donors</li>
            <li>Withdraw funds</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HIWSection;

