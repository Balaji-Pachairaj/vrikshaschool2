export const BREVO_CONFIG = {
    API_KEY: import.meta.env.VITE_BREVO_API_KEY,  // Replace with your Brevo API key
    ADMIN_EMAILS: import.meta.env.VITE_ADMIN_EMAIL.split(',').map(email => email.trim()),  // Support multiple emails
    SENDER_EMAIL: import.meta.env.VITE_SENDER_EMAIL,  // Replace with your verified sender email in Brevo
    SENDER_NAME: "Vriksha Global School"
};
