import React from "react";
// import resume from "../../assets/files/Resume.pdf";
import resume from "../assets/files/Resume.pdf";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h1>Resume</h1>
      <p>
        Download my resume{" "}
        <a href={resume} download>
          here
        </a>
      </p>
      <div className="proficiencies">
        <strong>Front end proficiences</strong>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="proficiencies">
        <strong>Back end proficiences</strong>
        <ul>
          <li>MONGODB</li>
          <li>SQL</li>
          <li>Express.js</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;






// import React, { Component } from 'react';
// export default  class Resume extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     return (
//       <section id="resume">

        
        


//          <div className="row skill">

//             <div className="three columns header-col">
//                <h1><span>Skills</span></h1>
//             </div>

//             <div className="nine columns main-col">

//                <p>
//                {resumeData.skillsDescription}
//                </p>

//    				<div className="bars">

//    				   <ul className="skills">
//                 {
//                   resumeData.skills && resumeData.skills.map((item) => {
//                     return(
//                       <li>
//                       <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
//                       </span><em>{item.skillname}</em>
//                       </li>
//                     )
//                   })
//                 }

//    					</ul>

//    				</div>

//    			</div>

//          </div>

//       </section>
//     );
//   }
// }