// ✅ Default export only
export default function RoleCard({ icon, title, desc, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-white rounded-xl border-2 p-6 flex flex-col items-center text-center shadow-md 
        transition-all transform hover:-translate-y-1 hover:shadow-xl
        ${selected ? "border-blue-600 ring-2 ring-blue-300" : "border-gray-200"}`}
    >
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{desc}</p>
    </div>
  );
}
