import { IssueType } from "./issueTypes";

export type ColumnType = {
  id: string,
  title: string;
  status: string;
  list: IssueType[];
};

export type CardListProps = {
  board: ColumnType;
  boardIndex: number;
  onDrop: (status: string, position: number) => void;
  setActiveCard: (index: number | null) => void;
  setSourceColumnIndex: (index: number | null) => void;

};

export type CardProps = {
  task: IssueType;
  taskIndex: number;
  boardIndex: number;
  setActiveCard: (index: number | null) => void;
  setSourceColumnIndex: (index: number | null) => void;
};