export type Avatr = {
    name: string
    img: string
}

export type Task =  {
    id: number
    title: string
    avatr: Avatr
    resume: string
    tags : Array<any>
    state: "doing" | "todo" | "done"
}

