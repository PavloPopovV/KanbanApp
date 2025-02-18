import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IssueType, RepoInfoType, StoreStateType } from "../../types/issueTypes"

const initialState : StoreStateType = {
    issues: [],  
    repoInfo: null,
    localKey: "",
}

const issueSlice = createSlice({
    name: "issues",
    initialState,
    reducers: {
        setIssues: (state, action: PayloadAction<IssueType[]>) => {
            state.issues = action.payload
        },
        setRepoInfo: (state, action: PayloadAction<RepoInfoType>) => {
            state.repoInfo = action.payload
        },
        setLocalKey: (state, action: PayloadAction<string>) => {
            state.localKey = action.payload
        },
    },
})

export const { setIssues, setRepoInfo, setLocalKey } = issueSlice.actions
export default issueSlice.reducer