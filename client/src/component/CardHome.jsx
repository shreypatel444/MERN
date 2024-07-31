import React from "react";
import list from "./CardList";
import "../style/CardHome.css";
import {useNavigate} from "react-router-dom"

export default function CardHome() {

  const navigate = useNavigate();

  return (
    <>
      <div className="main-card">
        <div className="cards">
          {list.map((item, index) => {
            return (
              <>
                <div class="card" style={{ width: "18rem" }} key={index}>
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.content}</p>
                    <button className="btn btn-primary"> Know more</button>
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
