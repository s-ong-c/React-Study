import React, { Component } from 'react';

class IterationSample extends Component {
    state ={
        names : ['눈사람','얼음','눈','바람','엘사'],
        name:''
    };

    handleChange = (e) => {
        this.setState({
            name:e.target.value
        });
    }

    handleInsert = () =>{
        this.setState({
            names:this.state.names.concat(this.state.name),
            name:''
        })
    }

    handleRemove = (index) => {
        // name 레퍼런스를 미리 만든다.

        const{names}= this.state;

        this.setState({
            // names:[
            //    ...names.slice(0,index),
            //     ...names.slice(index +1,names.length)
            // ]
            names : names.filter((item, i) => i !== index)
            // filter 로  index 번째를 제외한 원소만 새 배열 생성 

        })
    }
    render() {
        
        const nameList =this.state.names.map(
            (name,index) =>  (
                <li 
                key={index}
                onDoubleClick={()=> this.handleRemove(index)}>
                {name}
                </li>
            )
        );
        return (
           <div>
                <input 
                onChange = {this.handleChange}
                value={this.state.name}/>
                <button onClick={this.handleInsert}>추가 </button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;