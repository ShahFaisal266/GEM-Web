import React from 'react'
import Div from '../Div'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'

export default function Eventbar() {

  const categoryData = [
    {
      title: 'Muscial Concerts',
      url:'/'
    },
    {
      title: 'Festivals & Fairs',
      url:'/'
    },
    {
      title: 'Dance Event',
      url:'/'
    },
    {
      title: 'Theatre',
      url:'/'
    },
    {
      title: 'Dancing 2023',
      url:'/'
    },
    {
      title: 'All',
      url:'/'
    },
  ]

  return (
    <>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
    </>
  )
}
