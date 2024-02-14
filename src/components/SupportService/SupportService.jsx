import React from "react"
import "./SupportService.scss"
const SupportService = ({ img, serviceName, service }) => {
  return (
    <div className="support">
      <img src={img} alt="" />
      <h5>{serviceName}</h5>
      <p>{service}</p>
    </div>
  )
}

export default SupportService
