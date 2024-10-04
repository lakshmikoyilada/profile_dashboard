import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src="profile.jpg" alt="Profile" className="profile-picture" />
        <h3>John Doe</h3>
        <p>johndoe@example.com</p>
      </div>
      <div className="profile-completion">
        <div className="progress-bar">
          <div className="progress" style={{ width: '75%' }}></div>
        </div>
        <p>Profile Completion: 75%</p>
      </div>
      <main className="main-content">
        <div className='Block'>Intenships</div>
        <div className='Block'>Participations</div>
        <div className='Block'>Stages Completed</div>
        <div className='Block'>Mentor Sessions</div>
        <div className='Block'>My Learning Path</div>
        <div className='Block'>Certificates</div>
      </main>
    </aside>
  );
};

export default Sidebar;
