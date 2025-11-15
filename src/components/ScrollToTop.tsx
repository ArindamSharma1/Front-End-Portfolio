import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Lenis from "lenis";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Grab existing Lenis instance from window (set in App.tsx)
    const lenisInstance = (window as any).lenis as Lenis;
    if (lenisInstance) setLenis(lenisInstance);

    const toggleVisibility = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0); // ✅ Use Lenis' native smooth scroll
    } else {
      // fallback if Lenis not available
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:scale-110 active:scale-95 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
