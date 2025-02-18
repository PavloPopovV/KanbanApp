import { RootState } from "../../app/store";

export const selectIssues = (state: RootState) => state.issues.issues;
export const selectRepoInfo = (state: RootState) => state.issues.repoInfo;
export const selectRepoKey = (state: RootState) => state.issues.localKey;