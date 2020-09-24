import { creatStore, createStore } from 'redux';

//Action Generators - inline보다 더 나은 방식?

//오는 객체에서 키값 incrementBy를 받아 사용하겠다. 없으면 default 1 쓰겠다.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  //destructuring쓴것. default는 1
  type: 'INCREMENT',
  incrementBy, //incremenyBy: incrementBy 의 줄임표현
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count,
});

const resetCount = () => ({
  type: 'RESET',
});

//Reducers
// 1. Reducers are pure functions: output은 input에 의해서만 결정됨(전역변수 등이 영향 X)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      //incrementBy라는 숫자가 같이 넘어오면 숫자만큼 증가시키고 아니면 1
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
}); //한번 더 호출하면 중단

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());
store.dispatch(setCount({ count: 101 }));
