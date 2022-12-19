import React from 'react'

// import CardComponent from './CardComponent';

const EduDetailsComponent = () => {

  let Education = [
    {
      id: '1',
      year: "2019 - 2022",
      edu_title: ">> Aptech computer learning",
      certificate: "Diploma ACCP (Prime)"
    },
    {
      id: '2',
      year: "2019",
      edu_title: "Intermediate",
      certificate: "Jinnah Government College"
    },
    {
      id: '3',
      year: "2016",
      edu_title: "Matriculation",
      certificate: "Ali childern secondary school"
    }
  ];
  return (
    <>
      {/* <CardComponent year={Education[0].year}
      tittle={Education[0].edu_title}
      certificate={Education[0].certificate} />

       <CardComponent year={Education[1].year}
      tittle={Education[1].edu_title}
      certificate={Education[1].certificate} />
      
       <CardComponent year={Education[2].year}
      tittle={Education[2].edu_title}
      certificate={Education[2].certificate} /> */}
    </>
  )
}
export default EduDetailsComponent;