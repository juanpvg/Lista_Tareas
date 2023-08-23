import "./style.css";

export function Jpbutton(props:any) {
  //<button className="btn" >+</button>
  //<button className={`btn ${isLong ? "long" : "short"}`} >+</button>
  //<button className={`btn ${props.isLong}`} >+</button>
  //const { isLong } = props;

  return (
    <button  className={`btn ${props.isLong ? "long" : "short"}`} onClick={()=> props.doSomething("hola")}>+</button>
  )
}
