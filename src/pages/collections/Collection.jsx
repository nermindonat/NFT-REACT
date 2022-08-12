import React from "react";
import './collection.css'

const Collection = () => {
  return (
    <div className="card-wrapper">
      <div className="collection-card">
        <div className="collection-body">
          <img className="collection-image" src="/assets/images/girl.jpeg" alt="" />
          <h2 className="collection-title">Girl</h2>
          <div className="col-price">
            <span className="collection_price">Price</span>
            <span className="collection_value">5 BNB</span>
          </div>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-body">
          <img className="collection-image" src="/assets/images/minions.png" alt="" />
          <h2 className="collection-title">Minions</h2>
          <div className="col-price">
            <span className="collection_price">Price</span>
            <span className="collection_value">5 BNB</span>
          </div>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-body">
          <img className="collection-image" src="/assets/images/minions.png" alt="" />
          <h2 className="collection-title">Minions</h2>
          <div className="col-price">
            <span className="collection_price">Price</span>
            <span className="collection_value">5 BNB</span>
          </div>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-body">
          <img className="collection-image" src="/assets/images/girl.jpeg" alt="" />
          <h2 className="collection-title">Girl</h2>
          <div className="col-price">
            <span className="collection_price">Price</span>
            <span className="collection_value">5 BNB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
