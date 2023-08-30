import { Task } from "./types";

const arraytasks = [
  {
    id: 1,
    title: "Primera",
    resume: "Esta es la primera",
    avatr: {
      name: "",
      img: "png-transparent-round-gold-frame-illustration.png",
      role: "UI Desing"
    },
    tags: ["New", 1, "Status"],
    state: "todo",
  },
  {
    id: 2,
    title: "Segunda",
    resume: "Esta es la Segunda",
    avatr: {
      name: "",
      img: "png-transparent-round-yellow-illustration-material-yellow-circle-chinese-style-round.png",
      role: "UI Desing"
    },
    tags: ["New", 1, "Status"],
    state: "doing",
  },
  {
    id: 3,
    title: "Tercera",
    resume: "Esta es la tercera",
    avatr: {
      name: "",
      img: "png-transparent-round.png",
      role: "UI Desing"
    },
    tags: ["New", 1, "Status"],
    state: "todo",
  },
  {
    id: 4,
    title: "Cuarto",
    resume: "Esta es la cuarta",
    avatr: {
      name: "",
      img: "prueba.png",
      role: "UI Desing"
    },
    tags: ["New", 1, "Status"],
    state: "todo",
  },
  {
    id: 5,
    title: "Quinta",
    resume: "Esta es la quinta",
    avatr: {
      name: "",
      img: "prueba.png",
      role: "UI Desing"
    },
    tags: ["New", 1, "Status", "Prueba", 457645, "Elementos", "cantidad", "secciones"],
    state: "done",
  },
  {
    id: 6,
    title: "Sexta",
    resume: "Esta es la sexta",
    avatr: {
      name: "Ux Desing",
      img: "prueba.png",
      role: "UI Desing"
    },
    tags: ["New", 1, "Status"],
    state: "doing",
  }  
] as Array<Task>;

export default arraytasks;
