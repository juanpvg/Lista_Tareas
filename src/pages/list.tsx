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
      <div>
        <p><b>DASHBOARD</b></p>
      </div>
      <main className="task-list-container">
        <ListColumn value={filterTodo(list)} title="To do" key='ToDo'></ListColumn>
        <ListColumn value={filterDoing(list)} title="Doing" key='Doing'></ListColumn>
        <ListColumn value={filterDone(list)} title="Done" key='Done'></ListColumn>
      </main>
    </div>
  )
}