import React from "react";
import "./PhotoCard.css";

// const PhotoCard = props => (
//     //need onclick event on className="card" - on click shuffle

//     <div className="card">

//         <div className="img-container">
//             <img alt={props.name} src={props.image} />
//         </div>
//         <div className="content">
//             Artist Name: {props.name}
//         </div>
//             <a onClick={() => props.setClicked(props.name)}>X</a>

//     </div>
// );


const PhotoCard = props => (
    //need onclick event on className="card" - on click shuffle

    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            Artist Name: {props.name}
        </div>
        <span onClick={() => props.setClicked(props.id)}></span>
    </div>
);




// (<div className="card" onClick={props.handleClick}>
// <div className="img-container">
//     <img alt={props.name} src={props.image} />
// </div>
// <div className="content">
//     Artist Name: {props.name}
// </div>
// </div>
// );


export default PhotoCard;
