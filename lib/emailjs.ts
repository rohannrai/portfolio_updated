// EmailJS integration placeholder
// Install: npm install @emailjs/browser
// Then uncomment and configure below

/*
import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

export async function sendAuditEmail(formData: {
  name: string;
  email: string;
  storeUrl: string;
  description: string;
}) {
  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      from_name: formData.name,
      from_email: formData.email,
      store_url: formData.storeUrl,
      message: formData.description,
    },
    EMAILJS_CONFIG.publicKey
  );
}
*/

export const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
