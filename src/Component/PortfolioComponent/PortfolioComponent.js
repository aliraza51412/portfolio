import React from 'react'

import "./PortfolioComponent.css";

const PortfolioComponent = () => {
  return (
    <>
      <div id='Portfolio'>
        <div className='container'>
            <h1>protfolio</h1>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className='protfolio_content'>
                      <div className='content'>
                        <img src='./images/realestateimage.png' alt='s' className='img-fluid' />
                        <div className='overlay'>
                          <a href='https://aliraza51412.github.io/realestate/' target="_blank" rel='noopener noreferrer'>visit website</a>
                        </div>
                      </div>
                      <h5>real estate project</h5>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className='protfolio_content'>
                      <div className='content'>
                        <img src='./images/weatherapp.png' alt='s' className='img-fluid' />
                        <div className='overlay'>
                          <a href='https://aliraza51412.github.io/weather-app/' target="_blank" rel='noopener noreferrer'>visit website</a>
                        </div>
                      </div>
                      <h5>Weather app project</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default PortfolioComponent;