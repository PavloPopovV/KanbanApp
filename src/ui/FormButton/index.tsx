import { FormButtonProps } from "../../types/formTypes"

const FormButton = ({ title, type }: FormButtonProps) => {
  return (
    <button
      type={type}
      className="px-6 h-[40px] rounded-xl cursor-pointer outline-none uppercase bg-blue-600 text-white"
    >
      {title}
    </button>
  )
}

export default FormButton