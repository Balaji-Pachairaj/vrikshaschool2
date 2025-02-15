export const BREVO_CONFIG = {
  API_KEY: import.meta.env.VITE_BREVO_API_KEY,
  SENDER_NAME: "Vriksha Global School",
  SENDER_EMAIL: import.meta.env.VITE_SENDER_EMAIL || "vrikshaglobal@gmail.com",
  ADMIN_EMAILS: [import.meta.env.VITE_ADMIN_EMAIL || "vrikshaglobal@gmail.com"]
};
