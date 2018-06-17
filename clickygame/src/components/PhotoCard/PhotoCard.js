import React from "react";
import "./PhotoCard.css";

const PhotoCard = props => (
    <div className="container">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            Artist Name: {props.name}
        </div>
    </div>
);

export default PhotoCard;