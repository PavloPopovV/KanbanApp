import { ColumnType } from "../types/cardTypes";

export const saveTasksToLocalStorage = (repoKey: string, tasks: ColumnType[]) => {
    const storedData = JSON.parse(localStorage.getItem("repos") || "{}");
    storedData[repoKey] = tasks;
    localStorage.setItem("repos", JSON.stringify(storedData));
};

export const getTasksFromLocalStorage = (repoKey: string) => {
    const storedData = JSON.parse(localStorage.getItem("repos") || "{}");
    return storedData[repoKey] || null;
};