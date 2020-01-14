import React, { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import uuid from 'uuid';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filter, setFilter] = useState('');

    const addPerson = event => {
        event.preventDefault();

        const personsArr = persons.map(person => person.name.toLowerCase());

        if (personsArr.includes(newName.toLowerCase())) {
            alert(`${newName} is already on phonebook!`);
        } else {
            const person = {
                id: uuid(),
                name: newName,
                number: newNumber
            };

            setPersons(persons.concat(person));
        }

        setNewName('');
        setNewNumber('');
    };

    const handleNameChange = event => {
        setNewName(event.target.value);
    };

    const handleNumberChange = event => {
        setNewNumber(event.target.value);
    };

    const handleFilter = event => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <h1>The Coolest React Phonebook!!!</h1>
            <Filter handleFilter={handleFilter} />
            <PersonForm
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                newName={newName}
                newNumber={newNumber}
                addPerson={addPerson}
            />
            <Persons persons={persons} filter={filter} />
        </div>
    );
};

export default App;
