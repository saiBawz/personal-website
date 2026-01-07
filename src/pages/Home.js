// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Download, Briefcase, Users, ThumbsUp, Calendar, Code, Target, TrendingUp, MessageCircle } from 'lucide-react';

const Home = () => {
  const highlights = [
    { icon: <Briefcase size={32} />, title: 'Product Manager Intern', description: 'At BayKart', color: 'primary' },
    { icon: <Code size={32} />, title: 'Full-Stack Dev', description: 'Building web solutions', color: 'info' },
    { icon: <Target size={32} />, title: 'Data Analyst', description: 'Data-driven insights', color: 'success' },
    { icon: <Users size={32} />, title: 'Community', description: 'Mentoring & workshops', color: 'warning' },
  ];

  const softSkills = [
    'Strategic Thinking',
    'Communication',
    'Problem Solving',
    'Adaptability'
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="container py-5 text-center">
        <div>
          <h1 className="display-4 fw-bold mb-3">
            Hi, I'm Sainabou Bawor
          </h1>
          <p className="lead mb-4">
            Information System Student • Product Manager • Data Analyst
          </p>
          <p className="mb-5 fs-5">
            Welcome to my portfolio! I drive product success through data-driven decisions, 
            user insights, and strategic thinking to deliver impactful solutions.
          </p>
          
          <div className="d-flex justify-content-center mb-5">
            <img 
              src={require('../assets/sai-profile-pic.JPG')}
              alt="Sainabou Bawor"
              className="rounded-circle shadow-lg"
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
          </div>

          {/* CTA Buttons */}
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
            <Link to="/about" className="btn btn-primary btn-lg">
              <span>Learn More About Me</span>
              <ArrowRight size={18} className="ms-2" style={{ display: 'inline' }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-5 custom-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">My Professional Pillars</h2>
            <p className="lead text-muted">Combining expertise across multiple domains</p>
          </div>
          <div className="row g-4">
            {highlights.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <div className={`text-${item.color} mb-3 d-flex justify-content-center`}>
                    {item.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Featured Projects Preview */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Featured Work</h2>
            <p className="lead text-muted">Showcasing my experience and contributions</p>
          </div>
          
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 rounded p-3 me-3">
                      <Code size={24} className="text-success" />
                    </div>
                    <h4 className="mb-0">Notable Projects</h4>
                  </div>
                  <p className="text-muted mb-3">Full-stack web applications and technical solutions</p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">→</span>
                      <span>Task Manager Dashboard</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">→</span>
                      <span>Book Social Network</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">→</span>
                      <span>CyberSecurity Case Studies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded p-3 me-3">
                      <Users size={24} className="text-primary" />
                    </div>
                    <h4 className="mb-0">Community Impact</h4>
                  </div>
                  <p className="text-muted mb-3">Volunteering and mentoring initiatives</p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">→</span>
                      <span>ITCA community mentoring programs</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">→</span>
                      <span>Devfest & Pycon tech workshops</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span className="text-primary me-2">→</span>
                      <span>Social impact initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn btn-primary btn-lg">
              View Full Experience & Contributions <ArrowRight size={18} className="ms-2" style={{ display: 'inline' }} />
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};


export default Home;