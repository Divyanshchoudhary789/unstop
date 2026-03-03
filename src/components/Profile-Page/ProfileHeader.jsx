import { ArrowLeft } from "lucide-react"

const EditProfileHeader = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      
      <button
        className="
          w-8 h-8 flex items-center justify-center
          rounded-full
          bg-blue-100
          hover:bg-blue-700
          transition-all duration-200
          group
        "
      >
        <ArrowLeft
          size={16}
          className="
            text-gray-900
            group-hover:text-white
            transition-colors duration-200
          "
        />
      </button>

      <span className="text-sm font-semibold text-gray-900">
        Edit Profile
      </span>
    </div>
  )
}

export default EditProfileHeader