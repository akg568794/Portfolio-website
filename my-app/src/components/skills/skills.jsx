import React from "react";
import {skills} from '../../Data';
import './skills.css';
import shapeOne from '../../assets/shape-1.png';

const Skills = () =>{
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title text-cs">Professional Skills</h2>
            <p className="section__subtitle">
                My <span>Talent</span>
            </p>
            <div className="skills__container container grid">
                {skills.map(({name,percentage,description},index)=>
                {
                    return(
                        <div className="skills__item" key={index}>
                            <div className="skills__titles">
                                <h3 className="skills_name">{name}</h3>
                                <span className="skills__number">{percentage}<span>%</span></span>
                            </div>
                            <p className="skills_description"> {description}</p>
                            <p className="skills__bar">
                                <span className="skills__percentage" style={{width:`${percentage}%`}}><span></span></span>
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className="section__deco deco__left">
              <img src={shapeOne}  className="shape"/>
            </div>


        </section>
    )
}

export default Skills;