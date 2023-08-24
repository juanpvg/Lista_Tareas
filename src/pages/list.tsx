import "../pages/global.css"
import React, { useEffect, useState } from 'react';


import {getTaskList, filterTodo, filterDoing, filterDone, deleteTask, addTask } from "@/business/task.service"

import { ListColumn } from "@/app/components/ListGeneral/ListGeneral"
import { Task } from "@/business/types";

import { FormNewTask } from "@/app/components/form-new-task/formNewTask";

export default function List() {
  let [list, setList] = useState<Array<Task>>([]);
  let [showList, setShowList] = useState(false);

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

  const showFormNewTask = (newItem:Task) => {
    setShowList(true);
    console.log(showList);
  }

  const hideFormNewTask = (newItem:Task) => {
    setShowList(false);
    console.log(showList);
  }

  const createTask = (newItem:Task) => {
    console.log("boton crear tarea")
    setList(addTask(list, newItem));
    setShowList(false);
  }
  return (
    <div className="general-container">
      {showForm(showList, createTask, hideFormNewTask)}
    
      <div className="general-list">
        <div className="header">
          <div className="header__text">
            <b>Admin Dashboard</b>
          </div>
        </div>
        <div className="header-line"></div>
        <main className="task-list-container">
          <ListColumn value={filterTodo(list)} title="To Do" key='Todo' stateList="todo" removeFunction={removeTask} showFormNewTaskFunction={showFormNewTask} ></ListColumn>
          <ListColumn value={filterDoing(list)} title="In Progress" key='Doing' stateList="doing" removeFunction={removeTask} showFormNewTaskFunction={showFormNewTask}></ListColumn>
          <ListColumn value={filterDone(list)} title="Review" key='Done' stateList="done" removeFunction={removeTask} showFormNewTaskFunction={showFormNewTask}></ListColumn>
        </main>
    </div>
    </div>
    
  )
}


export function showForm(showList:boolean, createTask:Function, hideFormNewTask:Function) {
  if (showList) {
    return(
      <><div className="background-task" ></div>
      <div className="new-task-form-container">
        <FormNewTask createTaskFunction={createTask}> </FormNewTask>
      </div></>
    );
  }
  else {
    return("");
  }
}