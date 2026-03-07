import { ArrowLeft } from "lucide-react"

const EditProfileHeader = ({ setEditOpen }) => {
  return (
    <div
      className="
        flex items-center gap-4
        px-6
        h-[64px]
        bg-white
        border-b border-gray-200
      "
    >
      <button
              onClick={() => setEditOpen(false)}

        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          bg-gray-100
          hover:bg-gray-200
          transition
          cursor-pointer
        "
      >
        <ArrowLeft
          size={18}
          className="text-gray-700"
        />
      </button>

      <h1 className="text-lg font-semibold text-gray-900">
        Edit Profile
      </h1>
    </div>
  )
}

export default EditProfileHeader  