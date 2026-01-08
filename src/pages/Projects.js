// src/pages/Projects.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Filter, Code, Globe, Layers, Code2, FileCode, Database, Terminal, Zap, Cpu, CheckCircle, Wrench } from 'lucide-react';

const Projects = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="py-5" style={{ backgroundColor: 'var(--header-bg)', color: 'var(--card-text)' }}>
        <div className="container">
              <h1 className="display-4 fw-bold mb-3">
                Experiences & <span className="text-primary">Contributions</span>
              </h1>
              <p className="lead mb-0 opacity-75" style={{ color: 'var(--text-primary)' }}>
                A comprehensive overview of my professional journey and key achievements.
              </p>
            </div>
          </div>
  

      {/* Professional Journey Timeline */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Professional Journey</h2>
            <p className="lead text-muted">My path to becoming a product-minded professional</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="timeline">
                {[
                  { 
                    year: '2026-Present', 
                    title: 'Product Management Intern', 
                    desc: 'BayKart',
                    achievements: ['Gaining exposure to product management lifecycle and best practices']
                  },
                  { 
                    year: '2023-Present', 
                    title: 'Web Development', 
                    desc: 'FreeCodeCamp | Hands-on Coding',
                    achievements: ['Sharpening skills on development']
                  },
                  { 
                    year: '2024', 
                    title: 'Introduction to CyberSecurity', 
                    desc: 'CISCO Networking Academy',
                    achievements: ['Conducted 10+ market studies', 'Stakeholder presentations', 'Strategic recommendations']
                  },
                  { 
                    year: '2021-Present', 
                    title: 'Bsc Information Systems', 
                    desc: ' University of The Gambia',
                    achievements: ['Technical expertise', 'Business strategy focus', 'Academic excellence']
                  },
                ].map((exp, index) => (
                  <div className="mb-4" key={index}>
                    <div className="row g-0">
                      <div className="col-md-3">
                        <div className="bg-primary text-white rounded px-3 py-2 text-center mb-3 mb-md-0">
                          <strong>{exp.year}</strong>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="card border-0 shadow-sm custom card">
                          <div className="card-body p-4">
                            <h5 className="mb-2 fw-bold">{exp.title}</h5>
                            <p className="opacity-75 mb-3">{exp.desc}</p>
                            <div className="d-flex flex-column gap-2">
                              {exp.achievements.map((achievement, idx) => (
                                <div key={idx} className="d-flex align-items-start">
                                  <span className="small">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contributions Section */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">My Contributions</h2>
            <p className="lead text-muted">Volunteering initiatives and key projects</p>
          </div>

          <div className="row g-4">
            {/* Volunteering */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded p-3 me-3">
                    </div>
                    <h4 className="mb-0">Volunteering</h4>
                  </div>
                  <p className="text-muted mb-3">Community involvement and social impact initiatives</p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-start">
                      <span>ITCA, University of The Gambia - Community mentoring programs</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span>Devfest | Pycon - Tech workshops & training</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <span>Social impact initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 rounded p-3 me-3">
                    </div>
                    <h4 className="mb-0">Projects</h4>
                  </div>
                  <p className="text-muted mb-3">Notable projects and technical contributions</p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex align-items-start">
                      <span>Full-stack web applications:
                      Task Manager Dashboard | Book Social Network etc</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <span>CyberSecurity case studies</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <span>Product management tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;