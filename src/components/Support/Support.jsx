import React from "react"
import SupportService from "../SupportService/SupportService"
import sup1 from "./sup1.svg"
import sup2 from "./sup2.svg"
import sup3 from "./sup3.svg"
import "./Support.scss"

const Support = () => {
  return (
    <div className="supports">
      <SupportService
        img={sup1}
        serviceName={"FAST AND FREE DELIVERY"}
        service={"Free delivery for all orders over $140"}
      />
      <SupportService
        img={sup2}
        serviceName={"24/7 CUSTOMER SUPPORT"}
        service={"Friendly 24/7 customer support"}
      />
      <SupportService
        img={sup3}
        serviceName={"MONEY BACK GUARANTEE"}
        service={"We return money within 30 days"}
      />
    </div>
  )
}

export default Support
