import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="text-center text-sm bg-sky-500/70 p-2 flex flex-col sm:flex-row justify-center sm:justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-1 text-white">
          <Phone size={16} />
          <a href={`tel:${t("site.phone")}`} className="hover:underline">
            {t("site.phone")}
          </a>
        </div>

        <div className="flex items-center space-x-1 text-white text-sm">
          <MapPin size={16} />
          <a
            href="https://yandex.com/maps/-/CLVdNQy8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t("site.address")}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-sky-500 text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/"><h1 className="text-xl font-bold">{t("site.title")}</h1></Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            <Link to="/" className="hover:underline">
              {t("pages.home.title")}
            </Link>
            <Link to="/about" className="hover:underline">
              {t("pages.about.title")}
            </Link>
            <Link to="/gallery" className="hover:underline">
              {t("pages.gallery.title")}
            </Link>
            <Link to="/contact" className="hover:underline">
              {t("pages.contact.title")}
            </Link>

            {/* Language Switch */}
              <button
              onClick={() => i18n.changeLanguage("ru")}
              className={`px-2 ${i18n.language === "ru" ? "font-bold" : ""}`}
            >
              RU
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-2 ${i18n.language === "en" ? "font-bold" : ""}`}
            >
              EN
            </button>
          
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-sky-600 px-4 pb-4 flex flex-col space-y-2">
            <Link
              to="/"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {t("pages.home.title")}
            </Link>

          <Link
              to="/about"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {t("pages.about.title")}
            </Link>

            <Link
              to="/gallery"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {t("pages.gallery.title")}
            </Link>

            <Link
              to="/contact"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {t("pages.contact.title")}
            </Link>

            {/* Language Switch */}
            <div className="flex gap-4 pt-2">
               <button
                onClick={() => {
                  i18n.changeLanguage("ru");
                  setIsOpen(false);
                }}
                className={`px-2 ${i18n.language === "ru" ? "font-bold" : ""}`}
              >
                RU
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                  setIsOpen(false);
                }}
                className={`px-2 ${i18n.language === "en" ? "font-bold" : ""}`}
              >
                EN
              </button>
             
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
