import {Todo} from '../todos/models/todos.model';

import {validateId, validateDescription, validateFilters} from '../helpers/validations';

export const Filters = {
    All: 'All', 
    Completed: 'Completed',
    Pending: 'Pending',
};

const state = {
    todos: [
        // new Todo('Piedra del alma'),
        // new Todo('Piedra del infinito'),
        // new Todo('Piedra del Tiempo'),
        // new Todo('Piedra del poder'),
        // new Todo('Piedra del CAMPO'),
    ],
    filter: Filters.All,
};

const initStore = () => {
    loadStore();
    console.log('Init Store😈');
};

const loadStore = ( ) => {
    if( !localStorage.getItem('state') ) return;

    const {todos = [], filter = Filters.All,  } = JSON.parse( localStorage.getItem('state') );
    state.todos = todos;
    state.filter = filter;
};

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify( state ));
}

/**
 * 
 * @param {Filters} filter 
 */
const getTodos = ( filter = Filters.All ) => {

    switch( filter ){

        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done );    
            
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );    

        default:
            throw new Error(`Opción ${ filter } no permitida`);
    }

}

/**
 * 
 * @param {String} description La descripción es la información distintiva y visual del todo
 */
const addTodo = ( description ) => {
    validateDescription( description );
    state.todos.push( new Todo( description ));
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 * @returns todo
 */
// const findTodo  = ( todoId ) => {
//     validateId( todoId );
//     // const todoIndex = state.todos.find( todoId )
//     console.log(state.todos.find( todoId ));
// };

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    validateId(todoId);

    state.todos = state.todos.map( todo => {
        if(todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
*/
const deleteTodo = ( todoId ) => {
    validateId( todoId );
    state.todos = state.todos.filter( todo => todo.id !== todoId ); 
    saveStateToLocalStorage();
}

const deleteCompleted = ( ) => {
    state.todos = state.todos.filter( todo => !todo.done  );
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    validateFilters( newFilter, Filters )
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}