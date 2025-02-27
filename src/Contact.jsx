import { useState } from 'react';
import axios from 'axios';  // Import axios for HTTP requests
import toast, { Toaster } from 'react-hot-toast';  // Import toast and Toaster from react-hot-toast
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    requirement: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.subject || !formData.requirement) {
      toast.error('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
        const response = await axios.post('http://localhost:8055/send-email', {
            fullName: formData.fullName,
            emailTo: formData.email,
            subject: formData.subject,
            message: formData.requirement
        });

        if (response.data.status) {
            toast.success('Email sent successfully!');
            // Clear the form data after successful submission
            setFormData({
                fullName: '',
                email: '',
                subject: '',
                requirement: ''
            });
        } else {
            toast.error('Failed to send email.');
        }
    } catch (error) {
        console.error('Error during form submission:', error.response ? error.response.data : error);
        toast.error(`There was an error submitting your form. ${error.response ? error.response.data.message : ''}`);
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="contact" id="contact">
      <div className="bannar"></div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label>Requirement</label>
          <textarea
            rows="3"
            placeholder="Tell us about your requirements"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
          ></textarea>
        </div>
        <input type="submit" value={loading ? 'Sending...' : 'Contact Now'} disabled={loading} />
      </form>
      <Toaster /> {/* Include Toaster component to render toasts */}
    </div>
  );
}
