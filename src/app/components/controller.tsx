import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const { register, control, handleSubmit, formState, watch } = form;
const { errors } = formState;

const onSubmit(data: formValues){
    console.log("Información" + data);
}

const changeTask = watch();




