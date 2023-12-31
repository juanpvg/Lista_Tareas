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

export function updateCurrentTask(list:Task[], item:Task){
  console.log("tarea a actualizar: ", item);
  let upd_obj = list.findIndex((obj => obj.id == item.id));

  console.log("posicion: ", upd_obj);
  console.log("Before Object Updation: ", list[upd_obj]);

  list[upd_obj].title = item.title;
  list[upd_obj].resume = item.resume;
  list[upd_obj].state = item.state;

  console.log("After Object Updation: ", list[upd_obj]);
  return list
};


export function createNewEmptyTask() {
  let tempTask: Task
  tempTask = {
    id: 1,
    title: "",
    resume: "",
    avatr: {
      name: "",
      img: "",
      role: ""
    },
    tags: [],
    state: "todo"
  }
  return tempTask;
}
