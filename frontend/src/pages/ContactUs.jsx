import React, { useState } from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { BREVO_CONFIG } from '../config';
import NotificationPopup from '../components/NotificationPopup';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    enquiryType: "Admissions",
    message: ""
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
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
        <p><strong>Type of Enquiry:</strong> ${data.enquiryType}</p>
        <p><strong>Message:</strong> ${data.message}</p>
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
        name: `${data.name}`
      }],
      subject: "Thank you for contacting Vriksha Global School",
      htmlContent: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p>Here's a copy of your submission:</p>
        <ul>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone Number:</strong> ${data.phoneNumber}</li>
          <li><strong>Type of Enquiry:</strong> ${data.enquiryType}</li>
          <li><strong>Message:</strong> ${data.message}</li>
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
        name: "",
        email: "",
        phoneNumber: "",
        enquiryType: "Admissions",
        message: ""
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
        message: 'There was an error submitting your form. Please try again or contact us directly at vrikshaglobal@gmail.com'
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
            
            <div className="w-full h-fit flex flex-col gap-[1.5rem]">
              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="1234567890"
                  required
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Type of Enquiry
                </label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full h-[52px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat"
                  required
                >
                  <option value="Admissions">Admissions</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] text-white font-kanit uppercase tracking-wider">
                  Tell us More
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full h-[200px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[16px] text-white font-kanit p-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] resize-none"
                />
              </div>
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
