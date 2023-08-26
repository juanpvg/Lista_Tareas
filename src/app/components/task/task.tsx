import { forEachChild } from "typescript";
import "./style.css";
import type { Task } from "@/business/types";

import iconSet from "../assets/icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import React, { useState } from "react";
import ReactDOM from "react-dom";


type TaskProps = {
    singleTask: Task;
    removeTask: Function;
    updateTask: Function;
};

export function TaskView(props:TaskProps) {
    const item = props.singleTask;
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
            <IcomoonReact className="icon-container__icon" iconSet={iconSet} icon="trash-can" onClick={()=> props.removeTask(item)} />
            </div>
            <div className="icon-container">
            <IcomoonReact className="icon-container__icon" iconSet={iconSet} icon="repeat" onClick={()=> props.updateTask(item)} />
            </div>
        </div>
        
        </div>
        
    </div>
    );
}
