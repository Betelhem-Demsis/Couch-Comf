import React from "react";

  
const NewSofa = [
  {
    image:"../assets/image/leather.jpg",
    name: "leather",
  },
  {
    image:"../assets/image/leather.jpg",
    name: "leather",
  },
  {
    image:"../assets/image/leather.jpg",
    name: "leather",
  },
  {
    image:"../assets/image/leather.jpg",
    name: "leather",
  },
];
export default function Popular() {
  return (
    <div>
      <h2>check out new released furnitures</h2>
      {NewSofa.map((sofa,index) => (
         <div className="sofa" key={index}>
         <img src={sofa.image} alt="sofa" />
         <h2>{sofa.name}</h2>
         <button>
           <a href="">add to cart</a>
         </button>
         <button>buy</button>
       </div>
      ))}
      
    </div>
  );
}
