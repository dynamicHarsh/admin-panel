import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
    
    {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            
            <Card
              labels={card.labels}
              datasets={card.datasets}
              
            />
          </div>
        );
      })}
    
     
    </div>
  );
};

export default Cards;
