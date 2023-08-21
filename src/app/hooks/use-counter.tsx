import { useState, useEffect } from 'react'

import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

//const { register, control, handleSubmit, formState, watch } = form;
//const { errors } = formState;

/*
const onSubmit(data: formValues){
    console.log("Información" + data);
}
*/

//const changeTask = watch();


const useCounter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return counter;
} 

export default useCounter;






