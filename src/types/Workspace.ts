import type { Todo } from "./Todo";

export type userID = number | string; 
export type DateTimeData = number | string;

export type Workspace = { 
    name: string,
    createdAt: number | string, 
    createdBy: number | string, 
    todoList: Todo[]
}



