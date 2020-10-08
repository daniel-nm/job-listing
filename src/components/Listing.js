import React, { useState, useEffect } from 'react';
import '../styles/layout.css';
import '../styles/components/Listing.css';
import {ReactComponent as RemoveIcon} from '../images/icon-remove.svg';
import Job from './Job';

// Import JSON data
import { jobs } from '../data';

function Listing() {

  // Set job list initial status
  const [jobListing, setJobListing] = useState([]);
  
  useEffect(() => {
    setJobListing(jobs);
  }, []);

  // Set categories initial status
  const [categories, setCategories] = useState([]);

  // Adds a new category to the filtered categories array 
  const addFilteredCategory = (item) => {
    if(!categories.includes(item)) {
      setCategories(categories => [...categories, item]);
    }
  }

  return (
    <section className="listing container">
      <div>
        {jobListing.length > 0 && jobListing.map((job) => {
            return (
              <Job info={job} key={job.id} onCategory={addFilteredCategory}/>
            )
          })}
      </div>
    </section>

  )
}

export default Listing
