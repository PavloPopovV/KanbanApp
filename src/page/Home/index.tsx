import FormAdress from "../../components/FormAdress"
import Column from "../../components/Column"
import RepoInfo from "../../components/RepoInfo"
import BoardIntro from "../../components/BoardIntro"

const Home = () => {
  return (
    <main className="px-20 py-6">
      <BoardIntro/>
      <FormAdress />
      <RepoInfo />
      <Column />
    </main>
  )
}

export default Home
