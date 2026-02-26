export default function RoleCard({ title, company, logo }) {
  return (
    <div className="bg-white rounded-2xl border p-6 hover:shadow-md transition">
      
      <div className="flex justify-center mb-5">
        <img
          src={logo}
          alt={title}
          className="w-20 h-20 object-contain"
        />
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{company}</p>

      <button className="w-full h-10 rounded-full border text-sm font-medium hover:bg-gray-100 transition">
        Start Test
      </button>
    </div>
  );
}