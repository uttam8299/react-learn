// import redux - Redux contains: Store, Reducer, Actions, Dispatchers, subscribers
// Reducer - function that takes action and current store and reduces it(performs operations) to give new store
// Store - central storage to store objects which can be shared App-wide components
// Actions - it is dispatched to update the store
// subscriber - subscribes to store and changes when store changes by reducer on action dispatched.

const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
};

const reducer = (store = INITIAL_VALUE, action) => {
     let newStore = store;
    if(action.type === 'INCREMENT') {
        newStore =  {counter: store.counter + 1};
    }
    else if(action.type === 'DECREMENT') {
        newStore =  {counter: store.counter - 1};
    }
    else if(action.type === 'ADDITION') {
        newStore =  {counter: store.counter +  action.payload.number};
    }
    return newStore;
}

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

const store = redux.createStore(reducer);

store.subscribe(subscriber);

store.dispatch({type: "INCREMENT"});

store.dispatch({type: "DECREMENT"});

store.dispatch({type: "ADDITION", payload: {number: 7}});