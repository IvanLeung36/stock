import React from 'react'

function Sidebar() {
  return (
    <div
    className="w3-sidebar w3-bar-block w3-black w3-xxlarge"
    style={{ width: "70px" }}
  >
    <a href="/" className="w3-bar-item w3-button">
      <i className="fa fa-home"></i>
    </a>
    <a href="/search" className="w3-bar-item w3-button">
      <i className="fa fa-search"></i>
    </a>
  </div>
  )
}

export default Sidebar