import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Pizza Town, we believe that every slice tells a story. 
        Established in 1995, our family-owned pizzeria has been serving the community with passion and dedication, 
        crafting delicious pizzas made from the freshest ingredients. 
        Our secret lies in our time-honored recipes, homemade dough, 
        and a unique blend of spices that create an unforgettable flavor. 
        Whether you are enjoying a classic Margherita, indulging in a loaded Meat Lover's, or 
        savoring one of our specialty gourmet pizzas, 
        every bite at Pizza Town is a testament to our commitment to quality and taste. 
        We pride ourselves on creating a warm, 
        welcoming atmosphere where friends and families can come together to share a meal and create memories. 
        Join us at Pizza Town, where tradition meets taste, and experience the joy of a perfect pizza.
        </p>
      </div>
    </div>
  );
}

export default About;
