import "../pages/global.css"
import React, { useEffect, useState } from 'react';


import {getTaskList, filterTodo, filterDoing, filterDone, deleteTask, addTask, updateCurrentTask, createNewEmptyTask } from "@/business/task.service"

import { ListColumn } from "@/app/components/list-general/list-general"
import { Task } from "@/business/types";

import { FormNewTask } from "@/app/components/form-new-task/formNewTask";

export default function List() {
  let [list, setList] = useState<Array<Task>>([]);
  let [showCreate, setShowCreate] = useState(false);
  let [showUpdate, setShowUpdate] = useState(false);

  let [currentTask, setCurrentTask]= useState(createNewEmptyTask());

  useEffect(() => {
    const fetchTask = async ()=>{
      const tasks = await getTaskList();
      setList(tasks)
    }
    fetchTask().catch(console.error);
  }, [])

  const removeTask = (removeItem:Task) => {
    setList(deleteTask(list, removeItem));
  }

  const showFormNewTask = () => {
    console.log("create form");
    setShowCreate(true);
  }
  
  const showFormUpdateTask = (item:Task) => {
    console.log("update form");
    console.log(item);

    //currentTask = item;
    setCurrentTask(item);

    console.log(currentTask);
    setShowUpdate(true);
  }

  const hideFormNewTask = () => {
    setShowCreate(false);
    setShowUpdate(false);
  }

  const createTask = (newItem:Task) => {
    console.log("boton crear tarea");
    setList(addTask(list, newItem));
    hideFormNewTask();
    console.log(list);
  }
  
  const updateTask = (item:Task) => {
    console.log("actualizar tarea");
    setList(updateCurrentTask(list, item));
    hideFormNewTask();
    console.log(list);
  }

  return (
    <div className="general-container">
      {showFormCreate(showCreate, createTask, hideFormNewTask)}
      {showFormUpdate(showUpdate, currentTask, updateTask, hideFormNewTask)}
    
      <div className="general-list">
        <div className="header">
          <div className="header__text">
            <b>Admin Dashboard</b>
          </div>
        </div>
        <div className="header-line"></div>
        <main className="task-list-container">
          <ListColumn value={filterTodo(list)} title="To Do" key='Todo' stateList="todo" removeFunction={removeTask} updateFunction={showFormUpdateTask} showFormNewTaskFunction={showFormNewTask} ></ListColumn>
          <ListColumn value={filterDoing(list)} title="In Progress" key='Doing' stateList="doing" removeFunction={removeTask} updateFunction={showFormUpdateTask} showFormNewTaskFunction={showFormNewTask}></ListColumn>
          <ListColumn value={filterDone(list)} title="Review" key='Done' stateList="done" removeFunction={removeTask} updateFunction={showFormUpdateTask} showFormNewTaskFunction={showFormNewTask}></ListColumn>
        </main>
    </div>
    </div>
    
  )
}


export function showFormCreate(show:boolean, taskFunction:Function, hideFormNewTask:Function) {
  let tempTask: Task;
  tempTask = createNewEmptyTask();
  if (show) {
    return(
      <><div className="background-task"></div><div className="new-task-form-container">
        <FormNewTask currentTask={tempTask} taskFunction={taskFunction} cancelFunction={hideFormNewTask} />
      </div></>
    );
  }
  else {
    return("");
  }
}

export function showFormUpdate(show:boolean, item:Task, taskFunction:Function, hideFormNewTask:Function) {
  console.log("tarea a actualizar: ", item);
  if (show) {
    return(
      <><div className="background-task" ></div>
      <div className="new-task-form-container">
        <FormNewTask currentTask={item} taskFunction={taskFunction} cancelFunction={hideFormNewTask} />
      </div></>
    );
  }
  else {
    return("");
  }
}