import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section className="bg-slate-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-slate-400">
              We’re happy to answer your questions and guide you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center hover:border-violet-500/40 transition duration-200  hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-700/10 h-full flex flex-col items-center justify-center">
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:918208821176" className=" text-slate-300 text-sm block mb-1 hover:text-violet-400 transition duration-300">+91 8208821176</a>
              <a href="tel:918624968931" className=" text-slate-300 text-sm block mb-1 hover:text-violet-400 transition duration-300">+91 8624968931</a>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center hover:border-violet-500/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-700/10 h-full">
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-slate-300 text-sm">Branch No. 1 - Shop No.6, Satyam Palace, 100ft Road, Near ICICI Bank, Indira Nagar, Nashik</p>
              <p className="text-slate-300 text-sm">Branch No. 2 - Flat No.5, Parth Society, Near Krutartha Bhavan, 100ft Road, Indira Nagar, Nashik</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center hover:border-violet-500/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-700/10 h-full flex flex-col items-center justify-center ">
              <h3 className="font-semibold text-lg mb-2">Class Hours</h3>
              <p className="text-slate-300 text-sm mb-1">Mon – Sat : </p>
              <p className="text-slate-300 text-sm"> 7:30AM to 11:00AM & 3:00PM to 8:30PM</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center hover:border-violet-500/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-700/10 h-full flex flex-col items-center justify-center">
              <h3 className="font-semibold text-lg mb-2">Mail</h3>
              <a href="mailto:pavansabale1@gmail.com" className=" text-slate-300 text-sm block mb-1 hover:text-violet-400 transition duration-300">pavansabale1@gmail.com</a>
            </div>
          </div>
        </Reveal>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto my-16"></div>

        <Reveal>

          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl mb-4 font-semibold">
              Need quick help with admission?
            </h3>
            <p className="text-slate-400 mb-8">
              Message us directly on WhatsApp and we’ll respond as soon as possible.
            </p>

            <a href="https://wa.me/918208821176" target="_blank" rel="noopener noreferrer" className="font-semibold bg-green-600 px-8 py-3 rounded-lg inline-block hover:bg-green-700 active:scale-95 shadow-lg shadow-green-600/20 hover:shadow-green-500/40 transition duration-300" >Ask on WhatsApp</a>
          </div>
        </Reveal>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto my-16"></div>
        <Reveal>

          <div className="mt-12 ">
            <h3 className="text-center text-2xl font-semibold mb-8">
              Visit Our Classroom
            </h3>

            <div className="rounded-xl overflow-hidden border border-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9190008146993!2d73.77865701125819!3d19.96990838135008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb502dd74783%3A0x831c513c1316a32a!2sNakshatra%20Tutorials!5e0!3m2!1sen!2sin!4v1772458754905!5m2!1sen!2sin" 
                height="350"
                width="100%"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
