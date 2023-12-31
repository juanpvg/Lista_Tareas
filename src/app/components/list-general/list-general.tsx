"use client";

import {deleteTask} from "@/business/task.service"

import { forEachChild } from "typescript";
import "./style.css";

import "../form-new-task/style.css";

import type { Task } from "@/business/types";
import { Jpbutton } from "@/app/components/assets/button/button";
import { TaskView } from "@/app/components/task/task";
import { FormNewTask } from "@/app/components/form-new-task/formNewTask";


import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, useFieldArray, RefCallBack } from "react-hook-form";

import useCounter from '../../hooks/use-counter';

type TasListProps = {
  value: Task[];
  title: string;
  stateList: string;
  removeFunction: Function;
  updateFunction: Function;
  showFormNewTaskFunction: Function;
};



export function ListColumn(props: TasListProps) {
  let [list, setList] = useState(props.value);
  list = [...props.value]; 
  /*
  console.log("Lista");
  console.log(lista);
  console.log(props);
  */
  
  // funcion ejemplo
  const doSomething = (param:string) => {
    console.log("función " + param);
  };



  //console.log(props)
  return (
    <main className="task-column">
      <div className="task-column__header">
        <strong className="task-column__title">{props.title}</strong>
        <div className="task-column__number">
          <p>{props.value.length}</p>
        </div>
      </div>
      <div>
        <Jpbutton isLong={true} executeFunction={props.showFormNewTaskFunction} ></Jpbutton>
      </div>
      <div className="task-column__list">{TaskList(props.value, props.removeFunction, props.updateFunction )}</div>
    </main>
  );
}

export function TaskList(tasks: Task[], removeTaskFunction:Function, updateTask:Function) {
  if (tasks.length == 0) {
    return EmptyTaskListView();
  }
  return tasks.map((task) => {
    //return TaskView;
    return(
      <TaskView singleTask={task} key={task.id} removeTask={removeTaskFunction} updateTask={updateTask} ></TaskView>
    );
  });
}
export function EmptyTaskListView() {
  return <h2> no task </h2>;
}


