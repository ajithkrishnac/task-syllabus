'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Mainpage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "20rem" }}> 
        <Image
          src='/images/home.png'
          alt=".."
          width={400}
          height={360}
        />
      </div>
      <div style={{ textAlign: "left",  fontFamily: "Arial", marginTop: "3rem" }}>
        
        <span style={{ display: "inline-block", textAlign: "center", fontWeight: "bold" ,fontSize: "2rem", }}>For every student,</span><br/>
        <span style={{ display: "inline-block", textAlign: "center", fontWeight: "bold" , fontSize: "2rem", }}>every classroom,</span><br/>
        <span style={{ display: "inline-block", textAlign: "center", fontWeight: "bold" , fontSize: "2rem", }}>real results.</span><br/>
        
        
        <span style={{ display: "inline-block", textAlign: "center" , fontSize: "1.3rem" }}>We’re a nonprofit with the mission to provide </span><br/>
        <span style={{ display: "inline-block", textAlign: "center" , fontSize: "1.3rem" }}>a free, world-class education for anyone, </span><br/>
        <span style={{ display: "inline-block", textAlign: "center" , fontSize: "1.3rem" }}>anywhere.</span><br/><br/>

        <button style={{ backgroundColor: "#1165ed", color: "white", padding: "10px 20px", fontSize: "1.2rem", borderRadius: "3px" }}>Start here</button>

      </div>
      
</div>
  )
}

export default Mainpage