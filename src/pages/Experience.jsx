import React from 'react';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Work Experience</h2>
      <button>Edit Experience</button>
      <form>
        <label>Designation: </label>
        <input type="text" placeholder="Software Developer" />
        <label>Organization: </label>
        <input type="text" placeholder="ABC Corp" />
        <label>Duration: </label>
        <input type="text" placeholder="Jan 2021 - Present" />
      </form>
      <button>Save</button>
    </div>
  );
};

export default Experience;
