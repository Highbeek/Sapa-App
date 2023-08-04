import React, { useState } from "react";
import SapaVideo from "../components/SapaVideo";
import "./Howitworks.css";
import HIWSection from "../components/HIWSection";
import { FaUserFriends } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HowItWorks = () => {
  const [selectedId, setSelectedId] = useState(0);

  const items = [
    {
      id: 1,
      subtitle: "Fast and safe",
      title:
        "Millions trust Sapa as the #1 Naija online fundraising expert. That’s why more people start fundraisers on Sapa than any other platform",
    },
  ];

  return (
    <div className="howItWorks">
      <div className="hiw__header">
        <h1>How saPA Works</h1>
        <p>
          SaPA is the best place to fundraise, whether you are an individual,
          group, or organization
        </p>
      </div>
      <div className="works__vid">
        <SapaVideo />
      </div>
      <section className="hiw__steps">
        <div className="hiw__cards">
          <motion.div
            layoutId="card1"
            onClick={() => setSelectedId(selectedId === 1 ? 0 : 1)}
          >
            <HIWSection
              iconUrl={<FaHandHoldingUsd style={{ color: " #ffff00" }} />}
              title="1.Start Here"
              bulletPoints={[
                "Set your endSapa goal",
                "Tell your story",
                "Add a picture or video",
              ]}
            />
          </motion.div>
          <motion.div
            layoutId="card2"
            onClick={() => setSelectedId(selectedId === 2 ? 0 : 2)}
          >
            <HIWSection
              iconUrl={<FaUserFriends style={{ color: " #ffff00" }} />}
              title="2.Share with your friends"
              bulletPoints={[
                "Send emails",
                "send text messages",
                "Share on social media",
              ]}
            />
          </motion.div>
          <motion.div
            layoutId="card3"
            onClick={() => setSelectedId(selectedId === 3 ? 0 : 3)}
          >
            <HIWSection
              iconUrl={<FaDonate style={{ color: " #ffff00" }} />}
              title="3.Manage donations"
              bulletPoints={[
                "Accept donations",
                "Thank donors",
                "Withdraw funds",
              ]}
            />
          </motion.div>
        </div>
        <div className="bttn hiw__btn">
          <p>end Sapa</p>{" "}
        </div>
      </section>
      <div className="hiw__records">
        <p className="hiw-rec">
          This website rocks! I raised close to <span>&#8358;</span>150,000 in
          less than 48 hours for my <br /> friend's medical needs, and your
          customer service was so prompt and <br /> helpful.”
        </p>
        <div className="hiw__img">
          <img
            src="https://previews.123rf.com/images/warrengoldswain/warrengoldswain1611/warrengoldswain161100112/65513823-portrait-of-real-black-african-woman-with-no-expression-id-or-passport-photo-full-collection-of.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="user">
          <h3>Highbee</h3>
          <p>
            Raised <span>&#8358;</span>200,000 on{" "}
            <span className="hiw__record__brand">Sapa</span>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== 0 && (
          <motion.div
            className="hiw__service"
            layoutId={`card${selectedId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div>
              <h3>{items[0].subtitle}</h3>
            </motion.div>
            <motion.p>{items[0].title}</motion.p>
            <motion.button onClick={() => setSelectedId(0)}>
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hiw__service">
        <div className="hiw__services">
          <div>
            <h3 onClick={() => setSelectedId(selectedId === 1 ? 0 : 1)}>
              Fast and safe
            </h3>
          </div>
          <p>
            Millions trust{" "}
            <span
              style={{ color: "#ffff00", fontWeight: 600, fontStyle: "italic" }}
            >
              Sapa
            </span>{" "}
            as the #1 Naija online fundraising expert. That’s why more people
            start fundraisers on{" "}
            <span
              style={{ color: "#ffff00", fontWeight: 600, fontStyle: "italic" }}
            >
              Sapa
            </span>{" "}
            than any other platform
          </p>
        </div>
        <div>
          <button className="bttn hiw__service__btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
