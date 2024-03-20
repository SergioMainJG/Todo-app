import { v4 as uuid } from 'uuid';
import {validateDescription} from '../../helpers/validations';

export class Todo {

    /**
     * 
     * @param {String} description Es la descripción del ToDo 
     */
    constructor( description ) {
        validateDescription(description);
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }

}