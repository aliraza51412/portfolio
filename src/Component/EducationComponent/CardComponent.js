import React from 'react'
import { ReactDOM } from 'react-dom'

export default function CardComponent(props) {
  return (
    <div>
      <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='edu_content'>
                <h4>{props.year}</h4>
                <p>{props.tittle} <span>{props.certificate}</span></p>
            </div>
        </div>
    </div>
  )
}
