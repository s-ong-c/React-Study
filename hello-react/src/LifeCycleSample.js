import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number:0,
        color:null
    }

    myRef = null; //  ref 설정 하는 부분

    constructor(props){
        super(props);
        console.log('constructor');
        
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.color !== prevState.color){
            return{color: nextProps.color};
        }
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
        
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate',nextProps,nextState);

        //끝자리가 4이면 리렌더링 하지 않는다.
        return nextState.number % 10 !==4;
    }

    componentWillUnmount() {
        console.log('====================================');
        console.log('componentWillMount');
        console.log('====================================');
    }
    
    handleClick = () =>{
        this.setState({
            number:this.state.number +1
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('====================================');
        console.log("getSnapshotBeforeUpdate");
        console.log('====================================');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState,snapshot) {
        console.log("componentDidUpdate",prevProps, prevState)

        if(snapshot){
            console.log('====================================');
            console.log('업데이트 하지 직전 색상 ',snapshot);
            console.log('====================================');
        }
    }
    render() {
        console.log('render');
        const style = {
            color:this.props.color
        }
        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>

                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                    </button>
            </div>
        );
    }
}

export default LifeCycleSample;