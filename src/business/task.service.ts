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


//remove
export function deleteTask(removeItem:Task){
  console.log("Eliminar:");
  console.log(removeItem);

  //lista = [...props.value]; // make a separate copy of the array
  var index = arrayTask.indexOf(removeItem)
  if (index !== -1) {
    arrayTask.splice(index, 1);
    //props.value = array;
  }
  /*
  setLista(current =>
    current.filter(lista => {
      return lista.id !== removeItem.id;
    }),
  );
  */
  //console.log(lista);
  //console.log(props.value);
  
  return arrayTask;
};