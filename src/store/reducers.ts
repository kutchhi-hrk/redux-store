export const initialstate={

    loading:false,
    loaded:false,
    data:  [{ label:'eat pizza', complete:false}]
};

export function reducer(state=initialstate, action:{
type:string,
payload:any

}
){

    switch(this.type){

        case "ADD_TODOS":{
            
            const data=[...state.data,action.payload];
          
            return {

                ...this.state,
                data
            }
        }
    }

return state;

}