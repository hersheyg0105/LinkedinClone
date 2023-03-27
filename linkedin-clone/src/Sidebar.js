import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

  const recentItem = topic => (
    <div className="sidebar__recentItem">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )


  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18536/5bad272ce24d9ce3b6b76a78ada6fa7b/abstract-pyrimid-upsplash.png?w=900&h=225&q=90&fm=png" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Harshit Gupta</h2>
            <h4>hersheyg0105@gmail.com</h4>
        </div>


        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2543</p>
            </div>

            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2543</p>
            </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent </p>
          {recentItem("React.js")}
          {recentItem("SoftwareEngineering")}
          {recentItem("Linkedin")}
          {recentItem("WebDevelopment")}
          {recentItem("Programming")}
          {recentItem("Design")}
          {recentItem("Development")}

        </div>
    </div>
  )
}

export default Sidebar