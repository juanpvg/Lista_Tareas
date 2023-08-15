"use client";

import './style.css'
import type { Task } from "@/business/types";

type TasListProps = {
  value: Task[]
  title: string
}

export function ListColumn(props : TasListProps) {
  return (
    <div >
       <h3>{props.title}</h3>
       <div className="task-column">
        <div className="task-list">
          {TaskList(props)}
        </div>
      </div> 

    </div>
  );
}

export function TaskList(props: TasListProps){
  if (props.value.length == 0) {
    return EmptyTaskListView();
  }
  return props.value.map(TaskView)
}

export function EmptyTaskListView() {
  return <h2> no task </h2>;
}

export function TaskView(item: Task) {
  return (
    <div className="task" key={`task-${item.id}`}>
      <strong>{item.title}</strong>
      <p>{item.resume}</p>
      <span>{item.state}</span>
      <div>
        <button>Edit</button>
      </div>
      <div></div>
    </div>
  );
}
