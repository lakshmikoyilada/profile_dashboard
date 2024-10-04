import React from 'react';

const Education = () => {
  return (
    <div className="education-section">
      <h2>Education</h2>
      <button>Edit Education</button>
      <form>
        <label>Qualification: </label>
        <input type="text" placeholder="Bachelor's" />
        <label>Degree: </label>
        <input type="text" placeholder="Computer Science" />
        <label>Duration: </label>
        <input type="text" placeholder="2017 - 2021" />
      </form>
      <button>Save</button>
    </div>
  );
};

export default Education;
