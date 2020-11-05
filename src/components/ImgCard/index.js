
import React from "react"
import "./style.css";

function ImgCard() {
  return (
    <a href="https://linktr.ee/collectionband">
      <div className="card bg-light text-black">
        <img className="card-img" src="assets/images/beatiful-life.jpg" alt="Beatiful Life Acoustic Artwork" />
        <div className="card-img-overlay">
          <h5 className="card-title">Beautiful Life Acoustic Out Now!</h5>
          <p className="card-text">Listen here.</p>
        </div>
      </div>
    </a>
  )
}

export default ImgCard;