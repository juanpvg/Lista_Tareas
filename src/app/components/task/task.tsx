"use client";

import { forEachChild } from 'typescript';
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
  //return props.value.map(TaskView)
  
  var indents = [];
  for(let i = 0; i<props.value.length; i++){
    indents.push( TaskView(props.value[i], props) )
  }
  return indents


}

export function EmptyTaskListView() {
  return <h2> no task </h2>;
}

const deleteTask = (id : number, props: TasListProps) => {
  console.log("deleteTask");
  console.log(props.value);
  var position = props.value
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);
    props.value.splice(position, 1);

  console.log(props.value);
  TaskList(props)
};

export function TaskView(item: Task, props : TasListProps) {
  return (
    <div className="task" key={`task-${item.id}`}>
      <strong>{item.title}</strong>
      <p>{item.resume}</p>
      <span>{item.state}</span>
      <div>
        <button>Edit</button>
      </div>
      <div>
        <button onClick={() => deleteTask(item.id, props)}>Delete</button>
      </div>
      <div></div>
    </div>
  );
}
