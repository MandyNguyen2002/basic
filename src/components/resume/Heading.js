import React from "react";
import profile from "../../profile.jpg";

// class Heading extends React.Component {
//   render() {
//     return (
//       <div className="App-header">
//         <div className="text-container">
//           <h1>MANDY NGUYEN</h1>
//           <div className="sub-heading">
//             4105 Hamlin Ave · Chantilly, VA 20151 · (571) 259-0378 ·
//             <a href="mailto:name@email.com">tnguyen29@binghamton.edu</a>
//           </div>
//           <div className="about">
//             Junior year Computer Engineering student actively looking for an
//             internship/co-op position in Computer Engineering that will allow me
//             to apply my knowledge to benefit my workspace.
//           </div>
//           <div className="links">
//             <a
//               href="https://github.com/MandyNguyen2002"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//             <a
//               href="https://www.linkedin.com/in/mandy-tran-nguyen-2095812a9/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Linkedin
//             </a>
//           </div>
//         </div>

//         <img src={profile} alt="Profile" className="profile-pic" />
//       </div>
//     );
//   }
// }

// export default Heading;

export function Heading({ fullName }) {
  return (
    <div className="App-header">
      <div className="text-container">
        <h1>{fullName}</h1>
        <div className="sub-heading">
          4105 Hamlin Ave · Chantilly, VA 20151 · (571) 259-0378 ·
          <a href="mailto:name@email.com">tnguyen29@binghamton.edu</a>
        </div>
        <div className="about">
          Junior year Computer Engineering student actively looking for an
          internship/co-op position in Computer Engineering that will allow me
          to apply my knowledge to benefit my workspace.
        </div>
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
