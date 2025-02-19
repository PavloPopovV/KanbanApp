import { useForm } from "react-hook-form"
import { useFetchRepoData } from "../../hooks/useFetchRepoData"
import { FormProps } from "../../types/formTypes"
import { GITHUB_URL_PATTERN } from "../../constantes/regex"
import { FormButton, FormError, FormInput } from "../../ui"
import { SkeletonIssuesBoard, SkeletonsRepoInfo } from "../Skeletons"

const FormAdress = () => {
  const { fetchData, isLoading } = useFetchRepoData()

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
        className="w-[100%] border border-black rounded-xl flex items-center justify-between mb-5 px-4 py-6 gap-5 bg-[#1b1b1b]"
      >
        <label htmlFor="url" className="w-full relative">
          <FormInput
            register={register}
            name="url"
            placeholder="Enter the URL of the GitHub repository to check for issues"
            pattern={GITHUB_URL_PATTERN}
          />
          {errors.url && <FormError error={errors.url.message} />}
        </label>
        <FormButton title="Load issues" type="submit" isLoading={isLoading}/>
      </form>

      {isLoading && <SkeletonsRepoInfo/>}
      {isLoading && <SkeletonIssuesBoard/>}
    </section>
  )
}

export default FormAdress