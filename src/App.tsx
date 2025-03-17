import { useState, useEffect } from 'react'
import './App.css'
import cyberBg from './assets/cyber-bg.jpg'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="terminal">
          <p className="tech-font neon-text">{'>>'} Initializing secure connection...</p>
          <p className="tech-font neon-text">{'>>'} Running security protocols...</p>
          <p className="tech-font neon-text">{'>>'} Access granted...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <h1 className="tech-font neon-text">SecureNet</h1>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9)), url(${cyberBg})`}}>
        <div className="container">
          <h1 className="tech-font">Securing Your Digital Future</h1>
          <p className="subtitle">Advanced Cybersecurity Solutions for the Modern World</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2 className="tech-font">Our Services</h2>
          <div className="grid grid-3">
            <div className="service-card">
              <h3>Penetration Testing</h3>
              <p>Comprehensive security assessments to identify vulnerabilities in your systems.</p>
            </div>
            <div className="service-card">
              <h3>Incident Response</h3>
              <p>24/7 emergency response team ready to handle security breaches.</p>
            </div>
            <div className="service-card">
              <h3>Security Consulting</h3>
              <p>Expert guidance on implementing robust security measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="tech-font">About Us</h2>
              <p>We are a team of elite security professionals dedicated to protecting your digital assets. With years of experience in cybersecurity, we provide cutting-edge solutions to stay ahead of emerging threats.</p>
            </div>
            <div className="stats">
              <div className="stat-item">
                <h3 className="tech-font neon-text">500+</h3>
                <p>Successful Projects</p>
              </div>
              <div className="stat-item">
                <h3 className="tech-font neon-text">99.9%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="tech-font">Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 SecureNet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
