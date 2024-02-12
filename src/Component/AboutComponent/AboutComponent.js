import React from 'react'

import "./AboutComponent.css";

import character_1_image from './images/character_1_image.png';
import character_2_image from './images/character_2_image.png';

const AboutComponent = () => {
  return (
    <>
      <div id='About'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                  <picture className='about_image'>
                    <source srcSet={character_2_image} media='(max-width:767px)' className='img-fluid' />
                    <img src={character_1_image} alt="something" className='img-fluid' />
                  </picture>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div className='about_content'>
                      <h1>about me</h1>
                      <p>my brief introduction, I am a passionate software engineer. But I have more expertise in front-end development. as a Front-End developer with experience for building and maintaining responsive websites. I have about working knowledge of adobe Xd, and Figma.</p>
                      <ul className='aboutus_list'>
                        <li>name<span>ali raza</span></li>
                        <li>study<span>aptech leraning center</span></li>
                        <li>email<a href='mailto:alirazaa51412@gmail.com'>alirazaa51412@gmail.com</a></li>
                        <li>phone<a href='tel:+923032763693'>+92 303 276 3693</a></li>
                        <li>address<span href='https:'>baldia town karachi</span></li>
                      </ul>
                      {/* <div className='buttons'>
                        <a href='./pdf/aliraza_resume.pdf' download>download resume</a>
                        <a href='./pdf/aliraza_cover_letter.pdf' download>download cover letter</a>
                      </div> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutComponent;