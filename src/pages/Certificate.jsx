import React, { useState } from 'react';
import './Certificate.css';

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    img: "/images/aws.png"
  },
  {
    title: "Machine Learning - MATLAB ",
    img: "/images/matlab.png"
  },
  {
    title: "MATLAB onramp - MATLAB",
    img: "/images/cyber.png"
  },
  {
    title: "Agile for Software Development: Lean, Agile, & Scrum Methodologies - Infosys Springboard",
    img: "/images/agile.png"
  },
  {
    title: "Agile XP (Xtreme Programming) - Infosys Springboard",
    img: "/images/agile XP.png"
  },
  {
    title: "Database Management System - Infosys Springboard",
    img: "/images/DBMS.png"
  },
  {
    title: "Introduction to Cyber Security - Simplilearn",
    img: "/images/SL.png"
  },
  {
    title: "Human Computer Interaction (In English) - NPTEL",
    img: "/images/human computer.png"
  },
  {
    title: "APrivacy and Security in Online Social Media - NPTEL",
    img: "/images/privacy.png"
  }
];

const Certificate = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="certificates-page">
      <h2>My Certifications</h2>
      <div className="cert-list">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-item" onClick={() => setSelected(cert.img)}>
            {cert.title}
          </div>
        ))}
      </div>

      {selected && (
        <div className="popup" onClick={() => setSelected(null)}>
          <img src={selected} alt="Certificate Preview" />
        </div>
      )}
    </div>
  );
};

export default Certificate;
