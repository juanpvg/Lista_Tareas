/*
class SomeComponent extends Component{

    constructor(props){
        super(props);
        //does whatever stuff        
        this.myFunction = this.myFunction.bind(this);

    }

    //(only applicable to raw and normal forms)
    myFunction(param){
        console.log('do something: ', param);
    }

    render(){
     return (<div><ChildComponent1 myFunction={this.myFunction}/></div>)
    }
}

class ChildComponent1{
      render(){
  return (<div><ChildComponent2 myFunction={this.props.myFunction}/></div>)
    }
}

class ChildComponent2{
      render(){
  return (<Button onClick={()=>this.props.myFunction(param)}>SomeButton</Button>)
    }
}
*/