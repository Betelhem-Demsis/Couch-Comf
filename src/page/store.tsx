import React from 'react'
import leatherImage from "../assets/image/leather.jpg"; 
import "../css/store.css";
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
function Store() {
  return (
    <div className="store">
      <h2>Catagories</h2>
      <div className="catag">
      <button>L-shape</button>
      <button>leather</button>
      <button>Chaise Lounge</button>
      <button>Tuxedo Sofa</button>
      <button>Sectional Sofa</button>
      </div>
    <div className="sofa-main">
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
      </div>
  )
}

export default Store
