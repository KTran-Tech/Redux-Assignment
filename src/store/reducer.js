import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case actionTypes.ADD_PERSON:

            const newPerson = {
                    id: Math.random(), // not really unique but good enough here!
                    name: action.personData.name,
                    age: action.personData.age
                }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }

        case actionTypes.REMOVE_PERSON:

            return{
                ...state,
 //'filter' loops through the current array and returns a new array
            /*If each object has an id NOT equal to the clicked id, then return TRUE, meaning
            it should keep existing, else if FALSE, then remove it from the newly created array*/                
                persons: state.persons.filter(person => person.id !== action.personId)
            }

    }
    return state;
}

export default reducer;
