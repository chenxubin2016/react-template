import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const modulesFiles = require.context('./reducers', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
export default createStore(combineReducers(modules), applyMiddleware(thunk))
