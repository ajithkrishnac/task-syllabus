'use client'
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import './syllabus.css';

//component for displaying syllabus
const Syllabuses = () => {
  //state to hold the syllabus
  const [syllabus, setSyllabus] = useState([]);
  const [showProfileDropdown, setShowProfileDropdown] = useState({});

  //fetch syllabus from api
  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        //fetch data from '/api/syllabus endpoint
        const response = await axios.get('/api/syllabus');
        //set the fetched data to the state
        setSyllabus(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    //calling the function
    fetchSyllabus();
  }, []); // Empty dependency array to only run once when the component mounts

  // Render the list of syllabuses
  return (
    <ul className="syllabus-list">
       {/* Map through the syllabus array and render each syllabus */}
      {syllabus.map((syllabusItem) => (
        <li key={syllabusItem.id} className="syllabus-item">
          <div className="syllabus-image-container">
             {/* Render the syllabus image if imageUrl is present */}
            {syllabusItem.imageUrl && (
              <img
                src={`/images/${syllabusItem.imageUrl}`}
                alt={syllabusItem.name}
                className="syllabus-image"
              />
            )}
          </div>
          <div className="syllabus-info">
            {syllabusItem.name}
          </div>
          <div className="syllabus-dropdown">
            {/* Dropdown component for additional actions */}
            <Dropdown
              show={showProfileDropdown[syllabusItem.id]}
              onSelect={() =>
                setShowProfileDropdown({
                  ...showProfileDropdown,
                  [syllabusItem.id]: !showProfileDropdown[syllabusItem.id],
                })
              }
              style={{ position: 'relative', bottom: 0, width: '100%' }}
            >
              {/* Toggle button for the dropdown */}
              <Dropdown.Toggle
                variant="link"
                id={`dropdown-${syllabusItem.id}`}
                style={{ color: 'black', fontSize: '20px' }}
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                {/* dropdown according to selected syllabus */}
                {syllabusItem.dropdownItems.map((item, index) => (
                  <Dropdown.Item key={index}>{item}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Syllabuses;