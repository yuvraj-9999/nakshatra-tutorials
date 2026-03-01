import { useState } from "react";
import { coursesData } from "../data/coursesData";
import { motion, AnimatePresence } from "framer-motion"
import Reveal from "../components/Reveal";

export default function Courses() {

  const [openClass, setOpenClass] = useState(null);

  const toggleLogic = (className) => {
    setOpenClass(openClass === className ? null : className);
  };

  return (
    <section className="text-white px-6 py-18 md:py-24 mt-15">
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <Reveal>

          <h1 className="font-bold text-4xl mb-4">
            Course Details
          </h1>
          <p className="text-slate-400">
            Offline coaching for Classes 6–10 across major boards
          </p>
        </Reveal>
      </div>
      <div className="max-w-5xl mx-auto space-y-6">
        {
          coursesData.map((course, index) => {
            const isOpen = openClass === course.className;

            return (
              <motion.div
                key={course.className}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="bg-slate-900 border border-slate-800 rounded-xl hover:-translate-y-1  hover:shadow-xl hover:shadow-violet-700/20 hover:border-violet-600/40 transition-all duration-500"
              >
                <button
                  onClick={() => toggleLogic(course.className)}
                  className="w-full text-left px-6 py-4 font-semibold flex items-center justify-between "
                >
                  <span>{course.className}</span>

                  <motion.img src="/dropdown.svg" alt="toggle" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="w-4 h-4 invert opacity-80" />

                </button>


                <AnimatePresence initial={false}>

                  {
                    isOpen && (
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0.95 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originY: 0 }}
                        className="px-6 pb-6 space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  text-sm">
                          <div>
                            <h3 className="font-semibold mb-2 mt-2 text-slate-400">Subjects:</h3>
                            <p className="text-slate-200">{course.commonInfo.subjects}</p>
                          </div>
                          <div>

                            <h3 className="font-semibold mt-2 mb-2 text-slate-400">Mode:</h3>
                            <p className="text-slate-200">{course.commonInfo.mode}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold mt-2 mb-2 text-slate-400">Batch Size:</h3>
                            <p className="text-slate-200">{course.commonInfo.batchSize}</p>

                          </div>
                        </div>

                        <div className="mb-9">
                          <h4 className="font-medium mt-4 mb-2 text-sm text-slate-400">Teaching Focus:</h4>
                          <ul className=" pl-5 pt-2 list-disc space-y-3 text-sm text-slate-200 ">
                            {course.commonInfo.focusPoints.map((focusPoint, index) => (
                              <li key={index}>{focusPoint}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 border-t border-slate-800">
                          <h4 className="text-sm font-medium text-slate-400 mb-1">
                            Fees by Board
                          </h4>
                          <p className="text-xs mb-3 text-slate-500/85">To be paid at the time of admission.</p>
                          <ul className="divide-y divide-slate-800 text-sm">
                            {course.boards.map((board) => (
                              <li key={board.board} className="flex justify-between py-2">
                                <span className="text-slate-300">{board.board}</span>
                                <span className="text-slate-400">{board.fee}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                    )
                  }
                </AnimatePresence>
              </motion.div>
            );
          })
        }
      </div>
    </section >
  );
}
