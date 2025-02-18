import { useForm } from "react-hook-form"
import { useFetchRepoData } from "../../hooks/useFetchRepoData"
import { FormProps } from "../../types/formTypes"
import { GITHUB_URL_PATTERN } from "../../constantes/regex"
import { FormButton, FormError, FormInput } from "../../ui"

const FormAdress = () => {
  const { fetchData } = useFetchRepoData()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      url: "",
    },
  })

  const onSubmit = (data: FormProps) => {
    fetchData(data)
    reset()
  }

  return (
    <section aria-labelledby="form-section">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[100%] flex justify-between items-start gap-5 mb-5"
      >
        <label htmlFor="url" className="w-[85%] relative pb-4">
          <FormInput
            register={register}
            name="url"
            placeholder="https://github.com/facebook/react"
            pattern={GITHUB_URL_PATTERN}
          />
          {errors.url && <FormError error={errors.url.message} />}
        </label>
        <FormButton title="Load issues" type="submit" />
      </form>
    </section>
  )
}

export default FormAdress