import {createStore} from 'redux';
import reducer from '../src/ducks/reducer';

let store = createStore(reducer);

export default store;