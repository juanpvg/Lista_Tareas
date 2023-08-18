"use client";

import { forEachChild } from "typescript";
import "./style.css";
import type { Task } from "@/business/types";

import iconSet from "../../../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

type TasListProps = {
  value: Task[];
  title: string;
};

export function ListColumn(props: TasListProps) {
  //console.log(props)
  return (
    <main className="task-column">
      <div className="task-column__header">
        <strong className="task-column__title">{props.title}</strong>
        <div className="task-column__number">{props.value.length}</div>
      </div>
      <div className="task-column__list">{TaskList(props.value)}</div>
    </main>
  );
}

export function TaskList(tasks: Task[]) {
  if (tasks.length == 0) {
    return EmptyTaskListView();
  }

  return tasks.map((task) => {
    return TaskView(task);
  });
}

export function EmptyTaskListView() {
  return <h2> no task </h2>;
}

export function TaskView(item: Task) {

  return (
    <div className="task" key={`task-${item.id}`}>
      <div>
        <button className="add-task">+</button>
      </div>
      <p className="task__resume">{item.resume}</p>
      <span>{item.state}</span>

      <div className="task__bottom">
        <div className="task__bottom__left">
          <div className="avatar-name">{item.avatr.name}</div>
          <div className="avatar-image"></div>
        </div>
        
        <div className="task__bottom__right">
          <div className="icon-container">
            <IcomoonReact className="icon" iconSet={iconSet} icon="list" />
          </div>
          <div className="icon-container">
            <IcomoonReact className="icon" iconSet={iconSet} icon="calendar" />
          </div>
          <div className="icon-container">
            <IcomoonReact className="icon" iconSet={iconSet} icon="message" />
          </div>
          <div className="icon-container">
            <p>1</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
