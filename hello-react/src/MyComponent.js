import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  
  static defaultProps = {
    name:'송민석'
  }
  static propTypes = {
    name: PropTypes.string, // 타입을 문자열로 
    age: PropTypes.number.isRequired //필수적으로 존재해야하는 숫자 
  }
  state = {
    number: 0
  }
  // state 업데이트는 setState 로 업데이트해야 한다. 
  //  this.state.someArray.push(3); X
  //  this.stat.number = this.state.number +1; X
  //  this.state.someObject.value = 3;        X
    render() {
    return (
      <div>  
        <p>안녕하세요 , 제 이름은 {this.props.name}이랍니다. </p>
        <p>저는 {this.props.age}살 입니다.  </p>
        <p>숫자 :  {this.state.number} </p>
        <button onClick = {() => {
          this.setState({
            number: this.state.number + 1
          })
        }
      }>더하기 </button>
     </div>
    );
  }
}

export default MyComponent;