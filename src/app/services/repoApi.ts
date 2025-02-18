import { IssueType, RepoInfoType } from '../../types/issueTypes';
import { api } from './api'

export const repoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllIssue: builder.query<IssueType[], { owner: string; repo: string }>({
            query: ({ owner, repo }) => ({
                url: `repos/${owner}/${repo}/issues`,
                method: "GET"
            }),
        }),
        
        getRepo: builder.query<RepoInfoType, { owner: string; repo: string }>({
            query: ({ owner, repo }) => ({
                url: `repos/${owner}/${repo}`,
                method: "GET"
            }),
        }),
    })
})

export const {useLazyGetAllIssueQuery, useLazyGetRepoQuery} = repoApi
export const { endpoints: { getAllIssue, getRepo } } = repoApi;