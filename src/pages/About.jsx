import { timelineData } from "../data/TimelineData";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "B.E. Mechanical",
    desc: "Strong Analytical Foundation",
  },
  {
    title: "B.A. English",
    desc: "Clear Concept Explanation"
  },
  {
    title: "Concept-Focused Teaching",
    desc: "Understanding Over Memorization"
  },
  {
    title: "Small Batch Mentoring",
    desc: "Personal Attention to Every Student"
  },
];

const philosophyPoints = [
  {
    title: "Discipline With Care",
    desc: "Learning happens best in a structured environment where students feel supported, not pressured.",
  },
  {
    title: "Concepts First, Always",
    desc: "Understanding a topic deeply builds confidence far better than memorizing answers."
  },
  {
    title: "Every Student Matters",
    desc: "Each learner is treated with patience and guidance as if they were part of my own family."
  },
  {
    title: "Growth Through Consistency",
    desc: "Regular practice, feedback, and encouragement help students steadily improve."
  },
];
export default function About() {

  return (
    <>
      <section className="relative bg-slate-950 text-white px-6 py-20 md:py-24 overflow-hidden ">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-700/20 blur-[120px] rounded-full" />

        <Reveal>
          
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start md:items-center">

          {/* LEFT SIDE */}
          <div >

            {/* Label */}
            <p className="text-violet-400 font-medium mb-3">
              About The Teacher
            </p>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-violet-500 mb-6"></div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mr. Pavan Sabale
            </h1>

            {/* Description */}
            <p className="text-slate-300 mb-6 max-w-xl">
              Experienced educator specializing in concept-focused learning for
              students across major boards.
            </p>

            {/* Philosophy */}
            <p className="text-slate-400 leading-relaxed max-w-xl">
              My goal is not just to help students score well, but to ensure they
              truly understand every concept with clarity and confidence.
            </p>

          </div>


          {/* RIGHT SIDE — PHOTO */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-violet-600/20 blur-2xl rounded-3xl"></div>

              {/* Image Card */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-4 mr-8 mt-5 shadow-lg">

                <img
                  src="/newabout.jpg"
                  alt="Mr. Pavan Sabale"
                  className="rounded-xl w-64 sm:w-72 object-cover"
                />

              </div>

            </div>

          </div>

        </div>
        </Reveal>

      </section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent my-16"  />

      <section className="bg-slate-950 text-white px-6  pb-24 ">
        <div className="max-w-5xl mx-auto py-8 pt-18">
      <Reveal>

          <h2 className=" text-4xl md:text-5xl font-bold mb-16 text-center">Qualifications & Strengths</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {qualifications.map((qualifiaction, index) => (
              <div key={index} className="bg-slate-900 px-6 py-3 border border-slate-800 rounded-xl hover:border-violet-600/40 transition h-full">
                <h3 className="font-medium text-lg">{qualifiaction.title}</h3>
                <p className="text-xs text-slate-400 mt-2">{qualifiaction.desc}</p>
              </div>
            ))}
          </div>
      </Reveal>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white px-6 pt-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Teaching Philosophy
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              A balance of professional discipline and genuine care ensures
              that students grow academically while feeling supported throughout their journey.
            </p>
          </div>
          <div className="space-y-12">
            {philosophyPoints.map((philosophyPoint, index) => (
              <div key={index} className="border-l-4 border-violet-500/70 pl-6">
                <h3 className="font-semibold text-lg mb-2">
                  {philosophyPoint.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {philosophyPoint.desc}
                </p>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white px-6 pt-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Teaching Journey
            </h2>
            <p className="text-slate-400">
              A timeline of dedication, growth, and commitment to student success.
            </p>
          </div>
           </Reveal>
          <div className="relative py-10">

            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700/60"></div>
            {timelineData.map((item, index) => (
              
              <motion.div 
                key={index} 
                initial={{ opacity: 0 , y: 20}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 mb-12">
                <div className="absolute left-4 top-1 w-3 h-3 bg-violet-500 rounded-full -translate-x-[6px]"></div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">{item.year}</p>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>

              </motion.div>
          
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
