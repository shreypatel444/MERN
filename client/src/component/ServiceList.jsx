import React, { useState } from "react";
import Services from "./Serviceorder";
import "../style/ServiceList.css";

export default function ServiceList() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="search_main">
        <div className="search_area">
          <input
          className="searchBar"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="main_service">
        <div className="services">
          {Services.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          }).map((item, index) => {
            return (
              <>
                <div class="card" style={{ width: "18rem", margin : "3px" }} key={index}>
                  <img src={item.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <a href={item.src} class="btn btn-primary" target="blank">
                      Go
                    </a>
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
