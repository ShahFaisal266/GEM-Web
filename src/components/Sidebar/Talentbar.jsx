import React from "react";
import Div from "../Div";
import RecentPost from "../Widget/RecentPost";
import Subscription from "./Subscription";

export default function Talentbar() {
  const recentNewsData = [
    {
      title: "How to studio setup...",
      thumb: "/images/recent_post_1.jpeg",
      href: "/news/news-details",
      date: "15 Aug 2022",
    },
    {
      title: "Creative people mind...",
      thumb: "/images/recent_post_2.jpeg",
      href: "/news/news-details",
      date: "14 Aug 2022",
    },
    {
      title: "AI take over human...",
      thumb: "/images/recent_post_3.jpeg",
      href: "/news/news-details",
      date: "13 Aug 2022",
    },
    {
      title: "You should now add...",
      thumb: "/images/recent_post_4.jpeg",
      href: "/news/news-details",
      date: "12 Aug 2022",
    },
  ];

  const recentEventsData = [
    {
      title: "How to studio setup...",
      thumb: "/images/recent_post_1.jpeg",
      href: "/events/events-details",
      date: "15 Aug 2022",
    },
    {
      title: "Creative people mind...",
      thumb: "/images/recent_post_2.jpeg",
      href: "/events/events-details",
      date: "14 Aug 2022",
    },
    {
      title: "AI take over human...",
      thumb: "/images/recent_post_3.jpeg",
      href: "/events/events-details",
      date: "13 Aug 2022",
    },
    {
      title: "You should now add...",
      thumb: "/images/recent_post_4.jpeg",
      href: "/events/events-details",
      date: "12 Aug 2022",
    },
  ];
  return (
    <>
      <Div className="cs-talentbar_item">
        <Div className="cs-sidebar_item">
          <RecentPost title="Latest News" data={recentNewsData} />
        </Div>
       <Div className="bar-space"/>
        <Div className="cs-sidebar_item">
          <RecentPost title="Latest Events" data={recentEventsData} />
        </Div>
        <Div className="bar-space"/>
        <Div className="cs-sidebar_item">
          <Subscription/>
        </Div>

      </Div>
    </>
  );
}
