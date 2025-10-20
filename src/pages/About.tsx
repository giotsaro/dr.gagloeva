import React from "react";
import { useTranslation } from "react-i18next";
import s_2 from "../assets/s_2_2.png";
// Import certificate images
import cert1 from   "../assets/cert/c1.jpeg";
import cert2 from   "../assets/cert/c2.jpeg";  
import cert3 from   "../assets/cert/c3.jpeg";
import cert4 from   "../assets/cert/c4.jpeg";
import cert5 from   "../assets/cert/c5.jpeg";  
import cert6 from   "../assets/cert/c6.jpeg";
import cert7 from   "../assets/cert/c7.jpeg";
import cert8 from   "../assets/cert/c8.jpeg";
import cert9 from   "../assets/cert/c9.jpeg";
import cert10 from "../assets/cert/c10.jpeg";  
import cert11 from "../assets/cert/c11.jpeg";
import cert12 from "../assets/cert/c12.jpeg";  

// ... import all 12 certificates

const About: React.FC = () => {
  const { t } = useTranslation();

  const courses = t("pages.about.courses", { returnObjects: true }) as string[];

  // Certificate data array
  const certificates = [
    { id: 1, image: cert1, title: "Certificate 1" },
    { id: 2, image: cert2, title: "Certificate 2" },
    { id: 3, image: cert3, title: "Certificate 3" },
    { id: 4, image: cert4, title: "Certificate 4" },
    { id: 5, image: cert5, title: "Certificate 5" },
    { id: 6, image: cert6, title: "Certificate 6" },
    { id: 7, image: cert7, title: "Certificate 7" },
    { id: 8, image: cert8, title: "Certificate 8" },
    { id: 9, image: cert9, title: "Certificate 9" },
    { id: 10, image: cert10, title: "Certificate 10" },
    { id: 11, image: cert11, title: "Certificate 11" },
    { id: 12, image: cert12, title: "Certificate 12" },
  ];

  const [selectedCert, setSelectedCert] = React.useState<number | null>(null);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Card Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start mb-8">
        {/* Image Card */}
        <div className="w-full sm:w-96 lg:w-1/4 flex-shrink-0 bg-sky-500 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img
            src={s_2}
            alt="Dental Clinic"
            className="w-full h-96 sm:h-56 lg:h-64 object-cover"
          />

          <div className="p-4 sm:p-5 text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">
              {t("site.title")}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {t("pages.about.position")}
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm sm:text-base lg:text-lg whitespace-pre-line leading-relaxed">
            {t("pages.about.content")}
          </p>
          <p className="mt-4 text-sm sm:text-base lg:text-lg whitespace-pre-line leading-relaxed">
            {t("pages.about.education")}
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-sky-500  rounded-lg p-4 sm:p-6 lg:p-8 shadow-md mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold mb-4 sm:mb-6 text-center lg:text-left">
          {t("pages.about.coursesTitle", "pages.about.coursesTitle")}
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
          {courses.map((course, index) => (
            <li
              key={index}
              className="flex items-start gap-2 bg-white  p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-blue-600  font-bold flex-shrink-0">
                &#9679;
              </span>
              <span className="text-gray-700">{course}</span>
            </li>
          ))}
        </ul>
      </div>

   {/* Certificates Gallery */}
<div className="bg-sky-500 rounded-lg p-4 sm:p-6 lg:p-8 shadow-md">
  <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-6 text-center">
    {t("pages.about.certificatesTitle", "Certificates")}
  </h3>
  
  {/* Grid Layout - 1 column on mobile, then 2, 3, 4, 6 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
    {certificates.map((cert) => (
      <div
        key={cert.id}
        className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        onClick={() => setSelectedCert(cert.id)}
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-48 sm:h-40 md:h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/10 bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity">
            🔍 View
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Lightbox Modal */}
{selectedCert && (
  <div
    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedCert(null)}
  >
    <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
      {/* Close button */}
      <button
        onClick={() => setSelectedCert(null)}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10 bg-black/30 bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={certificates.find((c) => c.id === selectedCert)?.image}
        alt={`Certificate ${selectedCert}`}
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium">
        {selectedCert} / {certificates.length}
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedCert((prev) => (prev! > 1 ? prev! - 1 : certificates.length));
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 bg-opacity-60 hover:bg-opacity-80 text-white text-4xl w-14 h-14 flex items-center justify-center rounded-full transition-all shadow-lg z-10"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedCert((prev) => (prev! < certificates.length ? prev! + 1 : 1));
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 bg-opacity-60 hover:bg-opacity-80 text-white text-4xl w-14 h-14 flex items-center justify-center rounded-full transition-all shadow-lg z-10"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default About;
