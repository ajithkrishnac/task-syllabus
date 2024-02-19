'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './mainpage.css'

const Mainpage = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <Image src='/images/home.png' alt=".." width={400} height={360} />
      </div>
      <div className="text-container">
        <span className="title">For every student,</span><br />
        <span className="title">every classroom,</span><br />
        <span className="title">real results.</span><br />

        <span className="subtitle">We’re a nonprofit with the mission to provide </span><br />
        <span className="subtitle">a free, world-class education for anyone, </span><br />
        <span className="subtitle">anywhere.</span><br /><br />

        <button className="start-button">Start here</button>
      </div>
    </div>
  );
};

export default Mainpage;
