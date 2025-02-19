import { FormErrorProps } from "../../types/formTypes"

const FormError = ({ error }: FormErrorProps) => {
  return (
    <div>
      <span className="text-red-600 text-xs absolute bottom--5 left-1 w-full ">
        {error}
      </span>
    </div>
  )
}

export default FormError