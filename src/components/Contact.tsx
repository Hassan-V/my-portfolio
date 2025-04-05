import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thanks for your message! I\'ll get back to you soon.'
    })
    
    console.log('Form submitted:', formData)
    
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section className="section contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out through the form or directly via:</p>
          <ul>
            <li>
              <span className="icon">📧</span>
              <a href="mailto:your.email@example.com">happyphony71@gmail.com</a>
            </li>
            <li>
              <span className="icon">🔗</span>
              <a href="https://www.linkedin.com/in/rashidalihassan/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <span className="icon">🐙</span>
              <a href="https://github.com/Hassan-V" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        
        <div className="contact-form">
          {formStatus.submitted ? (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
