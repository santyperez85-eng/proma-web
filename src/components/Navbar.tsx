import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { RollingText } from "./RollingText";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onToggleGrid: () => void;
  gridVisible: boolean;
}

const navItems = [
  { id: "home", label: "Inicio", path: "/" },
  { id: "work", label: "Work", path: "/work" },
  { id: "services", label: "Servicios", path: "/services" },
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contacto", path: "/contact" },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "America/Argentina/Buenos_Aires",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(18, 18, 18, 0.92)" : "rgba(18, 18, 18, 0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          borderBottom: scrolled ? "1px solid var(--proma-border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`}
          >
            {/* Logo */}
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div
                className="w-8 h-8 bg-[var(--proma-accent)] flex items-center justify-center"
                style={{ borderRadius: "8px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "var(--proma-bg)",
                  }}
                >
                  P
                </span>
              </div>
              <span
                className="text-[var(--proma-text-primary)]"
                style={{
                  fontFamily: "var(--proma-display)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                pro.ma
              </span>
            </button>

            {/* Desktop nav — center */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`relative px-4 py-2 transition-colors duration-200 ${currentPage === item.id
                      ? "text-[var(--proma-text-primary)]"
                      : "text-[var(--proma-text-secondary)] hover:text-[var(--proma-text-primary)]"
                    }`}
                  style={{
                    fontFamily: "var(--proma-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                  }}
                >
                  <RollingText>{item.label}</RollingText>
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-4 right-4 h-px bg-[var(--proma-text-primary)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side info */}
            <div className="hidden md:flex items-center gap-4">
              <span
                className="text-[var(--proma-text-secondary)]"
                style={{
                  fontFamily: "var(--proma-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                }}
              >
                Buenos Aires
              </span>
              <span
                className="text-[var(--proma-accent)]"
                style={{
                  fontFamily: "var(--proma-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                {currentTime}
              </span>
              {/* Theme toggle circle */}
              <div
                className="w-8 h-8 flex items-center justify-center cursor-pointer"
                style={{
                  background: "var(--proma-accent)",
                  borderRadius: "50%",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--proma-bg)" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[var(--proma-text-primary)] p-2 cursor-pointer"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(18, 18, 18, 0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => onNavigate(item.id)}
                  className={`px-6 py-3 cursor-pointer transition-colors ${currentPage === item.id
                      ? "text-[var(--proma-accent)]"
                      : "text-[var(--proma-text-secondary)] hover:text-[var(--proma-text-primary)]"
                    }`}
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "2rem",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
