import { forEachChild } from "typescript";
import "./style.css";
import type { Task } from "@/business/types";

import iconSet from "../assets/icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import React, { useState } from "react";
import ReactDOM from "react-dom";

import Image from 'next/image'
import { image_avatar_folder } from "@/app/components/const/data-const";


type TaskProps = {
    singleTask: Task;
    removeTask: Function;
    updateTask: Function;
};

export function TaskView(props:TaskProps) {
    const item = props.singleTask;
    const itemImage = image_avatar_folder + item.avatr.img
    return (
    <div className="task" key={`task-${item.id}`}>
        <div className="task__bottom">
            <div className="task__resume">{item.resume}</div>
            <div className="icon-container">
                <IcomoonReact className="icon-container__icon edit" iconSet={iconSet} icon="edit" onClick={()=> props.updateTask(item)} />
            </div>
        </div>

        <div className="task__bottom">
        <div className="task__bottom__left">
            
            <div className="tags-list">
                <div className="avatar-image-container">
                    <Image className="avatar-image" src={itemImage} width={50} height={50} alt="" />
                </div>
                {tagsList(item)}
            </div>
        </div>
        
        <div className="task__bottom__right">
            <div className="icon-container">
                <IcomoonReact className="icon-container__icon" iconSet={iconSet} icon="trash-can" onClick={()=> props.removeTask(item)} />
            </div>
        </div>
        
        </div>
        
    </div>
    );
}

export function tagsList(item:Task) {
    //const tagsList = item.tags.join(' ');
    const tagsList = item.tags;
    let keyNum = 0;
    return tagsList.map(tagsList => {
        keyNum+= 1;
        return (
            <div key={`tag-${keyNum}`} className="tags-list__item">{tagsList}</div>
        );
    })
}