export const initialState ={ //initial state of reducer
    //how data layer intially looks like 
    user:null,
};

export const actionTypes={  //some actions
    SET_USER:"SET_USER",    //dispatch action into data layer

};

const reducer=(state,action)=>{ //listen to it
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER: //if you recieve the action 
        return{
            ...state,   //return what the new data layyer looks like
            user:action.user, //change the user to whatwhere we passed in the payload
        }; 
        default:
            return state;
    }
};
export default reducer;