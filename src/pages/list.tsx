import "../pages/global.css"
import React, { useEffect, useState } from 'react';


import {getTaskList, filterTodo, filterDoing, filterDone, deleteTask } from "@/business/task.service"

import { ListColumn } from "@/app/components/ListGeneral/ListGeneral"
import { Task } from "@/business/types";

export default function List() {
  let [list, setList] = useState<Array<Task>>([])

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

  return (
    <div >
      <div className="header">
        <div className="header__text">
          <b>Admin Dashboard</b>
        </div>
      </div>
      <div className="header-line"></div>
      <main className="task-list-container">
        <ListColumn value={filterTodo(list)} title="To Do" key='Todo' removeFunction={removeTask} ></ListColumn>
        <ListColumn value={filterDoing(list)} title="In Progress" key='Doing' removeFunction={removeTask}></ListColumn>
        <ListColumn value={filterDone(list)} title="Review" key='Done' removeFunction={removeTask}></ListColumn>
      </main>
    </div>
  )
}