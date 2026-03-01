import { NavLink, useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 hidden md:flex items-center justify-between px-6 py-3 md:py-5  bg-slate-950 border-b border-slate-800 text-white">

<Link to="/" className="block">
  <h1 className="text-base md:text-lg font-bold">
    <span>Nakshatra</span>
    <span className="text-violet-400"> Tutorials</span>
  </h1>
</Link>
      


      <nav className="flex items-center text-sm gap-4 tracking-wide">
        <NavLink to="/" end className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-violet-500 pb-1"
            : "text-slate-300 hover:text-white transition duration-200"
        }>Home</NavLink>

        <NavLink to="/courses" className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-violet-500 pb-1"
            : "text-slate-300 hover:text-white transition duration-200"
        }>Courses</NavLink>

        <NavLink to="/about" className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-violet-500 pb-1"
            : "text-slate-300 hover:text-white transition duration-200"
        }>About</NavLink>

        <NavLink to="/result" className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-violet-500 pb-1"
            : "text-slate-300 hover:text-white transition duration-200"
        }>Results</NavLink>

        <NavLink to="/gallery" className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-violet-500 pb-1"
            : "text-slate-300 hover:text-white transition duration-200"
        }>Gallery</NavLink>

        <NavLink to="/contact" className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-violet-500 pb-1"
            : "text-slate-300 hover:text-white transition duration-200"
        }>Contact</NavLink>
      </nav>


      <button onClick={()=>navigate("/contact")} className="bg-violet-700 px-4 py-2 md:px-5 md:py-2.5 rounded-lg shadow-lg shadow-violet-700/20 hover:bg-violet-800 hover:scale-[1.03] transition duration-300 active:scale-100">
        Enroll
      </button>

    </header>
  );
}
