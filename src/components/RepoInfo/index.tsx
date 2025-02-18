import { useAppSelector } from "../../app/hooks"
import { selectRepoInfo } from "../../features/issues/seletors"

const RepoInfo = () => {
  const repoInfo = useAppSelector(selectRepoInfo) 

  return (
    <section aria-labelledby="repo-info">
      {repoInfo && 
        <div className="flex gap-10 mb-5">
          <ul className="flex gap-4 text-blue-600">
            <li>
              <a
                href={`https://github.com/${repoInfo.full_name.replace(/\/[^/]+$/, "")}`}
                target="_blank"
              >
                {repoInfo.full_name.replace(/\/[^/]+$/, "")}
              </a>
            </li>
            <span>|</span>
            <li>
              <a
                href={`https://github.com/${repoInfo.full_name}`}
                target="_blank"
              >
                {repoInfo.full_name.replace(/^.*?\//, "")}
              </a>
            </li>
          </ul>
          <p>⭐ {(repoInfo.stargazers_count / 1000) >= 1 ? (`${(repoInfo.stargazers_count / 1000).toFixed()}k`) : repoInfo.stargazers_count} stars</p>
        </div>
      }
    </section>
  )
}

export default RepoInfo