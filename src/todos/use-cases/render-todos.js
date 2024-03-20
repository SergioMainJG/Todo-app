import { createTodoHTML } from "./create-todo-html";

let element;
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos  = ( elementId, todos = []) => {

    if( !element )
        element = document.querySelector( elementId );
    if( !element )
        throw new Error(`Element ${elementId} no encontrado`)

    element.innerHTML = '';
    todos.forEach( todo =>{
        element.append( createTodoHTML( todo ) );
    });
}