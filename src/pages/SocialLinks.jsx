import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links-section">
      <h2>Social Links</h2>
      <button>Edit Links</button>
      <div className="social-link">
        <label>LinkedIn:</label>
        <input type="text" placeholder="linkedin.com/in/username" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default SocialLinks;
