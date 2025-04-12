import React from "react";
import "./App.css";

function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <img src={props.cardData.avatar} className="avatar" />
          <div className="name-box">
            <p>{props.cardData.name}</p>
            <p>
              <b>{props.cardData.skillBrainPosition}</b>,{" "}
              {props.cardData.actualJob}
            </p>
          </div>
        </div>
        <p className="card-text">{props.cardData.shortDescription}</p>
        <div className="link-area">
          <a
            href={props.cardData.socialMediaLinks.gitHub}
            target="_blank"
            className="btn btn-primary"
          >
            <img src={require("./images/github.png")} />
          </a>
          <a
            target="_blank"
            href={props.cardData.socialMediaLinks.linkedIn}
            className="btn btn-primary"
          >
            <img src={require("./images/linkedin.png")} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
