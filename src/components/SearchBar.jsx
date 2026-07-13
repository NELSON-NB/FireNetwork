export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search by title, description, or category..."
        className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm outline-none transition focus:border-[#E3001B] focus:ring-2 focus:ring-[#E3001B]/10"
      />
    </div>
  )
}