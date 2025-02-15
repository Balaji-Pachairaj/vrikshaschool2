import React, { useState, useEffect, useRef, memo, useContext } from 'react';
import styled from 'styled-components';
import img1 from "../assets/CTA/Left.png";
import img2 from "../assets/CTA/Right.png"; 
import { ModalContext } from '../context/ModalContext'; // Fix import path
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { BREVO_CONFIG } from '../config';
import NotificationPopup from '../components/NotificationPopup';

const Section = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 4rem 0;
  display: flex;  
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    order: -1;
    left: 0;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    height: auto;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: static;
    width: 160px;
    height: 200px;
  }

  &:first-child {
    left: 90px;
    top: 5px;
    @media (max-width: 768px) {
      left: auto;
      top: auto;
    }
  }

  &:last-child {
    right: 0;
    top: 100px;
    @media (max-width: 768px) {
      right: auto;
      top: auto;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.8rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #cccccc;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  background-color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 8px 15px -5px rgba(255, 255, 255, 0.5);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(${props => props.isOpen ? '4px' : '0px'});

  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(4px);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      backdrop-filter: blur(4px);
    }
    to {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
  }

  animation: ${props => props.isOpen ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out'};
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  background-color: black;
  border-radius: 20px;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem; // Increased top padding for close button
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  transform: scale(${props => props.isOpen ? 1 : 0.9});
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Custom scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem 1rem;
    max-height: 85vh;
  }

  @keyframes slideIn {
    from {
      transform: scale(0.9) translateY(20px);
      opacity: 0;
    }
    to {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    to {
      transform: scale(0.9) translateY(20px);
      opacity: 0;
    }
  }

  animation: ${props => props.isOpen ? 'slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'slideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;          // Changed from -15px
  right: 10px;        // Changed from -15px
  background: #000000;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #ffffff;
    color: #000000;
    transform: scale(1.1);
  }
`;

const FormInput = memo(({ label, name, value, onChange, placeholder }) => (
  <div className="md:w-[48%] w-full flex flex-col gap-[0.5rem]">
    <label className="text-[12px] text-white font-kanit uppercase tracking-wider">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full h-[45px] border-[1px] border-white/20 rounded-lg bg-black/20 text-[14px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 shadow-[0_4px_16px_0_rgba(255,255,255,0.1)]"
    />
  </div>
));

const CTA2 = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "teacher",
    requirements: "",
    education: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const scrollPosition = useRef(0);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      scrollPosition.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'relative';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.body.style.position = '';
    };
  }, [isModalOpen]);

  const sendBrevoEmail = async (data) => {
    const apiUrl = 'https://api.brevo.com/v3/smtp/email';
    
    const adminEmailData = {
      sender: {
        name: BREVO_CONFIG.SENDER_NAME,
        email: BREVO_CONFIG.SENDER_EMAIL
      },
      to: BREVO_CONFIG.ADMIN_EMAILS.map(email => ({
        email: email,
        name: "Admin"
      })),
      subject: "New Job Application - Vriksha Global School",
      htmlContent: `
        <h2>New Job Application Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phone}</p>
        <p><strong>Role:</strong> ${data.role}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Additional Info:</strong> ${data.requirements}</p>
      `
    };

    const userEmailData = {
      sender: {
        name: BREVO_CONFIG.SENDER_NAME,
        email: BREVO_CONFIG.SENDER_EMAIL
      },
      to: [{
        email: data.email,
        name: `${data.firstName} ${data.lastName}`
      }],
      subject: "Thank you for your application - Vriksha Global School",
      htmlContent: `
        <h2>Thank you for applying!</h2>
        <p>Dear ${data.firstName},</p>
        <p>We have received your job application and will review it shortly.</p>
        <p>Here's a copy of your submission:</p>
        <ul>
          <li><strong>Role:</strong> ${data.role}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Education:</strong> ${data.education}</li>
        </ul>
        <p>Best regards,<br>Vriksha Global School Team</p>
      `
    };

    try {
      await Promise.all([
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': BREVO_CONFIG.API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify(adminEmailData)
        }),
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': BREVO_CONFIG.API_KEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify(userEmailData)
        })
      ]);
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
      // First try Firebase storage
      const docRef = await addDoc(collection(db, 'job_applications'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      // Then try email
      const emailSent = await sendBrevoEmail(formData).catch(error => {
        console.warn('Email sending failed:', error);
        return false; // Continue even if email fails
      });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        role: "teacher",
        requirements: "",
        education: ""
      });

      setNotification({
        show: true,
        type: 'success',
        message: 'Thank you for your application! We will get back to you soon.'
      });

      setIsModalOpen(false);

    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'There was an error submitting your application. Please try again.'
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
    <Section>
      <Container>
        <ImageContainer>
          <Image 
            src={img1}
            alt="Fashion model in dynamic pose"
            loading="lazy"
          />
          <Image 
            src={img2}
            alt="Fashion model in elegant hat"
            loading="lazy"
          />
        </ImageContainer>
        <Content>
          <h1>Shaping Future Leaders Starts with You</h1>
          <p>Join Our School Team!</p>
          <Button onClick={() => setIsModalOpen(true)}>
            JOIN NOW
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </Content>
      </Container>

      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <ModalContent ref={modalRef} isOpen={isModalOpen}>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            {notification.show && (
              <NotificationPopup
                type={notification.type}
                message={notification.message}
                onClose={() => setNotification({ show: false, type: '', message: '' })}
              />
            )}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[1.2rem] py-[1rem]">
              <div className="w-full flex md:flex-row flex-col justify-between gap-[1rem]">
                <FormInput
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
              </div>

              <div className="w-full flex md:flex-row flex-col justify-between gap-[1rem]">
                <FormInput
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="w-full">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider block mb-[0.5rem]">
                  Role Application
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full h-[45px] border-[1px] border-white/20 rounded-lg bg-black/20 text-[14px] text-white font-kanit px-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30"
                >
                  <option value="teacher">Teaching Role</option>
                  <option value="administrative">Administrative Role</option>
                </select>
              </div>

              <div className="w-full">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider block mb-[0.5rem]">
                  Educational Qualification
                </label>
                <textarea
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="Enter your educational qualifications..."
                  className="w-full h-[100px] border-[1px] border-white/20 rounded-lg bg-black/20 text-[14px] text-white font-kanit p-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 resize-none"
                />
              </div>

              <div className="w-full">
                <label className="text-[12px] text-white font-kanit uppercase tracking-wider block mb-[0.5rem]">
                  Additional Requirements/Information
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Tell us more about your experience and requirements..."
                  className="w-full h-[100px] border-[1px] border-white/20 rounded-lg bg-black/20 text-[14px] text-white font-kanit p-[1rem] transition-all duration-300 focus:border-white/40 focus:outline-none hover:border-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-[45px] bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] rounded-lg text-[14px] text-white font-kanit uppercase tracking-wider transition-all duration-300 hover:opacity-90 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
};

export default CTA2;
