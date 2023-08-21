import "../pages/global.css"
import React, { useEffect, useState } from 'react';


import {getTaskList, filterTodo, filterDoing, filterDone} from "@/business/task.service"

import { ListColumn } from "@/app/components/task/task"
import { Task } from "@/business/types";

export default function List() {
  const [list, setList] = useState<Array<Task>>([])

  useEffect(() => {
    const fetchTask = async ()=>{
      const tasks = await getTaskList();
      setList(tasks)
    }
    fetchTask().catch(console.error);
  }, [])

  return (
    <div >
      <div className="header">
        <div className="header__text">
          <b>Admin Dashboard</b>
        </div>
      </div>
      <div className="header_line"></div>
      <main className="task-list-container">
        <ListColumn value={filterTodo(list)} title="To Do" key='Todo'></ListColumn>
        <ListColumn value={filterDoing(list)} title="In Progress" key='Doing'></ListColumn>
        <ListColumn value={filterDone(list)} title="Review" key='Done'></ListColumn>
      </main>
    </div>
  )
}