import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LuMail } from "react-icons/lu";
import {FaPhone, FaTelegram,FaWhatsapp   } from "react-icons/fa6";
import { Link } from "react-router-dom";
import image1 from "../assets/s-1.png";
import image4 from "../assets/s-4.png";
import image5 from "../assets/s-5.png";
import bgImage from "../assets/bg-2.jpg";
import b6 from "../assets/BA/b6.jpg";
import a6 from "../assets/BA/a6.jpg";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const images = [image1, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-12 gap-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
      >
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            {t("hero.title")}
          </h1>
         

       </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow">
            <img
              src={images[currentIndex]}
              alt={`Dr. Gagloeva family dentist ${currentIndex + 1}`}
              title="Professional family dental care"
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-10 md:px-16 lg:px-24 -mt-8 md:-mt-10 relative z-10">
        {/* Card 1 */}
        <div className="bg-teal-100 p-6 rounded-2xl shadow flex flex-col justify-between min-h-[220px] hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-teal-700">
              {t("site.title")}
            </h2>
            <div className="text-gray-600 mt-2 text-xl sm:text-2xl">
              <p>{t("pages.about.content")}</p>
            </div>
          </div>


          <Link 
            to="/about"
            className="mt-4 px-5 py-2 bg-sky-500 rounded-xl shadow hover:bg-sky-600 transition text-center text-white"
            title="Emergency Dental Service"
          >
            {t("cards.card1.btn")}
          </Link>
        </div>

       {/* Card 2 */}

<div className="bg-teal-200 p-6 rounded-2xl shadow flex flex-col justify-between min-h-[220px] hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
  <div>
    <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4">
      {t("cards.card2.title")}
    </h2>


<ul className="space-y-2 text-teal-800">
    <li className="flex items-center gap-2">
    <FaPhone className="text-xl text-gray-700" />
    <a href={`tel:${t("pages.contact.phone")}`} className="hover:underline">
      {t("pages.contact.phone")}
    </a>
  </li>
  <li className="flex items-center gap-2">
    <FaTelegram className="text-2xl text-sky-600" />
    <a
      href="https://t.me/dr_anna_gagloeva"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Telegram
    </a>
  </li>
  <li className="flex items-center gap-2">
    <FaWhatsapp className="text-2xl text-green-600" />
    <a
      href={t("pages.contact.whatsapp")}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      WhatsApp
    </a>
  </li>

  <li className="flex items-center gap-2">
    <LuMail  className="text-xl text-gray-700" />
    <a href={`mailto:${t("pages.contact.email")}`} className="hover:underline">
      {t("pages.contact.email")}
    </a>
  </li>
</ul>


  </div>

  <Link
    to="/contact"
    title="Contact Dr. Gagloeva"
    className="mt-4 px-5 py-2 bg-sky-500 rounded-xl shadow hover:bg-sky-600 transition text-center text-white"
  >
    {t("cards.card2.btn")}
  </Link>
</div>


{/* Card 3 */}

<div className="bg-teal-100 p-6 rounded-2xl shadow flex flex-col justify-between min-h-[260px] hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
  
            {/* Title */}
  <div className="text-center">
    <h2 className="text-xl sm:text-2xl font-bold text-teal-700">
      {t("cards.card3.title")}
    </h2>
  </div>
  
  {/* Images */}
  <div className="flex gap-3 justify-center mb-4">
    <img
      src={b6}
      alt="Gallery photo 1"
      className="w-1/2 h-32 object-cover rounded-xl shadow-sm hover:opacity-90 transition"
    />
    <img
      src={a6}
      alt="Gallery photo 2"
      className="w-1/2 h-32 object-cover rounded-xl shadow-sm hover:opacity-90 transition"
    />
  </div>



  {/* Button */}
  <Link
    to="/gallery"
    title="Contact Dr. Gagloeva"
    className="mt-4 px-5 py-2 bg-sky-500 rounded-xl shadow hover:bg-sky-600 transition text-center text-white"
  >
    {t("cards.card3.btn")}
  </Link>
</div>

      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dr. Anna Gagloeva",
          "url": "https://annagagloeva.ru",
          "logo": "https://annagagloeva.ru/icon.svg",
          "description": t("pages.about.content"),
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street",
            "addressLocality": "moscow",
            "postalCode": "00000",
            "addressCountry": "russia"
          },
          "telephone": "+79858889825"
        })
      }} />
    </div>
  );
};

export default Home;
