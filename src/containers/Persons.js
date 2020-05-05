import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from 'react-redux'
//'actionTypes' becomes an object that you can search through with 'actionType.property'
import * as actionTypes from '../store/actions'

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />

                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemoved(person.id)}/>
                ))}

            </div>
        );
    }
}

//To get access to the current state in containers components
const mapStateToProps = state => {
    return {
        prs: state.persons
    }
}

//To get acccess to Disptch functions to be able to dispatch
const mapDispatchToProps = dispatch =>{
    return {
        onAddedPerson: (name,age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name:name, age:age}}),
        onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);