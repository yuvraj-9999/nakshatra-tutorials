import { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, stagger } from "framer-motion";

export function NavbarMobile() {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
  document.body.style.overflow = "auto";
}
  }, [open])

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.04
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const menuItem = {
    hidden: {
      opacity: 0,
      y: -6,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const menuCTA = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
    <header className="md:hidden sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="flex items-center justify-between px-4 py-3 text-white ">


        <Link to="/" className="block">
          <h1 className="text-base md:text-lg font-bold">
            <span>Nakshatra</span>
            <span className="text-violet-400"> Tutorials</span>
          </h1>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="font-bold text-2xl text-slate-400 hover:text-white transition duration-300 leading-none" aria-label="Toggle menu" aria-expanded={open}  >{open ? "✕" : "☰"}</button>

      </div>

      <AnimatePresence>
        {
          open && (


            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="border-t border-slate-800  bg-slate-950/95 ">
              <ul className="flex flex-col px-4 py-4 text-sm space-y-4">
                {[
                  { to: "/", label: "Home", end: true },
                  { to: "/courses", label: "Courses" },
                  { to: "/about", label: "About" },
                  { to: "/result", label: "Results" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact", label: "Contact" },
                ].map(({ to, label, end }) => (
                  <motion.li
                    key={label}
                    variants={menuItem}
                  >
                    <NavLink
                      to={to}
                      end={end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => isActive ? "text-white font-semibold" : "text-slate-300 active:opacity-70 transition"}
                    >
                      {label}
                    </NavLink>

                  </motion.li>
                ))}

              </ul>
              <motion.div
                variants={menuCTA}
                className="px-4 pb-2">

                <button onClick={() => {
                  navigate("/contact");
                  setOpen(false);
                }} className="w-full bg-violet-700 py-3 rounded-md font-medium active:scale-95">
                  Enroll
                </button>
              </motion.div>
            </motion.nav>
          )
        }
      </AnimatePresence>

    </header>
  );
}
