import "../pages/global.css"
import React, { useEffect, useState } from 'react';


import {getTaskList, filterTodo, filterDoing} from "@/business/task.service"

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
    <div className="task-list-container">
      
     <ListColumn value={filterTodo(list)} title="Todo"></ListColumn>
     <ListColumn value={filterDoing(list)} title="Doing"></ListColumn>
     <ListColumn value={[]} title="Done"></ListColumn>

    </div>
  )
}