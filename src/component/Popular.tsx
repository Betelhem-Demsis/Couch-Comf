import React from "react";
import leatherImage from "../assets/image/leather.jpg"; 
import "../css/popular.css";
const NewSofa= [
  {
    image: leatherImage,
    name: "leather",
    price:"400$",
  },
  {
    image: leatherImage,
    name: "leather",
    price:"400$",
  },
  {
    image: leatherImage,
    name: "leather",
    price:"400$",
  },
  {
    image: leatherImage,
    name: "leather",
    price:"400$",
  },
];

export default function Popular() {
  return (
    <div className="sofa-main">
      <h2>Check out new released furnitures</h2>
      <div className="sofas" >
      {NewSofa.map((sofa, index) => (
     
          <div className="sofa" key={index}>
          <img src={sofa.image} alt="sofa" />
          <div className="name">
          <h3>{sofa.name}</h3>
          <h4>{sofa.price}</h4>
          </div>
          <div className="buttons">
          <button>
            <a href="">Add to cart🛒</a>
          </button>
          <button>Buy</button>
          </div>
          </div>
       
        ))}   
       </div>
    </div>
  );
}
