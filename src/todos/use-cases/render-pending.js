import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * s
 * @param {String} elementId 
 */
export const renderPending = ( elementId ) => {
    if( !element )
        element = document.querySelector( elementId );
    if( !element )
        throw new Error(`El elemento ${elementId} no existe`);

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;

}