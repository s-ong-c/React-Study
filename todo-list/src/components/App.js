import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

class App extends Component {


    state = {
        input :'',
        //일정 데이터 초기화
        todos:[
            {id:0,text:' 리엑트 공부하기',done:true},
            {id:1,text:'컴포넌트 스타일링 하기 ',done:false}
        ]
    }

    // 일정 데이터 id  값
    id =1
    getId = () => {
        return ++ this.id;  //  현재 값에서  ++1 
    }
    handleChange = (e) =>{     // input  생성 
         const { value} = e.target;
         this.setState({
             input:value
         })
    }

    handleInsert = () => {  // 데이터 추가 부분 
        const{todos, input} = this.state;

        // 새 데이터객체 만들기

        const newTodo = {
            text: input,
            done: false,
            id:this.getId()
        };

        this.setState({
            todos:[...todos,newTodo],
            input:''
        });
    }   //end insert

    // todo item 토글 하기
    handleToggle = (id) => {
    // id 로 배열의 인덱스를 찾기 
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id ===id);

        const toggled = {
            ...todos[index],
            done: !todos[index].doen
        };

        // slice 사용 ->찾는 index 전후의 데이터를 복사 
        // 해서 그사이에 변경된 todo 객체를 넣는다. 

        this.setState({
            todos:[
            ...todos.slice(0,index),
            toggled,
            ...todos.slice(index +1,todos.length)
            ]
        });
    }
    render() {
        const { input ,todos} = this.state;
        const {
            handleChange,
            handleInsert,
            handleToggle
        
        } = this;

        return (
           <PageTemplate>
            <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
            <TodoList todos={todos} onToggle={handleToggle}/>
           </PageTemplate>
        );
    }
} 

export default App;