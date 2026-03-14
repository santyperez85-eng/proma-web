import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  const [gridVisible, setGridVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    const routes: Record<string, string> = {
      home: "/",
      work: "/work",
      services: "/services",
      about: "/about",
      contact: "/contact",
    };
    navigate(routes[page] || "/");
  };

  const handleSelectProject = (id: string) => {
    navigate(`/work/${id}`);
  };

  const getNavPage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/work")) return "work";
    if (path === "/services") return "services";
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    return "home";
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: "var(--proma-bg)", color: "var(--proma-text-primary)" }}
    >
      <ScrollToTop />
      <Navbar
        currentPage={getNavPage()}
        onNavigate={handleNavigate}
        onToggleGrid={() => setGridVisible(!gridVisible)}
        gridVisible={gridVisible}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={<Home onNavigate={handleNavigate} onSelectProject={handleSelectProject} />}
            />
            <Route
              path="/work"
              element={<Work onSelectProject={handleSelectProject} />}
            />
            <Route
              path="/work/:projectId"
              element={<ProjectDetail onNavigate={handleNavigate} />}
            />
            <Route
              path="/services"
              element={<Services onNavigate={handleNavigate} />}
            />
            <Route
              path="/about"
              element={<About onNavigate={handleNavigate} />}
            />
            <Route
              path="/contact"
              element={<Contact onNavigate={handleNavigate} />}
            />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
