import React from 'react'
import '../Education/Education.css'
import {education} from '../../assets/main.js'

const Education = () => {
  return (
    <div className='education'>
      <div className="head">
        <h2>Education</h2>
      </div>
      <div className="edu-list">
        {education.map((iteam, index) => {
          return (
            <>
              <div className="list-one" key={index}>
                <div className="one-data">
                  <img src={iteam.image} alt="helo" />
                  <div className="one-name">
                    <h4>{iteam.name}</h4>
                    <p>{iteam.class}</p>
                  </div>
                </div>
                <div className="dates">
                  <h6>{iteam.year}</h6>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Education
