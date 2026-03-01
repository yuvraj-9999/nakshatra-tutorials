import { resultData } from "../data/resultData";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

export default function Result() {

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [selected]);


  return (
    <section className="bg-slate-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Results
            </h2>
            <p className="text-slate-400">
              Real outcomes achieved through concept-based learning and personal guidance.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            resultData.map((img, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(img)}
                tabIndex={0}
                key={img.id} className="cursor-zoom-in group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-violet-700/20 transition ">

                <div className="aspect-[3/4] bg-slate-950 flex items-center justify-center px-1 py-2">

                  <img
                    src={img.src}
                    loading="lazy"
                    decoding="async"
                    alt={img.alt}

                    className="w-full h-full object-contain  rounded-xl group-hover:scale-110 transition duration-500"
                  />

                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))
          }
        </div>

        <AnimatePresence>

          {
            selected && (

              <motion.div onClick={() => setSelected(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              >

                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => e.stopPropagation()} src={selected.src} alt={selected.alt} className="max-w-[90vw] max-h-[90vh] shadow-xl rounded-xl border border-slate-700/70" />
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </section>
  );
}
