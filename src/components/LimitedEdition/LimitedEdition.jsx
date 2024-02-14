import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./Limited.scss"
import lim1 from "./lim1.png"
import lim2 from "./lim2.png"
import lim3 from "./lim3.png"
import lim4 from "./lim4.png"

const LimitedEdition = () => {
  return (
    <div className="limited">
      <ProductCard
        imgUrl={lim1}
        category={"Dress"}
        title={"Hub Accent Mirror"}
        price={29}
        center={"img-center"}
      />
      <ProductCard
        imgUrl={lim2}
        category={"Dress"}
        title={"Husking Blue Area Rug"}
        price={62}
        center={"img-center"}
      />
      <ProductCard
        imgUrl={lim3}
        category={"Dress"}
        title={"Husking Blue Area Rug"}
        price={62}
        center={"img-center"}
      />
      <ProductCard
        imgUrl={lim4}
        category={"Dress"}
        title={"Cushion Futon Slipcover"}
        price={129}
        center={"img-center"}
      />
    </div>
  )
}

export default LimitedEdition
