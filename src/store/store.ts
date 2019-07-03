export class store{


 private reducers: Function[] ;
 
 private subscribers :{[key:string]:Function};

 private state: {[key:string]:any};

 constructor(reducer,initialstate:{}){
this.reducers=reducer;
this.state=initialstate;

 }

 get value(){

    return this.state;
 }


 dispatch(action){
    // this.reducers=this.reduce();
// console.log(action);
//     this.state={...this.state,
    
//         todos:[...this.state.todos,action.payload]
        
//     }
//     console.log(this.state);
 }


 reduce(){

   // this.reducers()
 }
}