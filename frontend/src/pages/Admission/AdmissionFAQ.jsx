import React, { useState, useEffect } from 'react'

const FAQItem = ({ item, delay }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`mb-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}>
      <button
        className="w-full text-left bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 flex justify-between items-center transition-all duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.question}</span>
        <span className={`text-2xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`mt-2 px-6 py-4 bg-gray-900 text-white rounded-lg transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        {item.answer}
      </div>
    </div>
  )
}

const AdmissionFAQ = () => {
  const faqData = [
    {
      question: "What curriculum does the school follow?",
      answer: "Our school follows a comprehensive curriculum that blends national standards with international best practices. We emphasize holistic development, focusing on academic excellence, critical thinking, and practical skills."
    },
    {
      question: "What is the procedure to secure admission for my child in Vriksha?",
      answer: "To secure admission, please follow these steps: 1) Fill out the online application form. 2) Submit required documents. 3) Pay the application fee. 4) Attend an interview/assessment (if required). 5) Receive admission decision. 6) Complete the enrollment process if accepted."
    },
    {
      question: "What documents are required during admission?",
      answer: "Required documents typically include: 1) Birth certificate 2) Previous school records 3) Immunization records 4) Passport-size photographs 5) Proof of residence 6) Any special needs documentation (if applicable)"
    },
    {
      question: "When should I submit applications for admissions?",
      answer: "The Admissions Office starts accepting applications from November 1st every year for the next academic year, which begins in April. We recommend applying early as seats are allotted on a first-come, first-served basis."
    },
    {
      question: "Is there a policy for offering admissions to siblings of students in school?",
      answer: "Yes, we have a sibling priority policy. Siblings of current students are given preference in the admission process, provided they meet the school's admission criteria and there are available seats in the desired grade."
    },
    {
      question: "Is there a school uniform?",
      answer: "Yes, we have a school uniform policy. Details about the uniform, including where to purchase it, will be provided upon admission. We believe uniforms promote a sense of community and equality among students."
    },
    {
      question: "Does the school have provision for hot meals and snacks for the students?",
      answer: "Yes, we provide nutritious hot meals and healthy snacks for students. Our cafeteria offers a variety of options catering to different dietary needs. The menu is carefully planned by nutritionists to ensure balanced meals."
    },
    {
      question: "Does the school provide transport facility?",
      answer: "Yes, we offer a safe and reliable transport facility for students. Our buses cover various routes across the city. Each bus is equipped with GPS tracking and is accompanied by a supervisor to ensure the safety of the children."
    }
  ]

  return (
    <div className="bg-black min-h-screen w-full px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            item={item} 
            delay={index * 100} 
          />
        ))}
      </div>
    </div>
  )
}

export default AdmissionFAQ 