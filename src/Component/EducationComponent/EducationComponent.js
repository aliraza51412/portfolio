import React from 'react';

import "./EducationComponent.css";

const EducationComponent = () => {
  
  return (
    <>
     <div id='Education'>
      <div className='container'>
        <h1>education</h1>
        <div className='row'>
          
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='edu_content'>
              <h4>2019 - 2022</h4>
              <p>{">>"} Aptech computer learning<span>Diploma ACCP (Prime)</span></p>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
          <div className='edu_content'>
              <h4>2019</h4>
              <p>{">>"} Intermediate <span>Jinnah Government College</span></p>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='edu_content'>
              <h4>2016</h4>
              <p>{">>"} Matriculation <span>Ali childern secondary school</span></p>
            </div>
          </div>

        </div>
      </div>
     </div>
    </>
  )
}
export default EducationComponent;