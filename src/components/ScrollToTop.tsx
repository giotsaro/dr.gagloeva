import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // შეგიძლია შეცვალო "auto"-დ, თუ გინდა მყისიერი ასქროლვა
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
