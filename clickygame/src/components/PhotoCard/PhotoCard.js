import React from "react";
import "./PhotoCard.css";

const PhotoCard = props => (
    //need onclick event on className="card" - on click shuffle

    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            Artist Name: {props.name}
        </div>
        <a onClick={() => props.setClicked(props.artist)}></a>
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

// const DogCard = props => (
//     <div className="card">
//         <div className="img-container">
//             <a onClick={() => props.selectDog(props.breed)} 
//                 className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
//             >
//                 <img alt={props.breed} src={props.image} />
//             </a>
//         </div>
//     </div>
// );

{/* <a onClick={() => props.selectDog(props.breed)}></a> */}