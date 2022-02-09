import React, { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css"

export default function Sidebar() {
  const [categories,setCategories] = useState([])

  useEffect(() =>{
    const getCategories = async () =>{
      const res = await axios.get("/categories")
      setCategories(res.data)
    }
    getCategories()
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">about me</div>
        <img
          src="https://media3.giphy.com/media/12q7JyfK1UolW0/giphy.gif"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit eum veritatis ducimus molestiae dolor unde. Ut minus
          vitae omnis vel tempora pariatur blanditiis hic, tempore
          necessitatibus, mollitia, sequi dolorem minima.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">categories</span>
        <ul className="sidebarList">
          {categories.map((category)=>(
            <li key={category._id} className="sidebarListItem">{category.name}</li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
