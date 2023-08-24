import "./style.css";


type buttonProps = {
  isLong: boolean;
  executeFunction: Function;
};

export function Jpbutton(props:buttonProps) {
  //<button className="btn" >+</button>
  //<button className={`btn ${isLong ? "long" : "short"}`} >+</button>
  //<button className={`btn ${props.isLong}`} >+</button>
  //const { isLong } = props;

  return (
    <button  className={`btn ${props.isLong ? "long" : "short"}`} onClick={()=> props.executeFunction("hola")}>+</button>
  )
}
