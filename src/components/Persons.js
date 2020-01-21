import React from 'react';

import Person from './Person';

const Persons = ({ persons, filter, handleRemovePerson }) => {
    const filteredPersons = persons.filter(person => {
        return person.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filteredPersons.map(person => (
        <Person
            key={person.id}
            name={person.name}
            number={person.number}
            id={person.id}
            handleRemovePerson={handleRemovePerson}
        />
    ));
};

export default Persons;
