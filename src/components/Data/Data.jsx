import React from 'react'
import Div from '../Div'
import './data.scss'

export default function Data({data, variant, bgUrl}) {
  return (
    <Div className={variant?`cs-data_wrap_2 ${variant} cs-animate` : 'cs-data_wrap_2 cs-animate'}>
      {bgUrl && <div className="cs-data_shape" style={{backgroundImage:`url(${bgUrl})`}}></div>}
      <Div className="cs-data-content">
        {data.map((item, index) => (
          <Div key={index}>
            <Div className="cs-data cs-style2">
              <Div className="cs-data_number cs-primary_font cs-semi_bold cs-primary_color"><span className="odometer" />{item.factNumber}<span className="cs-plus">+</span></Div>
              <h3 className="cs-data_title">{item.title}</h3>
            </Div>
          </Div>
        ))}
      </Div>
    </Div>
  )
}
