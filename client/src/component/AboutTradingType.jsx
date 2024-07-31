import React from "react";
import TradingTypeList from "./TradingTypeList";

import "../style/AboutTradingType.css";

export default function AboutTradingType() {
  return (
    <>
      <div className="main-type">
        <div className="heading-type">
          <p>Types of Trading</p>
        </div>
        <div className="type-list">
            {TradingTypeList.map((item, index) => {
              return (
                <>
                  <div class="card" style={{ width: "18rem" }} key={index}>
                    <div class="card-body">
                      <h5 class="card-title">{item.type}</h5>
                      <p class="card-text">{item.info}</p>
                    </div>
                  </div>
                </>
              );
            })}

        </div>
      </div>
    </>
  );
}
