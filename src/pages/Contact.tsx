import React from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 md:p-10 flex flex-col items-center gap-8">
      {/* Page Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800  text-center">
        {t("pages.contact.title")}
      </h2>

      <p className="text-gray-800  text-center max-w-2xl">
        {t("pages.contact.content")}
      </p>

      {/* Contact Card */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-8xl ">
        <h3 className="text-xl font-bold text-gray-100 mb-4 text-center">
          {t("site.title")}
        </h3>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-3">
            <Phone className="text-teal-600" />
            <a 
            href={`tel:${t("pages.contact.phone")}`} className="hover:underline">
              {t("pages.contact.phone")}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Send className="text-blue-500" />
            <a
              href={t("pages.contact.telegram")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Telegram
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle className="text-green-500" />
            <a
              href={t("pages.contact.whatsapp")}
              target="_blank"
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              WhatsApp
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-pink-500" />
            <a href={`mailto:${t("pages.contact.email")}`} className="hover:underline">
              {t("pages.contact.email")}
            </a>
          </li>
        </ul>
      </div>

      {/* Maps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-8xl">
           {/* Yandex Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A789fd195ff215b2415eb0a4cb75c63d1426c28cb828bdc3e43f007d3d8ce1058&amp;source=constructor"
            width="100%"
            height="300"
            frameBorder="0"
            title="Yandex Map"
          ></iframe>
        </div>
        
        
        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2244.053779815382!2d37.7095099!3d55.7749378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53568bac90bd7%3A0x48a2bd9d75d7d7cb!2sUlitsa%20Gospital&#39;nyy%20Val%2C%205%D1%817%2C%20Moskva%2C%20Russia%2C%20105094!5e0!3m2!1sen!2sge!4v1760941933006!5m2!1sen!2sge"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

     
      </div>
    </div>
  );
};

export default Contact;




