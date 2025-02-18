import { useState, useCallback } from "react";
import { useAppSelector } from "../app/hooks";
import { selectRepoKey } from "../features/issues/seletors";
import {saveTasksToLocalStorage } from "../utils/storageHelpers.ts";
import { useTasksInitializer } from "./useTasksInitializer";

export const useTaskBoard = () => {
  const key = useAppSelector(selectRepoKey);

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [sourceColumnIndex, setSourceColumnIndex] = useState<number | null>(null);

  const { tasks, setTasks } = useTasksInitializer(key);

  const onDrop = useCallback((status: string, position: number) => {
    if (activeCard == null || sourceColumnIndex == null) return;

    const targetColumnIndex = tasks.findIndex((task) => task.status === status);
    if (targetColumnIndex === -1) return;

    const updatedTasks = [...tasks];

    const [movedTask] = updatedTasks[sourceColumnIndex].list.splice(activeCard, 1);

    updatedTasks[targetColumnIndex].list.splice(position, 0, { ...movedTask, state: status });

    setTasks(updatedTasks);
    setSourceColumnIndex(null);
    saveTasksToLocalStorage(key, updatedTasks);
  }, [tasks, activeCard, key, sourceColumnIndex])

  return { tasks, setActiveCard, onDrop, setSourceColumnIndex};
};
