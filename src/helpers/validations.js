import { validate as uuidValidate } from 'uuid';

/**
 * Esta función valida si el id existe, y generado por uuid
 * @param {String} id El id es un string generado por la libreria uuid 
 * @returns true en caso de que pase las validaciones
 */
function validateId( id ) {
    if( !id ) throw new Error('todoId es requerido');
    if( !uuidValidate(id) ) throw new Error('El id debe de ser del tipo uuid v4');
};

/**
 * Esta función valida si el argumeto description existe
 * @param {String} description La descripción es de tipo String, que es el argumento visible y útil del todo 
 * @returns 
 */
function validateDescription ( description ) {
    if( !description ) throw new Error('la description es requerida');
}

function validateFilters ( newfilter, filter ){
    if( Object.keys( newfilter ).includes( filter ) ) {
        throw new Error(`El ${newfilter} no es una opción valida del tipo Filter`)
    }
}

export{
    validateDescription,
    validateFilters,
    validateId,
}