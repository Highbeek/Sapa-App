import React from "react";
import "./EndSapa.css";

function EndSapa(props) {
  return (
    <section className="end__sapa">
      <div className="end__sapa__links">
        <div className="card">
          <div className="icon__container">
            <img src={props.icon} alt="icon" />
          </div>
          <h2>{props.text}</h2>
        <button className="send__btn">
          <img src={props.img} alt="img" />
        </button>
        </div>
      </div>
    </section>
  );
}

export default EndSapa;
