import React from 'react'
import '../Skils/Skills.css'
import {skills} from '../../assets/main.js'

const Skills = ({active}) => {
  return (
    <div className='skills'>
      <div className="head">
        <h2>Skills</h2>
      </div>
      <div className="skills-list">
        <ul>
          {skills.map((iteam,index)=>{
            return(
              <>
              <li key={index} className={active==="footerpage"?"active":""}>{iteam}</li>
              </>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Skills
