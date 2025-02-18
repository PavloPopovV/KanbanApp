export interface StoreStateType {
    issues: IssueType[];
    repoInfo: RepoInfoType | null;
    localKey: string;
}

export type IssueType = {
    id: number;
    title: string;
    number: number;
    state: string;
    html_url:string;
    updated_at: string;
    user: { login: string };
    comments: number;
};

export type RepoInfoType = {
    full_name: string;
    stargazers_count: number;
};