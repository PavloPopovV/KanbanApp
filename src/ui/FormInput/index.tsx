import { FormInputProps } from "../../types/formTypes"

const FormInput = ({
  register,
  name,
  placeholder,
  pattern,
}: FormInputProps) => {
  return (
    <input
      className="py-1 px-3 rounded-xl w-full h-[40px] text-black bg-white focus:outline-0"
      type="text"
      placeholder={placeholder}
      {...register(name, {
        required: "This field cannot be empty",
        pattern: {
          value: pattern,
          message:
            "Please enter a valid GitHub repository URL (e.g. https://github.com/facebook/react)",
        },
      })}
    />
  )
}

export default FormInput