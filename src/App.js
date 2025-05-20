import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import image from "./images/mountain1.jpg"

const ProfilePage = () => {
  const userData = {
    name: "Nella Vita",
    memberSince: "Member Since 2020",
    points: 2300,
    certificates: 50,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    activeCourses: [
      { name: "ENGLISH", score: 90, total: 110, color: "#1bc58d", percentage: 80 },
      { name: "MATHS", score: 50, total: 80, color: "#f3c351", percentage: 62 },
    ],
    coursesInProgress: 34,
    achievements: [
      { icon: "🏆", bg: "#f5f5f7" },
      { icon: "🧩", bg: "#f5f5f7" },
      { icon: "🪐", bg: "#f5f5f7" },
      { icon: "🧠", bg: "#f5f5f7" },
      { icon: "📚", bg: "#f5f5f7" }
    ]
  };
 const handleViewAll = () => {
  // Your logic here
  console.log("View all clicked");
};
  const SidebarItem = ({ icon, text, active }) => {
    const iconMap = {
      grid: "bi bi-grid",
      book: "bi bi-book",
      calendar: "bi bi-calendar",
      users: "bi bi-people",
      user: "bi bi-person"
    };
    

    return (
      <div className={`sidebar-item ${active ? 'active' : ''}`}>
        <div className="sidebar-icon"><i className={iconMap[icon]}></i></div>
        <span className="sidebar-text">{text}</span>
      </div>
    );
  };

  return (
    <div className="profile-wrapper">
      <div className="top-nav">
        <div className="nav-branding-title">
          <div className="nav-branding">
            <div className="logo-text-top">YOUNG ENGLISH</div>
            <div className="logo-text-bottom">LEARNERS.</div>
          </div>
          <div className="page-title">My Profile</div>
        </div>
        <div className="user-controls">
          <button className="icon-button"><i className="bi bi-bell"></i></button>
          <button className="icon-button"><i className="bi bi-gear"></i></button>
          <div className="user-profile">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="avatar" className="avatar-image" />
            <span className="user-name">Albert Murcio</span>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>

      <div className="profile-container">
        <div className="sidebar">
          <div className="sidebar-menu">
            <SidebarItem icon="grid" text="Dashboard" />
            <SidebarItem icon="book" text="My Class" />
            <SidebarItem icon="calendar" text="Upcoming class" />
            <SidebarItem icon="users" text="Instructors" />
            <SidebarItem icon="user" text="Profile" active />
          </div>
          <div className="upgrade-box">
            <div className="upgrade-content">
              <div className="upgrade-header">
                <div className="upgrade-title">Upgrade your <br /> Account to Pro</div>
                <i className="bi bi-award-fill upgrade-icon"></i>
              </div>
              <div className="upgrade-subtitle">Upgrade to premium to get premium features</div>
              <button className="btn btn-primary upgrade-button">Upgrade</button>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="profile-content">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-card card">
                  <div className="card-more-options"><i className="bi bi-three-dots"></i></div>
                  <div className="user-profile-header">
                    <div className="profile-image"></div>
                    <h2 className="profile-name">{userData.name}</h2>
                    <p className="profile-subtitle">{userData.memberSince}</p>
                  </div>
                  <div className="stats-container">
                    <div className="stat-item border-right">
                      <div className="stat-label">Points</div>
                      <div className="stat-value">{userData.points}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-label">Certificate</div>
                      <div className="stat-value">{userData.certificates}</div>
                    </div>
                  </div>
                  <div className="achievements-section">
                    <h3 className="section-title1">Achievements</h3>
                    <div className="achievements-icons">
                      {userData.achievements.map((ach, i) => (
                        <div key={i} className="achievement-icon" style={{ backgroundColor: ach.bg }}>
                          <span className="emoji">{ach.icon}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bio-section">
                    <h3 className="section-title">Bio</h3>
                    <p className="bio-text">{userData.bio}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="courses-in-progress">
                  <div className="counter-badge">
                    <div className="counter-icon"><span role="img" aria-label="timer">⏱️</span></div>
                    <div className="counter-info">
                      <div className="counter-value">{userData.coursesInProgress}</div>
                      <div className="counter-label">Courses in Progress</div>
                    </div>
                    <div className="counter-dropdown">
                      <i className="bi bi-chevron-right"></i>
                      <div className="dropdown-menu">
                        <div className="dropdown-item">View Details</div>
                        <div className="dropdown-item">Edit</div>
                        <div className="dropdown-item">Delete</div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="active-courses-section">
                  <div className="card-header-custom">
                    <h3 className="section-title">Active Courses</h3>
<button className="view-all-link" onClick={handleViewAll}>
  View all
</button>
                  </div>
                  <div className="active-courses card">
                    <div className="course-cards">
                      {userData.activeCourses.map((course, i) => (
                        <div key={i} className="course-card">
                          <div className="course-header">
                            <div className="course-icon-container">
                              <div className="course-icon-ring" style={{ '--percent': course.percentage, '--color': course.color }}>
                                <span className="ring-center">{course.score}</span>
                              </div>
                              <div className="course-info">
                                <div className="course-label">Class</div>
                                <div className="course-name">{course.name}</div>
                              </div>
                            </div>
                          </div>
                          <div className="course-score">{course.score} / {course.total}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="progress-chart card">
                  <div className="progress-header">
                    <h3 className="section-title">Progress</h3>
                    <div className="progress-header-right">
                      <div className="progress-legend">
                        <span className="legend-dot yellow"></span> Last Week
                        <span className="legend-dot green"></span> This Week
                        <span className="dropdown">This Month </span>
                      </div>
                      <div className="progress-stats">
                        <div className="stat">
                          <div className="label">This week</div>
                          <div className="value green">+32%</div>
                        </div>
                        <div className="stat">
                          <div className="label">Last week</div>
                          <div className="value yellow">+24%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-body">
                    <div className="progress-y-labels">
                      {[100, 75, 50, 25, 0].map(value => (
                        <div key={value}>{value}</div>
                      ))}
                    </div>
                    <div className="progress-canvas">
                      <div className="progress-grid"></div>
                      <div className="yellow-line"></div>
                      <div className="green-line"></div>
                      <div className="progress-labels">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                          <div key={day} className="label">{day}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="ice-banner">
              <img src={image} alt="Ice Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
