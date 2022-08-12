import React from "react";
import './collection.css'

const Collection = () => {
  return (
    <div className="card-wrapper">
      <div className="collection-card">
        <div className="collection-body">
          <img className="collection-image" src="/assets/images/girl.jpeg" alt="" />
          <h2 className="collection-title"></h2>
          <span>5</span>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-body">
          <img className="collection-image" src="/assets/images/minions.png" alt="" />
          <h2 className="collection-title"></h2>
          <span>5</span>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-body">
          <img className="collection-image" src="/assets/images/skylar.png" alt="" />
          <h2 className="collection-title"></h2>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
