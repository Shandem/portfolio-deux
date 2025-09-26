import React, { useState, useRef, useEffect } from "react";
import "./card.scss"; // Import CSS file

const Card = ({ title, technologies, image, siteLink, codeLink }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`card ${expanded ? "expanded" : ""}`} 
      onClick={() => setExpanded(true)}
    >
      <div className="card-content">
        <div className="card-left">
          <h3>{title}</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="card-right">
          <div className="image-container">
            <img src={image} alt={title} />
            <div className="overlay">
              <a href={siteLink} target="_blank" rel="noopener noreferrer" className="bubble">🌍 Site</a>
              <a href={codeLink} target="_blank" rel="noopener noreferrer" className="bubble">💻 Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;