
import React from "react";

class App extends React.Component{
  
  state = {
    age : 10
  }
  
  add=()=>{
    this.setState(current => ({age : current.age+1}))
  }

  minus=()=>{
    this.setState(current => ({age : current.age-1}))
  }
  
  render(){
    return (
              <div>
                <h1>age : {this.state.age}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
              </div>
            )
  }
}
export default App;
