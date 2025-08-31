import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleCard from "../components/RoleCard"; // ✅ must be default import

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const roles = [
    { id: "doctor", title: "Doctor", desc: "Concise, technical responses", icon: "https://cdn-icons-png.flaticon.com/512/387/387561.png" },
    { id: "patient", title: "Patient", desc: "Simple, empathetic explanations", icon: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png" },
    { id: "caregiver", title: "Caregiver", desc: "Support-focused guidance", icon: "https://cdn-icons-png.flaticon.com/512/4323/4323004.png" },
    { id: "student", title: "Student", desc: "Detailed, educational answers", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      localStorage.setItem("role", selectedRole);
      navigate("/ask");
    } else {
      alert("Please select a role!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Select Your Role</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-4xl">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            icon={role.icon}
            title={role.title}
            desc={role.desc}
            selected={selectedRole === role.id}
            onClick={() => setSelectedRole(role.id)}
          />
        ))}
      </div>

      <button
        onClick={handleContinue}
        className={`px-6 py-3 text-white font-semibold rounded-xl shadow transition 
          ${selectedRole ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
        disabled={!selectedRole}
      >
        Continue →
      </button>
    </div>
  );
}
