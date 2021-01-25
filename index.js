const redux = require('redux');
const createStore = redux.createStore;

// Defining actions
// An object that have a type property
// and an action creator: a function that
// returns an action

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'Take 1 cake from the shelf'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'Take 1 ice cream from the shelf'
    }
}







//a reducer 
//function that accepts state and action as arguments
//and returns the next state of the application
// (previousState, action) => newState.


const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCreams: 20
}




const cakeReducer = (state= initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        
        }
        default:
            return state;
    }
}

const iceCreamReducer = (state= initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        
        }
        default:
            return state;
    }
}

//crea la store con los reducers el app.js
//obtiene el estado
//suscribe el estado a la store, los conecta.
//hace dispatch donde ejecuta los reducers
//hace unsuscribe.

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


const store = createStore(rootReducer);
console.log('Initial state', store.getState());
const unsuscribed = store.subscribe(() => console.log('Update state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsuscribed();
