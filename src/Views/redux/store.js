/*
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

/*
redux最核心的管理对象模块
 */
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'

// 向外暴露store对象
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
