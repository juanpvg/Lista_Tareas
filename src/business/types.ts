export type Avatr = {
    name: string
    img: string
}

export type Task =  {
    singleTask: any
    id: number
    title: string
    avatr: Avatr
    resume: string
    tags : Array<any>
    state: "doing" | "todo" | "done"
    subTask: []
    spefificDate: ""
    messages: []
}

