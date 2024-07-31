import React from "react";
import "../style/AboutInfo.css";

export default function AboutInfo() {
  return (
    <>
      <div className="main-info">
        <div className="trading-info">
          <p className="trading-heading">What is Trading?</p>
          <div className="trading-div">
          <p className="trading-para">
            Trading, in simple language, refers to buying and selling stocks,
            currencies, bonds, commodities, and other financial securities over
            a short period to earn profits. While traditional investing focuses
            on making long-term gains by holding assets, trading capitalises on
            market fluctuations in the short term.
          </p>
          </div>
        </div>
        <div className="trading-info">
          <p className="trading-heading">What is Long term investment?</p>
          <div className="trading-div">
          <p className="trading-para">
            A long-term investment is found on the asset side of a company's
            balance sheet, representing the company's investments, including
            stocks, bonds, real estate , and cash, that it intends to hold for
            more than a year.
          </p>
          </div>
        </div>
        <div className="trading-info">
          <p className="trading-heading">What in F&O?</p>
          <div className="trading-div">
          <p className="trading-para">
            A lucrative avenue for many, F&O trading, or derivative trading as
            it is popularly called, can help investors reap attractive returns
            by reasonably betting on the future price movements of different
            types of securities. This article delves into what F&O trading is,
            what its features and benefits are, and requirements towards
            performing F&O trade.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
