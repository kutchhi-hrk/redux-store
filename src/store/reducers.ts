export const initialstate={

    loading:false,
    loaded:false,
    data: {todos:[{label:'eat pizza', complete:false}]}
}

export function reducer(state:{}, action:{
type:string,
payload:any

}
){

    switch(this.type){

        case "ADD_TODOS":{

            const todos=[...this.state.data,action.payload];
        }
    }

return state;

}