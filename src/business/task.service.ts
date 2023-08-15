import arrayTask from "./tasks.model";
import type { Task } from "./types";

export async function getTaskList(): Promise<Task[]> {
  return Promise.resolve(arrayTask);
}

export function filterTodo(list:Task[]){
  return list.filter((task)=>task.state=="todo")
}

export function filterDoing(list:Task[]){
  return list.filter((task)=>task.state=="doing")
}