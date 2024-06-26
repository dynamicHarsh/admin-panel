import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <>
      <div data-testid="updates-1" className="Completed_Activities">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
    
    </>
    
    
  );
};

export default Updates;
