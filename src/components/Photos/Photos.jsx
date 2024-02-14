import React from "react"
import ph1 from "./ph1.png"
import ph2 from "./ph2.png"
import ph3 from "./ph3.png"
import ph4 from "./ph4.png"
import ph5 from "./ph5.png"
import ph6 from "./ph6.png"
import ph7 from "./ph7.png"
import ph8 from "./ph8.png"
import ph9 from "./ph9.png"
import ph10 from "./ph10.png"
import ph11 from "./ph11.png"
import "./Photos.scss"
const Photos = () => {
  return (
    <div className="photos">
      <div className="photo">
        <img src={ph1} alt="" />
      </div>
      <div className="photo">
        <img src={ph2} alt="" />
      </div>
      <div className="photo">
        <img src={ph3} alt="" />
      </div>
      <div className="photo">
        <img src={ph4} alt="" />
      </div>
      <div className="photo">
        <img src={ph5} alt="" />
      </div>
      <div className="photo">
        <img src={ph6} alt="" />
      </div>
      <div className="photo">
        <img src={ph7} alt="" />
      </div>
      <div className="photo">
        <img src={ph8} alt="" />
      </div>
      <div className="photo">
        <img src={ph9} alt="" />
      </div>
      <div className="photo">
        <img src={ph10} alt="" />
      </div>
      <div className="photo">
        <img src={ph11} alt="" />
      </div>
      <div className="photo">
        <p>SEE MORE</p>
        <img src="./Vector.svg" alt="nnn" className="photo-icon" />
      </div>
    </div>
  )
}

export default Photos
