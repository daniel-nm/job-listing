import React, { useState, useEffect } from 'react';
import '../styles/layout.css';
import '../styles/components/Listing.css';
import {ReactComponent as RemoveIcon} from '../images/icon-remove.svg';

// Import JSON data
import { jobs } from '../data';

function Listing() {

  // Set job list initial status
  const [jobListing, setJobListing] = useState([]);
  
  useEffect(() => {
    setJobListing(jobs);
  }, []);


  return (
    <div>
      {jobListing.length > 0 && jobListing.map((job) => {
          return (
            <p>Test</p>
          )
        })}
    </div>
  )
}

export default Listing
