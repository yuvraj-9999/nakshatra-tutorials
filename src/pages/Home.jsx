import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import Reveal from "../components/Reveal";

export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 pt-8 md:pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-violet-400 font-medium mb-4">
              Concept-Based Offline Coaching for Classes 6–10
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Learning Is a Treasure, <br />
              That Will Follow Its Owner Everywhere.
            </h1>
            <p className="text-slate-300 mb-8 max-w-lg">
              At Nakshatra Tutorials, we focus on clarity, small batches,
              and personal attention so every student truly understands
              what they learn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={()=>navigate("/contact")}
                className="bg-violet-700 px-6 py-3 rounded-md font-medium hover:shadow-lg hover:bg-violet-800 hover:scale-[1.03] hover:shadow-violet-700/30 active:bg-violet-700 active:scale-100 transition duration-300 ">Enroll Now</button>
              <button 
                onClick={()=>navigate("/courses")}
                className="border border-slate-700 px-6 py-3 rounded-md font-medium hover:bg-slate-800 hover:scale-[1.03] hover:shadow-md hover:shadow-slate-700/20 active:bg-slate-700 active:scale-100 transition duration-300">View Courses</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            style={{ willChange: "transform, opacity" }}
            className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-700/20 hover:border-violet-600/40 transition-all duration-500 ">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl text-violet-400 font-bold">1000+</h2>
                <p className="text-slate-300">Students Taught</p>
              </div>
              <div>
                <h2 className="text-3xl text-violet-400 font-bold">10+ Years</h2>
                <p className="text-slate-300">Teaching Experience</p>
              </div>
              <div>
                <h2 className="text-3xl text-violet-400 font-bold">90%+</h2>
                <p className="text-slate-300">Score Improvement</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="bg-slate-950 text-white ">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">
          <Reveal>

          <div className="max-w-2xl text-center mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Nakshatra Tutorials</h2>
            <p className="text-slate-400">We focus on clarity, consistency, and personal guidance — so students
              build confidence along with strong academic foundations.</p>
          </div>
          </Reveal>

            <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-violet-600/40 hover:bg-slate-900 transition duration-300  hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-4">
                Concept First, Always
              </h3>
              <p className="text-sm text-slate-500">
                We prioritize understanding before practice, helping students truly
                grasp concepts instead of relying on memorization.
              </p>
            </div>


            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-violet-600/40 hover:bg-slate-900 transition duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-4">
                Small Batches, Real Attention
              </h3>
              <p className="text-sm text-slate-500">
                Limited batch sizes ensure every student gets personal attention
                and doubts are never ignored.
              </p>
            </div>


            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-violet-600/40 hover:bg-slate-900 transition duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-4">
                Regular Tests & Feedback
              </h3>
              <p className="text-sm text-slate-500">
                Frequent testing and honest feedback help students track progress
                and improve step by step.
              </p>
            </div>


            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-violet-600/40 hover:bg-slate-900 transition duration-300 hover:-translate-y-1">
              <h3 className="font-semibold text-lg mb-4">
                A Teacher Who Cares
              </h3>
              <p className="text-sm text-slate-500">
                Teaching with patience and care, creating a supportive environment
                where students feel confident to learn.
              </p>
            </div>
          </div>
            </Reveal>
        </div>
      </section>

      <section className="bg-slate-900/40 text-white">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
          <Reveal>

          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Classes We Offer
            </h2>
            <p className="text-slate-400">
              Focused offline coaching with concept clarity and personal guidance
              for key academic years.
            </p>
          </div>

          <ul className="space-y-5 max-w-lg mx-auto">
            <li className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-lg font-bold">Class 6</span>
              <span className="text-sm text-slate-400">All Boards</span>
            </li>
            <li className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-lg font-bold">Class 7</span>
              <span className="text-sm text-slate-400">All Boards</span>
            </li>
            <li className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-lg font-bold">Class 8</span>
              <span className="text-sm text-slate-400">All Boards</span>
            </li>
            <li className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-lg font-bold">Class 9</span>
              <span className="text-sm text-slate-400">All Boards</span>
            </li>
            <li className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-lg font-bold">Class 10</span>
              <span className="text-sm text-slate-400">All Boards</span>
            </li>
          </ul>

          <div className="mt-10 flex justify-center">
            <button 
              onClick={()=>navigate("/courses")}
              className="border border-slate-700 px-6 py-3 rounded-md font-medium hover:bg-slate-800 active:bg-slate-700 transition duration-300">View Full Course Details </button>
          </div>
          </Reveal>

        </div>
      </section>
    </>

  );
}
