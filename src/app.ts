import { renderTodos } from './utils';
import * as fromstore from './store';
const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;


//const reducer= ;


const reducers={

  todos:fromstore.reducer
}
const store =new fromstore.store(reducers,{});
 
button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };
    
   // console.log(payload);

   //

    store.dispatch({
      type:'ADD_TODOS',
     
    payload


    })

   // console.log(store.value);

    input.value = '';
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
