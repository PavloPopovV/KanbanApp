import { useAppDispatch } from "../app/hooks";
import { useLazyGetAllIssueQuery, useLazyGetRepoQuery } from "../app/services/repoApi";
import { setIssues, setLocalKey, setRepoInfo } from "../features/issues/issueSlice";
import { FormProps } from "../types/formTypes";


export const useFetchRepoData  = () => {
    const dispatch = useAppDispatch()
    const [triggerIssues] = useLazyGetAllIssueQuery()
    const [triggerRepoInfo] = useLazyGetRepoQuery()

    const fetchData = async (data: FormProps) => {
        try {
          const [owner, repo] = data.url.replace("https://github.com/", "").split("/")

          const [issuesResult, repoResult] = await Promise.all([
            triggerIssues({ owner, repo }).unwrap(),
            triggerRepoInfo({ owner, repo }).unwrap(),
          ])

          dispatch(setIssues(issuesResult))
          dispatch(setRepoInfo(repoResult))
          dispatch(setLocalKey(data.url))
        } catch (error) {
          console.error("Error fetching repo data:", error);
        }
    }

    return { fetchData };
};