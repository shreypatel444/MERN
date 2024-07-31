import React from 'react'
import "../style/TextHome.css"
import { useNavigate } from "react-router-dom";

export default function TextHome() {

  const navigate = useNavigate();

  return (
    <>
      <div className="main-text">
        <h1 className='heading'>Trading | Long term investment | F&O</h1>
        <p className='content-para'>Join us, make money, be rich.</p>
        <button type="button" class="btn btn-primary" onClick={()=>{navigate("/signup")}}>Join us</button>
      </div>
    </>
  )
}
