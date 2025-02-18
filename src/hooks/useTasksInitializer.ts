import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks.js";
import { selectIssues } from "../features/issues/seletors.js";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "../utils/storageHelpers.ts";
import { ColumnType } from "../types/cardTypes";

export const useTasksInitializer = (key: string | null) => {
  const [tasks, setTasks] = useState<ColumnType[]>([]);
  const issues = useAppSelector(selectIssues);
  
  useEffect(() => {
    if (!key) return;

    const savedTasks = getTasksFromLocalStorage(key);

    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      const initialTasks = [
        {
          id: "1",
          title: "todo",
          status: "open",
          list: issues.filter((item) => item.state === "open"),
        },
        {
          id: "2",
          title: "in progress",
          status: "in_progress",
          list: issues.filter((item) => item.state === "in_progress"),
        },
        {
          id: "3",
          title: "done",
          status: "closed",
          list: issues.filter((item) => item.state === "closed"),
        },
      ];

      setTasks(initialTasks);
      saveTasksToLocalStorage(key, initialTasks);
    }
  }, [issues, key]);

  return { tasks, setTasks };
};