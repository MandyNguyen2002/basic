import React from "react";
import profile from "../../profile.jpg";

export function Heading({ fullName, about, address }) {
  return (
    <div className="App-header">
      <div className="text-container">
        <h1>{fullName}</h1>
        <div className="sub-heading">
          {address} · (571) 259-0378 ·
          <a href="mailto:name@email.com">tnguyen29@binghamton.edu</a>
        </div>
        <div className="about">{about}</div>
        <div className="links">
          <a
            href="https://github.com/MandyNguyen2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mandy-tran-nguyen-2095812a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
      <img src={profile} alt="Profile" className="profile-pic" />
    </div>
  );
}
