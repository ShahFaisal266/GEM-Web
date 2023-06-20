import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog/blog-details', 
      src:'/images/book_talent.png', 
      alt:'Post',  
      title:'BOOK A TALENT'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/sell_services.jpeg', 
      alt:'Post', 
      title:'SELL YOUR SERVICES'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/sell_services.jpeg', 
      alt:'Post', 
      title:'CREATIVE COLLABORATIONS'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/sell_services.jpeg', 
      alt:'Post', 
      title:'PITCH YOUR FILM PROJECTS'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/sell_services.jpeg', 
      alt:'Post', 
      title:'SIGN TALENT & CREATORS'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/book_talent.png', 
      alt:'Post', 
      title:'SUPPORT NEW TALENT'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
