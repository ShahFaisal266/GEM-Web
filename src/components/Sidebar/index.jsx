import React from 'react';
import Div from '../Div';
import SearchWidget from '../Widget/SearchWidget';
import SideMenuWidget from '../Widget/SideMenuWidget';

export default function Sidebar() {
  const categoryData = [
    {
      title: 'Food',
      url:'/'
    },
    {
      title: 'Tech',
      url:'/'
    },
    {
      title: 'Health',
      url:'/'
    },
    {
      title: 'Money',
      url:'/'
    },
    {
      title: 'Work',
      url:'/'
    },
    {
      title: 'Parenting',
      url:'/'
    },
    {
      title: 'Home & Garden',
      url:'/'
    },
    {
      title: 'Entertainment',
      url:'/'
    },
    {
      title: 'Hollywood',
      url:'/'
    },
    {
      title: 'Bollywood',
      url:'/'
    },
    {
      title: 'Lollywood',
      url:'/'
    }
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
