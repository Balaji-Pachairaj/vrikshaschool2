import React, { useState } from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { BREVO_CONFIG } from '../config';
import NotificationPopup from '../components/NotificationPopup';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    timeline: "",
    budget: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendBrevoEmail = async (data) => {
    const apiUrl = 'https://api.brevo.com/v3/smtp/email';
    
    // Email to admin(s)
    const adminEmailData = {
      sender: {
        name: BREVO_CONFIG.SENDER_NAME,
        email: BREVO_CONFIG.SENDER_EMAIL
      },
      to: BREVO_CONFIG.ADMIN_EMAILS.map(email => ({
        email: email,
        name: "Admin"
      })),
      subject: "New Contact Form Submission - Vriksha Global School",
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Description:</strong> ${data.description}</p>
      `
    };

    // Email to user
    const userEmailData = {
      sender: {
        name: BREVO_CONFIG.SENDER_NAME,
        email: BREVO_CONFIG.SENDER_EMAIL
      },
      to: [{
        email: data.email,
        name: `${data.firstName} ${data.lastName}`
      }],
      subject: "Thank you for contacting Vriksha Global School",
      htmlContent: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${data.firstName},</p>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p>Here's a copy of your submission:</p>
        <ul>
          <li><strong>Timeline:</strong> ${data.timeline}</li>
          <li><strong>Budget:</strong> ${data.budget}</li>
          <li><strong>Description:</strong> ${data.description}</li>
        </ul>
        <p>Best regards,<br>Vriksha Global School Team</p>
      `
    };

    try {
      // Send email to admin(s)
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_CONFIG.API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(adminEmailData)
      });

      // Send confirmation email to user
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_CONFIG.API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(userEmailData)
      });

      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First try to send emails
      const emailSent = await sendBrevoEmail(formData);
      
      if (!emailSent) {
        throw new Error('Failed to send email notification');
      }

      // Then try to store in Firebase
      try {
        await addDoc(collection(db, 'contacts'), {
          ...formData,
          timestamp: serverTimestamp()
        });
      } catch (firebaseError) {
        console.error('Firebase error:', firebaseError);
        // Continue execution even if Firebase fails
      }

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        timeline: "",
        budget: "",
        description: ""
      });
      
      setNotification({
        show: true,
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.'
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'There was an error submitting your form. Please try again or contact us directly at vikashuvi07@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className="w-full min-h-screen bg-black" id="contact">
        <div className="w-full md:h-[40vh] h-[25vh] flex flex-col md:justify-center justify-end items-center">
          <h1 className="text-[8vw] font-kanit uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
            Contact Us
          </h1>
        </div>

        <div className="w-full h-fit flex flex-row justify-center pb-20">
          <form onSubmit={handleSubmit} className="md:w-[60vw] w-[90%] h-fit flex flex-col gap-[2rem] shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] backdrop-blur-[12px] border border-white/20 md:p-[3rem] p-[1.5rem] rounded-[20px] bg-black/25">
            {/* Notification Popup */}
            {notification.show && (
              <NotificationPopup
                type={notification.type}
                message={notification.message}
                onClose={() => setNotification({ show: false, type: '', message: '' })}
              />
            )}
            
            <div className="w-full h-fit flex md:flex-row flex-col justify-between gap-[1.5rem]">
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
            </div>

            <div className="w-full h-fit flex md:flex-row flex-col justify-between gap-[1.5rem]">
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  required
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., 2 weeks"
                  required
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
            </div>

            <div className="w-full h-fit flex flex-col gap-[0.5rem]">
              <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                Budget
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g., ₹5,000"
                required
                className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
              />
            </div>

            <div className="w-full h-fit">
              <label className="text-[14px] text-white font-kanit uppercase tracking-wider block mb-[0.5rem]">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                required
                className="w-full h-[200px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit p-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-[52px] bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-white font-kanit font-[500] rounded-lg transition-all duration-300 hover:opacity-90 active:scale-[0.99] text-[16px] uppercase tracking-wider ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </button>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ContactUs;
