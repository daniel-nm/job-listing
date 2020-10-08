import React from 'react';
import '../styles/components/Job.css';

function Job(props) {
  // Destructure props properties
  const { 
    company, 
    logo, 
    featured, 
    position, 
    role, 
    level, 
    postedAt, 
    contract, 
    location, 
    languages, 
    tools
  } = props.info;

  return (
    <div className="job">
      {/* Job information: company name / job title / job details */}
      <div className="job__info">
        <img src={logo} alt={company} className="job__info__img"/>
        <div>
          <p>
            <span className="job__info__company">{company}</span>
            {props.info.new && <span className="job__info__label job__info__new">New!</span>}
            {featured && <span className="job__info__label job__info__featured">Featured</span>}
          </p>
          <h1 className="job__info__title">
            <a href="#">{position}</a> 
          </h1>
          <p>
            <span className="job__info__details">{postedAt}</span>
            <span className="job__info__details">{contract}</span>
            <span className="job__info__details">{location}</span>
          </p>
        </div>
      </div>
      <hr/>
      {/* Job categories */}
      <div className="job__categories">
        <button value={role} className="job__categories__btn">{role}</button>
        <button value={level} className="job__categories__btn">{level}</button>
        {languages && languages.map((language, index) => <button value={language} key={index} className="job__categories__btn">{language}</button>)}
        {tools && tools.map((tool, index) => <button value={tool} key={index} className="job__categories__btn">{tool}</button>)}
      </div>
    </div>
  )
}

export default Job
