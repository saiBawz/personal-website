// src/pages/Contact.jsx
import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Linkedin 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(firstError)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsSubmitting(true);
      
      try {
        // REAL SUBMISSION TO FORMSPREE
        const response = await fetch("https://formspree.io/f/xkogdwev", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({}); // Clear any old errors
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Network error. Please check your connection.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  

    
        
       

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Location',
      details: ['Tallinding,Kanifing Municipal Council,The Gambia',],
      bgColor: 'bg-primary'
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      details: ['bawosainabou@gmail.com'],
      link: 'mailto:bawosainabou@gmail.com',
      bgColor: 'bg-warning'
    },
    {
      icon: <Linkedin size={28} />,
      title: 'LinkedIn',
      details: ['linkedin.com/in/sainabou-bawor'],
      link: 'https://www.linkedin.com/in/sainabou-bawor-a29809285',
      bgColor: 'bg-info'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="py-5 bg-light bg-gradient-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h6 className="text-uppercase fw-semibold mb-3">
                Let's Connect
              </h6>
              <h1 className="display-4 fw-bold mb-3">
                Get In <span className="text-gradient-primary">Touch</span>
              </h1>
              <p className="lead mb-0">
                Open to tech oppurtunities and collaborations</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-5">
        <div className="container">
          

          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="" style={{ top: '20px' }}>
                <h3 className="mb-4">Contact Information</h3>
                <div className="row g-3">
                  {contactInfo.map((info, index) => (
                    <div className="col-md-6 col-lg-12" key={info.title}>
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-start">
                            <div className={`${info.bgColor} rounded-circle p-3 me-3`}>
                              <div className="text-white">
                                {info.icon}
                              </div>
                            </div>
                            <div>
                              <h5 className="card-title mb-2">{info.title}</h5>
                              {info.details.map((detail, i) => (
                                <p key={i} className="mb-1">
                                  {/* Check if a link exists; if not, just show text */}
      {info.link ? (
        <a 
          href={info.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted text-decoration-none"
          style={{ cursor: 'pointer' }}
          onMouseOver={(e) => e.target.style.color = '#0d6efd'} // Turns blue on hover
          onMouseOut={(e) => e.target.style.color = '#6c757d'}
        >
          {detail}
        </a>
      ) : (
        <span className="text-muted">{detail}</span>
      )}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Additional Information */}
            <div className="col-lg-8">
              <div className="col-lg-8">
  <div className="card border-0 shadow-sm p-4">
    {submitted ? (
      <div className="text-center py-5">
        <CheckCircle size={64} className="text-success mb-3" />
        <h3>Message Sent!</h3>
        <p className="text-muted">Thank you, Sainabou will get back to you soon.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input 
              id="name"
              name="name"
              type="text" 
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="col-12">
            <label className="form-label">Subject</label>
            <input 
              id="subject"
              name="subject"
              type="text" 
              className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
          </div>

          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea 
              id="message"
              name="message"
              rows="5" 
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <div className="col-12">
            <button 
              type="submit" 
              className="btn btn-primary px-4 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className="ms-2" />
            </button>
          </div>
        </div>
      </form>
    )}
  </div>
</div>
              <div className="row g-3">
                {/* Opportunities */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-3">Open to Opportunities</h5>
                      <p className="text-muted mb-0">Always interested in <strong>new roles</strong>, <strong>projects</strong>, and <strong>tech collaborations</strong> that align with my expertise.</p>
                    </div>
                  </div>
                </div>

                {/* Roles */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-3">My Domain</h5>
                      <p className="text-muted mb-0"><strong>Product Management</strong>, <strong>Data Analytics</strong>, <strong>Business Strategy</strong>, and <strong>Web Development</strong>.</p>
                    </div>
                  </div>
                </div>

                

                {/* Let's Connect */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-3">Let's Connect</h5>
                      <p className="text-muted mb-0">Feel free to reach out with opportunities, questions, or just to say hello!</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;