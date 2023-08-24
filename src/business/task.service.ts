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

export function filterDone(list:Task[]){
  return list.filter((task)=>task.state=="done")
}

export function deleteTask(list:Task[], removeItem:Task){
  return list.filter((task)=>task.id !== removeItem.id)
};

export function addTask(list:Task[], newItem:Task){
  const newID = new Date().valueOf();
  console.log(newID)
  newItem.id = newID;
  list.push(newItem);
  return list;
};
