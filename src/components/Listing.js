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

  // Filter job list by selected categories
  useEffect(() => {
    // If there are filtered categories, apply logic
    if(categories.length) {
      let listing;
      categories.forEach((item) => {
        listing = jobListing.filter((job) => {
          return job.role === item || job.level === item || job.languages.includes(item) || job.tools.includes(item);
        });
      });
      setJobListing(listing);
    }
    // Otherwise, reset list to initial status
    else {
      setJobListing(jobs);
    }
  }, [categories]);

  // Removes a category from the array
  const removeClick = (e) => {
    // Create new array with categories
    let newCategories = [...categories];
    // Find index of item
    const index = newCategories.indexOf(e.target.value);
    // If item exists
    if(index !== -1) {
      // Remove item from array
      newCategories.splice(index, 1);
      // Set new list of categories
      setCategories(newCategories);
      // Update the jobs list
      setJobListing(jobs);
    }
  }

  // Clears all categories
  const clearFilters = () => {
    setCategories([]);
    setJobListing(jobs);
  }

  return (
    <section className="listing container">
      {categories.length > 0 &&
        <div className="filters">
          <div className="filters__categories">
            {categories.map((category, index) => (
              <button value={category} className="filters__btn" key={index} onClick={removeClick}>{category} <span className="filters__icon"><RemoveIcon /></span></button>
            )
            )}
          </div>
          <button className="filters__clear" onClick={clearFilters}>Clear</button>
        </div>
      }
      <div className={categories.length > 0 ? 'jobs__with__filter' : 'jobs__no__filter'}>
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
