import React from 'react'
import parse from 'html-react-parser';
import Button from '../Button'
import Div from '../Div';
import Spacing from '../Spacing';

export default function QuickLinks({subtitle, btnLink, btnText, variant, children}) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
       <h3 className="cs-section_subtitle">{parse(subtitle)}</h3>
      {children}
      {btnText && (
        <>
          <Button btnLink={btnLink} btnText={btnText}/>
          <Spacing lg="45" md="30"/>
        </>
      )}
    </Div>
  )
}
