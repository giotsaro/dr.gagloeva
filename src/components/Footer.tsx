import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="mt-10 dark:bg-sky-500 text-center text-white py-4 text-sm">
      {t("site.footer", { year: new Date().getFullYear() })}
    </footer>
  );
};

export default Footer;
