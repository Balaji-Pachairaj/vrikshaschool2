export const BREVO_CONFIG = {
    API_KEY: import.meta.env.VITE_BREVO_API_KEY,  
    ADMIN_EMAILS: import.meta.env.VITE_ADMIN_EMAIL.split(',').map(email => email.trim()), 
    SENDER_EMAIL: import.meta.env.VITE_SENDER_EMAIL,  
    SENDER_NAME: "Vriksha Global School"
};
