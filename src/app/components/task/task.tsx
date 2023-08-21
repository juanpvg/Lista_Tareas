"use client";

import { forEachChild } from "typescript";
import "./style.css";
import type { Task } from "@/business/types";

import iconSet from "../../../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, useFieldArray } from "react-hook-form";

import useCounter from '../../hooks/use-counter';

type TasListProps = {
  value: Task[];
  title: string;
};


export function ListColumn(props: TasListProps) {
  //console.log(props)
  //const [list, setList] = useState([]);
  //setList(currentLists => [..currentList. props.value])

  /*
  const removeTask = e => {
    updateList(list.filter(item => item.id !== id));
  }
  */

  /*
  const deleteById = id => {
    setList(oldValues => {
      return oldValues.filter(item => item.id !== id)
    })
  }
  */

  return (
    <main className="task-column">
      <div className="task-column__header">
        <strong className="task-column__title">{props.title}</strong>
        <div className="task-column__number">{props.value.length}</div>
      </div>
      <div>
        <button className="add-task" > {useCounter()} </button>
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
      <div className="task__resume">{item.resume}</div>

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
