import React from "react";
import "./PhotoCard.css";

const PhotoCard = props => (
    //need onclick event on className="card"
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            Artist Name: {props.name}
        </div>
    </div>
);

export default PhotoCard;