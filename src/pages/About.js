// src/pages/About.jsx
import { BookOpen, Users, Award, Globe, Heart, Lightbulb, Target, TrendingUp, MessageCircle, CheckCircle2 } from 'lucide-react';

const About = () => {
  const softSkills = [
    { 
      name: 'Strategic Thinking', 
      description: 'Balancing short-term execution with long-term vision',
      color: 'primary'
    },
    { 
      name: 'Communication', 
      description: 'Building alignment across all levels',
      color: 'info'
    },
    { 
      name: 'Problem Solving', 
      description: 'Creative solutions to complex challenges',
      color: 'warning'
    },
    { 
      name: 'Adaptability', 
      description: 'Thriving in dynamic environments',
      color: 'danger'
    },
  ];

  const competencies = [
    'Presentation & Public Speaking',
    'Negotiation & Influence',
    'Operations & Budgeting',
    'Time Management',
    'Critical Thinking',
    'Conflict Resolution',
    'Active Listening',
    'Emotional Intelligence',
    'Decision Making',
  ];

  const education = [
    { title: 'BSc in Information Systems', desc: 'University of The Gambia', icon: <BookOpen size={20} /> },
  ];
  //  Certifications
  const certifications = [
    { title: 'CyberSecurity Fundamentals', desc: 'CISCO Networking Academy', icon: <Award size={20} /> },
    { title: 'ICT Summer BootCamp', desc: 'University of The Gambia', icon: <Award size={20} /> },
    { title: 'Mobile App Development', desc: 'GamChix', icon: <Award size={20} /> },
  ];

  // Entrepreneurial Experience (Catering)
  const entrepreneurialExp = [
    { 
      title: 'Lead Caterer & Founder', 
      desc: 'Part-time Venture | Operations, Customer Service & Budgeting', 
      icon: <TrendingUp size={20} /> 
    }
  ];

  return (
    <div>
      <div className="py-5 py-lg-6 bg-gradient-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xl-7">
              <div>
                <h6 className="fw-semibold mb-3">
                  ABOUT ME
                </h6>
                <h1 className="display-4 fw-bold mb-4">
                  Professional Journey and Soft Skills
                </h1>
                
                <div className="lead mb-4 fs-5">
                  <p className="mb-4">
                    Passionate product manager and aspiring data analyst, with curiosity and love for technology
                  </p>
                  
                  <p>
                    As a product-minded professional, I believe that empathy, communication, 
                    and adaptability are just as important as technical skills in creating 
                    products that truly resonate with users and deliver business value.
                  </p>
                </div>

                {/* Education Highlights */}
                <div className="mt-5">
                  <h5 className="mb-4 d-flex align-items-center">
                    <BookOpen className="me-2 text-primary" size={24} />
                    Education & Certifications & Entrepreneurship
                  </h5>
                  <div className="row g-3">
                    {[...education, ...certifications, ...entrepreneurialExp].map((item, index) => (
                    <div className="col-md-6" key={index}>
        <div className="d-flex align-items-start p-3 bg-white rounded shadow-sm border-start border-primary border-4">
          <div className="me-3 text-primary">
            {item.icon}
          </div>
          <div>
            <h6 className="mb-1 fw-bold">{item.title}</h6>
            <p className="text-muted mb-0 small">{item.desc}</p>
          </div>
        </div>
      </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Core Soft Skills</h2>
          </div>

          <div className="row g-4">
            {softSkills.map((skill) => (
              <div className="col-lg-4 col-md-6" key={skill.name}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                  <div className="card-body p-4 text-center">
                    <h5 className="mb-3">{skill.name}</h5>
                    <p className="text-muted mb-0">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="mb-3">Additional Competencies</h3>
          </div>
          
          <div className="row g-3 justify-content-center">
            {competencies.map((competency) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={competency}>
                <div className="d-flex align-items-center p-3 bg-white rounded shadow-sm h-100">
                  <span className="fw-medium">{competency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Philosophy */}
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-4 p-lg-5 bg-gradient-light">
                <div className="text-center mb-4">
                  <h3 className="mb-3">Personal Philosophy</h3>
                </div>
                <blockquote className="blockquote text-center mb-0">
                  <p className="lead mb-4">
                    "I am driven by a passion for innovation and creating meaningful impact on society through technology. 
                    I believe that by combining strategic thinking, empathy, and data-driven insights, we can build products 
                    that not only solve real problems but also empower communities and drive positive change. My mission is 
                    to leverage my skills in product management and data analysis to bridge the gap between business goals 
                    and user needs, creating solutions that matter."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;