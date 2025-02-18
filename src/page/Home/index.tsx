import FormAdress from "../../components/FormAdress"
import Column from "../../components/Column"
import RepoInfo from "../../components/RepoInfo"

const Home = () => {
  return (
    <main className="px-20 py-10">
      <FormAdress />
      <RepoInfo />
      <Column />
    </main>
  )
}

export default Home