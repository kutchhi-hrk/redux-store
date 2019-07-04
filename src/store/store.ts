import { reducer } from "./reducers";

export class store{


 private subscribers: Function[] ;
 
 private  reducers:{[key:string]:Function};

 private state: {[key:string]:any};

 constructor(reducer,initialstate:{}){
this.reducers=reducer;
this.state=this.reduce(initialstate,{});

 }

 get value(){

    return this.state;
 }


 dispatch(action){
     this.state=this.reduce(this.state,action);
// console.log(action);
//     this.state={...this.state,
    
//         todos:[...this.state.todos,action.payload]
        
//     }
//     console.log(this.state);
 }


 reduce(state,action){
const newstate={}  ;
for(const prop in this.reducers){

    newstate[prop]=this.reducers[prop](state[prop],action);
}

return newstate;
 }
}       