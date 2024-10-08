import React from 'react'
import '../Projects/Project.css'
import { projects } from '../../assets/main.js'

const Project = ({active}) => {
    return (
        <div className='project'>
            <div className="head">
                <h2 className={active==="footerpage"?"active":""}>My Project's</h2>
                <h3>Check out my Latest Work</h3>
                <p>I'v Worked on a variety of projects, from simple website to complex web applications. Here are a few of my favorites.</p>
            </div>
            <div className="project-list">
                {projects.map((iteam, index) => {
                    return (
                        <div className={active==="footerpage"?"one-list active":"one-list"} key={index}>
                            <img src={iteam.image} alt="hello" />
                            <div className='info'>
                                <h3>{iteam.title}</h3>
                                <p>{iteam.discreption}</p>
                            </div>
                            <div className="tools">
                                {iteam.tools.map((iteam, index) => {
                                    return (
                                        <h5 key={index}>{iteam}</h5>
                                    )
                                })}
                            </div>
                            <div className="links">
                                <div className="git">
                                    <a href={iteam.github}>GitHub</a>
                                </div>
                                <div className="git">
                                    <a href={iteam.webiste}>Website</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
