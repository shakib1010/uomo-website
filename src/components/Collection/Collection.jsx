import React from 'react'
import './Collection.scss'

const Collection = () => {
  return (
    <>
      <div className="collection">
        <div className="collection-left">
          <p>HOT LIST</p>
          <h4>
            WOMEN
            <span>COLLECITON</span>
          </h4>
          <a href="">SHOP NOW</a>
        </div>
        <div className="collection-right">
          <div className="collection-right_top">
            <p>HOT LIST</p>
            <h4>
              WOMEN
              <span>COLLECITON</span>
            </h4>
            <a href="">SHOP NOW</a>
          </div>
          <div className="collection-right_bot">
            <div className="collection-right_bot-left">
              <p>HOT LIST</p>
              <h4>
                WOMEN
                <span>COLLECITON</span>
              </h4>
              <a href="">SHOP NOW</a>
            </div>
            <div className="collection-right_bot-right">
              <h4>
                E-GIFT
                <span>CARDS</span>
              </h4>
              <p>Surprice someone with the gift they really want.</p>
              <a href="">DISCOVER MORE</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection
