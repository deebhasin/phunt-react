import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="left">
        <div className="icon">
          <img src={props.icon} alt="" className="logo" />
        </div>

        <div className="details">
          <div className="name">
            <a href={props.url} target="_blank" rel="noreferrer">
              {props.name}
            </a>
          </div>
          <div className="heading">{props.shortDesc}</div>
        </div>
      </div>
      <div className="upvote">{props.upvotes}</div>
    </div>
  );
}
