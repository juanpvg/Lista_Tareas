import "./style.css";
import type { Task } from "@/business/types";

import { forEachChild } from "typescript";
import "./style.css";

import iconSet from "../assets/icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import React, { useState } from "react";
import ReactDOM from "react-dom";


type newTaskProps = {
  currentTask: Task;
  taskFunction: Function;
};

export function FormNewTask(props: newTaskProps) {
  let [newTask, setNewTask] = useState(props.currentTask);
  //let newTask: Task;
  //newTask = props.currentTask;

  const options = [
    { value: 'todo', label: 'To do' },
    { value: 'doing', label: 'In progress' },
    { value: 'done', label: 'Done' }
  ];

  const setTitle = (param:string) => {
    newTask.title = param;
  };
  
  const setResume = (param:string) => {
    newTask.resume= param;
  };
  
  const setState = (param:string) => {
    newTask.state= param;
    //console.log(newTask.state);
  };

  return (
    <div className="formNewTask">
      <form id="newTaskForm">
        <div className="input-group">
          <label htmlFor="name">Title</label>
          <input type="text" id="title" onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="resume">Resume</label>
          <input type="text" id="Resume" onChange={e => setResume(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="state">State</label>
          <select name="state" id="state" required autoFocus form="newTaskForm" onChange={e => setState(e.target.value)}>
            {optionsList(options)}
          </select>
        </div>
        <button type="submit" className="submit-btn" onClick={()=> props.taskFunction(newTask)}>
          Save Task
        </button>
      </form>
    </div>

  );
}

export function optionsList(options:any) {
  return options.map(options => {
    return (<option key={options.value} value={options.value}>{options.label}</option>);
  })
}

