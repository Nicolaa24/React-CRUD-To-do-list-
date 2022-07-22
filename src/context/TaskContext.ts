import React from "react";
import { Task } from "../types";

export interface TaskContext {
  tasks: Task[];
  addTask: ({ name, description }: Omit<Task, 'completed' | 'id'>) => void;
  deleteTask: (id: Task['id']) => void;
  checkedTask: (id: Task['id']) => void;
  taskIdForEdit: Task['id'] | null;
  getTaskIdForEdit: (id: Task['id']) => void;
  changeTask: ({name,description}:Omit<Task, 'completed' | 'id'>) => void
}

export const TaskContext = React.createContext<TaskContext>({
  tasks: [],
  addTask: () => { },
  deleteTask: () => { },
  checkedTask: () => { },
  getTaskIdForEdit: () => { },
  taskIdForEdit: null,
  changeTask: () => { },
});