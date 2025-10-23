import React from "react";
import { useTranslation } from "react-i18next";

// Import before/after images
import before1 from "../assets/BA/b1.jpg";
import after1 from "../assets/BA/a1.jpg";
import before2 from "../assets/BA/b2.jpg";
import after2 from "../assets/BA/a2.jpg";
import before3 from "../assets/BA/b3.jpg";
import after3 from "../assets/BA/a3.jpg";
import before4 from "../assets/BA/b4.jpg";
import after4 from "../assets/BA/a4.jpg";
import before5 from "../assets/BA/b5.jpg";
import after5 from "../assets/BA/a5.jpg"; 
import before6 from "../assets/BA/b6.jpg";
import after6 from "../assets/BA/a6.jpg";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  // Gallery data - each case has before/after images and description
  const cases = [
    {
      id: 1,
      before: before1,
      after: after1,
      title: t("pages.gallery.case1.title"),
    },
    {
      id: 2,
      before: before2,
      after: after2,
      title: t("pages.gallery.case2.title"),
    },
    {
      id: 3,
      before: before3,
      after: after3,
      title: t("pages.gallery.case3.title"),
    },
    {
      id: 4,
      before: before4,
      after: after4,
      title: t("pages.gallery.case4.title"),
    },
    {
      id: 5,
      before: before5,  
      after: after5,
      title: t("pages.gallery.case5.title"),
    },
    {
      id: 6,
      before: before6,    
      after: after6,
      title: t("pages.gallery.case6.title"),
    },
   
  ];

  const [selectedCase, setSelectedCase] = React.useState<typeof cases[0] | null>(null);

  // ESC key to close modal
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCase(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 text-center">
        {t("pages.gallery.title")}
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        {t("pages.gallery.content")}
      </p>

      {/* Gallery Grid */}
      <div className="space-y-8">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8"
          >
            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Before Image */}
              <div className="relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-md font-semibold text-sm z-10">
                  {t("pages.gallery.before", "До")}
                </div>
                <img
                  src={caseItem.before}
                  alt={`Before - ${caseItem.title}`}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedCase(caseItem)}
                />
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-md font-semibold text-sm z-10">
                  {t("pages.gallery.after", "После")}
                </div>
                <img
                  src={caseItem.after}
                  alt={`After - ${caseItem.title}`}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedCase(caseItem)}
                />
              </div>
            </div>

            {/* Description */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {caseItem.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal - Shows Both Before & After */}
      {selectedCase && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10 bg-black/20 bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-4">
              {selectedCase.title}
            </h3>

            {/* Before & After Images Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Before Image */}
              <div className="relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white px-4 py-2 rounded-md font-semibold text-base z-10">
                  {t("pages.gallery.before", "До")}
                </div>
                <img
                  src={selectedCase.before}
                  alt={`Before - ${selectedCase.title}`}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="absolute top-2 left-2 bg-green-500 text-white px-4 py-2 rounded-md font-semibold text-base z-10">
                  {t("pages.gallery.after", "После")}
                </div>
                <img
                  src={selectedCase.after}
                  alt={`After - ${selectedCase.title}`}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;