import "./style.css";
import type { Task } from "@/business/types";
import { optionState, TypeOptionState } from "@/app/components/const/data-const";

import { forEachChild } from "typescript";
import "./style.css";

import iconSet from "../assets/icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Options } from "next/dist/server/base-server";


type newTaskProps = {
  currentTask: Task;
  taskFunction: Function;
  cancelFunction: Function;
};

export function FormNewTask(props: newTaskProps) {
  let [newTask, setNewTask] = useState(props.currentTask);
  //let newTask: Task;
  //newTask = props.currentTask;

  
  //const tags = item.tags.split(' ');

  const setTitle = (param:string) => {
    newTask.title = param;
  };
  
  const setResume = (param:string) => {
    newTask.resume= param;
  };
  
  const setState = (param:string) => {
    if(param == "todo"){
      newTask.state= "todo";
    }
    else if(param == "doing"){
      newTask.state= "doing";
    }
    else if(param == "done"){
      newTask.state= "done";
    }
    else{
      console.log("You can not save the state");
    }
    
  };
  
  const setAvatarTags = (param:string) => {
    const tags = param.split(' ');
    newTask.tags= tags;
  };

  const setAvatarRole = (param:string) => {
    newTask.avatr.role= param;
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
            {optionsList(optionState)}
          </select>
        </div>
        
        <div className="input-group">
          <label htmlFor="name">Tags</label>
          <input type="text" id="role" onChange={e => setAvatarTags(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="name">Role</label>
          <input type="text" id="role" onChange={e => setAvatarRole(e.target.value)} />
        </div>

        <button type="submit" className="submit-btn" onClick={()=> props.cancelFunction()}>
          Cancel
        </button>
        <button type="submit" className="submit-btn" onClick={()=> props.taskFunction(newTask)}>
          Save Task
        </button>
      </form>
    </div>

  );
}

export function optionsList(listOptionss:{}) {
  let listOptions: TypeOptionState;
  return optionState.map(listOptions => {
    return (<option key={listOptions.value} value={listOptions.value}>{listOptions.label}</option>);
  })
}

