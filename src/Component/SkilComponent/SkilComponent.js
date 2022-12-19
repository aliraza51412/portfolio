import React from 'react'

import './SkilComponent.css';

const SkilComponent = () => {
  return (
    <>
      <div id='Skill'>
        <div className='container'>
            <div className='skill_content'>
              <h1>skill</h1>
                <div className='grid'>
                    <img className='img-fluid' src='./images/html5.png' alt='#' />
                    <img className='img-fluid' src='./images/css.png' alt='#' />
                    <img className='img-fluid' src='./images/js.png' alt='#' />
                    <img className='img-fluid' src='./images/bootstrap5.png' alt='#' />
                    <img className='img-fluid' src='./images/jquery.png' alt='#' />
                    <img className='img-fluid' src='./images/reactjs.png' alt='#' />
                    <img className='img-fluid' src='./images/xd.png' alt='#' />
                    <img className='img-fluid' src='./images/figma.png' alt='#' />
                    <img className='img-fluid' src='./images/php.png' alt='#' />
                    <img className='img-fluid' src='./images/mysql.png' alt='#' />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SkilComponent;