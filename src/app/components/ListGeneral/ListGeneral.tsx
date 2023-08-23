"use client";

import {deleteTask} from "@/business/task.service"

import { forEachChild } from "typescript";
import "./style.css";
import type { Task } from "@/business/types";
import { Jpbutton } from "@/app/components/assets/button/button";
import { TaskView } from "@/app/components/task/Task";


import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, useFieldArray, RefCallBack } from "react-hook-form";

import useCounter from '../../hooks/use-counter';

type TasListProps = {
  value: Task[];
  title: string;
};



export function ListColumn(props: TasListProps) {
  let [lista, setLista] = useState(props.value);
  lista = [...props.value]; 
  /*
  console.log("Lista");
  console.log(lista);
  console.log(props);
  */
  

  const removeTask = (removeItem:Task) => {
    console.log("Eliminar:");
    console.log(removeItem);
    //lista = [...props.value]; // make a separate copy of the array
    
    
    var index = props.value.indexOf(removeItem)
    if (index !== -1) {
      props.value.splice(index, 1);
    }
    //lista = deleteTask(removeItem); 
    //lista = [...props.value]; 
    
   
    let tempTask: Task;
    setLista({lista: lista.filter(function(lista) { 
      tempTask = lista;
      return tempTask.id == removeItem.id 
      //return tarea.id !== removeItem.id 
    })});
    
    
    /*
    const result = lista.filter(function(lista) { 
      tarea = lista;
      return tarea.id !== removeItem.id 
    });
    console.log(result);
    */
    //lista = [...props.value]; 
    //setLista(props.value);

    console.log("final:");
    console.log(lista);
    console.log(props.value);
    //console.log(props.value);
  };

  // funcion ejemplo
  const doSomething = (param:string) => {
    console.log("función " + param);
  };

  //console.log(props)
  return (
    <main className="task-column">
      <div className="task-column__header">
        <strong className="task-column__title">{props.title}</strong>
        <div className="task-column__number">{lista.length}</div>
      </div>
      <div>
        <Jpbutton isLong={true} doSomething={doSomething} ></Jpbutton>
      </div>
      <div className="task-column__list">{TaskList(lista, removeTask )}</div>
    </main>
  );
}

export function TaskList(tasks: Task[], removeTask:any) {
  if (tasks.length == 0) {
    return EmptyTaskListView();
  }

  return tasks.map((task) => {
    //return TaskView;
    return(
      <TaskView singleTask={task} key={task.id} removeTask={removeTask} ></TaskView>
    );
  });
}

export function EmptyTaskListView() {
  return <h2> no task </h2>;
}

