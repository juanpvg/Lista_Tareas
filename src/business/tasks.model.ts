import { Task } from "./types";

const arraytasks = [
  {
    id: 1,
    title: "Primera",
    resume: "Esta es la primera",
    avatr: {
      name: "",
      img: "",
    },
    tags: [1, 2],
    state: "todo",
  },
  {
    id: 2,
    title: "Segunda",
    resume: "Esta es la Segunda",
    avatr: {
      name: "",
      img: "",
    },
    tags: [1, 2],
    state: "doing",
  },
  {
    id: 3,
    title: "Tercera",
    resume: "Esta es la tercera",
    avatr: {
      name: "",
      img: "",
    },
    tags: [1, 2],
    state: "todo",
  },
  {
    id: 4,
    title: "Cuarto",
    resume: "Esta es la cuarta",
    avatr: {
      name: "",
      img: "",
    },
    tags: [1, 2],
    state: "todo",
  },
  {
    id: 5,
    title: "Quinta",
    resume: "Esta es la quinta",
    avatr: {
      name: "",
      img: "",
    },
    tags: [1, 2],
    state: "done",
  } 
] as Array<Task>;

export default arraytasks;
