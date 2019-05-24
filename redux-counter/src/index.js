import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

//리덕스 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
// 스토어 연동하는 컴포넌트 
import { Provider} from 'react-redux';
/// 스토어 생성
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root')
);
