import React, {Component, useState} from 'react';

// const Test = ()=> {
//   const [data, setData] = useState("hello")

//   return (
//     <div>hello</div>
//   )
// }

class Test extends Component<any,any>{
  render(){
    return (
      <div>{this.props.number}</div>
    )
  }
}
export default Test;
