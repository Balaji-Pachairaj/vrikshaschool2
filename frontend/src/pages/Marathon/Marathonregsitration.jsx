import { ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { BREVO_CONFIG } from '../../config';
import NotificationPopup from '../../components/NotificationPopup';

const ContactSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  // Handle body scroll lock when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const handleContactClick = () => {
    setIsPopupOpen(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      subject: "New Marathon Registration",
      htmlContent: `
        <h2>New Marathon Registration</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
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
        name: `${data.firstName} ${data.lastName}`
      }],
      subject: "Thank you for registering for the Marathon - Vriksha Global School",
      htmlContent: `
        <h2>Thank you for registering!</h2>
        <p>Dear ${data.firstName},</p>
        <p>We have received your marathon registration and will contact you shortly with more details.</p>
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

      // Then save to Firebase
      const docRef = await addDoc(collection(db, 'marathon-registrations'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        registrationDate: serverTimestamp(),
        emailSent: emailSent
      });

      // Clear form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
      
      setNotification({
        show: true,
        type: 'success',
        message: 'Thank you for registering! We will contact you shortly.'
      });
      
      setIsPopupOpen(false);

    } catch (error) {
      console.error('Error processing registration:', error);
      setNotification({
        show: true,
        type: 'error',
        message: error.code === 'permission-denied' 
          ? 'Unable to save registration due to permissions. Please try again later.'
          : error.message?.includes('network')
          ? 'Network error. Please check your internet connection and try again.'
          : 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div 
        className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
        style={{
          transform: 'perspective(100vh) rotateX(32deg) rotateY(0) rotateZ(0)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Small label */}
        <div className="flex items-center gap-2 text-white/80 mb-6 transform -rotate-x-32">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4"
            stroke="currentColor"
          >
            <path
              d="M13 10V3L4 14h7v7l9-11h-7z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base md:text-lg tracking-wider">GET IN TOUCH</span>
        </div>

        {/* Main heading */}
        <div className="text-center transform -rotate-x-32">
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
            REGISTER
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent" style={{
            WebkitTextStroke: '1px white',
          }}>
            TODAY
          </h1>
        </div>

        {/* Contact button */}
        <div className="mt-6 transform -rotate-x-32">
          <button 
            onClick={handleContactClick}
            className="group flex items-center gap-4 text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-xl md:text-2xl">CONTACT</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:bg-black">
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white" />
            </div>
          </button>
        </div>

      </div>

      {/* Notification Popup */}
      {notification.show && (
        <NotificationPopup
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification({ show: false, type: '', message: '' })}
        />
      )}

      {/* Contact Popup */}
      {isPopupOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-40"
          onClick={(e) => {
            if (e.target.classList.contains('fixed')) {
              setIsPopupOpen(false);
            }
          }}
        >
          <div 
            className="w-[400px] max-h-[80vh] overflow-y-auto shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] backdrop-blur-[12px] border border-white/20 p-6 rounded-[20px] bg-black/25 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-kanit uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                Marathon Contact
              </h2>
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="text-white/60 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-col gap-1">
                  <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full h-[40px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-3 transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full h-[40px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-3 transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-col gap-1">
                  <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full h-[40px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-3 transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full h-[40px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit px-3 transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider block mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message regarding the marathon..."
                  className="w-full h-[80px] border-[1px] border-white/20 rounded-lg bg-black/20 backdrop-blur-sm text-[14px] text-white font-kanit p-3 transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)] resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-[40px] bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] rounded-lg text-white font-kanit uppercase tracking-wider text-[14px] hover:opacity-90 transition-opacity ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Register'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection