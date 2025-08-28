import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import RoleSelection from "./pages/RoleSelection";
import AskQuestion from "./pages/AskQuestion";
import Results from "./pages/Results";
import History from "./pages/History";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main Flow */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/results" element={<Results />} />

        {/* Extras */}
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
