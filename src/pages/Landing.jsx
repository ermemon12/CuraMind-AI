import "./Landing.css";
import { Link } from "react-router-dom";
import aiOverlay from "../assets/ai.png"; // adjust path if needed

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-700 tracking-wide font-poppins">
          CuraMind <span className="text-teal-500">AI</span>
        </h1>
        <div className="space-x-6 text-gray-700 font-medium font-poppins">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#how" className="hover:text-blue-600">How it Works</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition font-poppins"
        >
          Log Out
        </Link>
      </nav>

      <header className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-r from-blue-50 to-teal-50 overflow-hidden">
  <div className="relative z-10 max-w-lg mb-10 md:mb-0 animate-fadeInUp">
    <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6 font-poppins">
      Revolutionizing <span className="text-blue-700">Healthcare</span>  
      <br /> with <span className="text-teal-500">AI Intelligence</span>
    </h2>
    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-poppins">
      CuraMind AI is more than just technology — it’s a{" "}
      <span className="font-merriweather italic text-gray-800">bridge</span> between 
      <span className="font-merriweather italic text-gray-800"> medical expertise </span> 
      and 
      <span className="font-merriweather italic text-gray-800"> compassionate care</span>.  
      Our mission is to empower{" "}
      <span className="font-merriweather italic text-blue-700">doctors</span>, 
      <span className="font-merriweather italic text-blue-700"> patients</span>, and 
      <span className="font-merriweather italic text-blue-700"> researchers </span> 
      with safe, empathetic, and accurate AI-driven healthcare insights.
    </p>
    <Link
      to="/roles"
      className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition text-lg font-semibold font-poppins"
    >
      Get Started →
    </Link>
  </div>

  {/* AI Image as Background */}
  <img
    src={aiOverlay}
    alt="AI Healthcare Background"
    className="hero-ai-bg"
  />
</header>



      {/* How It Works */}
      <section id="how" className="bg-white py-16 px-8 md:px-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-poppins">
          How <span className="text-blue-600">CuraMind</span> Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="login" className="w-12 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 font-poppins">1. Login / Sign Up</h4>
            <p className="text-gray-600 font-poppins">
              Create a secure account and unlock access to{" "}
              <span className="font-merriweather italic">personalized healthcare AI tools</span>.
            </p>
          </div>
          <div className="p-6 bg-teal-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="role" className="w-12 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 font-poppins">2. Choose Your Role</h4>
            <p className="text-gray-600 font-poppins">
              Whether you’re a{" "}
              <span className="font-merriweather italic text-blue-700">doctor</span>,{" "}
              <span className="font-merriweather italic text-teal-600">patient</span>, 
              or <span className="font-merriweather italic">researcher</span> — 
              CuraMind adapts to your perspective.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="insights" className="w-12 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 font-poppins">3. Get AI Insights</h4>
            <p className="text-gray-600 font-poppins">
              Receive 
              <span className="font-merriweather italic text-blue-700"> accurate</span>, 
              <span className="font-merriweather italic text-teal-600"> empathetic</span>, 
              and <span className="font-merriweather italic">safe healthcare guidance</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-8 md:px-20 bg-gray-100">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-poppins">
          Key <span className="text-teal-500">Features</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h4 className="text-lg font-bold mb-2 text-blue-600 font-poppins">Role-Aware Responses</h4>
            <p className="text-gray-600 font-poppins">
              Tailored responses for{" "}
              <span className="font-merriweather italic">doctors</span>,{" "}
              <span className="font-merriweather italic">patients</span>, 
              and <span className="font-merriweather italic">researchers</span>.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h4 className="text-lg font-bold mb-2 text-teal-500 font-poppins">Safe & Empathetic AI</h4>
            <p className="text-gray-600 font-poppins">
              Balances{" "}
              <span className="font-merriweather italic text-blue-700">clinical accuracy</span> 
              with <span className="font-merriweather italic">human empathy</span>.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
            <h4 className="text-lg font-bold mb-2 text-blue-600 font-poppins">Multi-Metric Evaluation</h4>
            <p className="text-gray-600 font-poppins">
              Assessed across{" "}
              <span className="font-merriweather italic">accuracy</span>, 
              <span className="font-merriweather italic">safety</span>, 
              and <span className="font-merriweather italic">empathy</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-8 text-center mt-auto shadow-inner">
        <h4 className="font-bold text-gray-800 font-poppins">CuraMind AI</h4>
        <p className="text-gray-600 mt-1 font-poppins">© 2025 CuraMind AI. All rights reserved.</p>
        <p className="text-gray-500 mt-1 font-merriweather italic">Contact: curamind.ai@example.com</p>
      </footer>
    </div>
  );
}
