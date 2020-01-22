import React, { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Alert from './components/Alert';

import { getAll, create, remove, update } from './services/persons';

import './styles/index.css';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filter, setFilter] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const addPerson = event => {
        event.preventDefault();

        const personsArr = persons.map(person => person.name.toLowerCase());

        if (personsArr.includes(newName.toLowerCase())) {
            const result = window.confirm(
                `${newName} is already on the phonebook. Do you wish to update the number?`
            );

            if (result) {
                const person = persons.filter(
                    person =>
                        person.name.toLowerCase() === newName.toLowerCase()
                );

                update(person[0].id, {
                    name: newName,
                    number: newNumber
                })
                    .then(returnedPerson => {
                        setPersons(
                            persons.map(person =>
                                person.id !== returnedPerson.id
                                    ? person
                                    : returnedPerson
                            )
                        );
                    })
                    .catch(error => {
                        setError(
                            `${person[0].name} was already removed from the server!`
                        );

                        setTimeout(() => {
                            setError(null);
                            getAll().then(persons => {
                                setPersons(persons);
                            });
                        }, 4000);
                    });
            }
        } else {
            const person = {
                // id: uuid(),
                name: newName,
                number: newNumber
            };

            create(person).then(person => {
                setPersons(persons.concat(person));
            });

            setSuccess(`${person.name} was added to the Phonebook!`);

            setTimeout(() => {
                setSuccess(null);
            }, 4000);
        }

        setNewName('');
        setNewNumber('');
    };

    const handleRemovePerson = (id, name) => () => {
        const confirm = window.confirm(`Remove ${name} from the phonebook?`);

        if (confirm) {
            remove(id);

            setPersons(persons.filter(person => person.id !== id));
        }
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

    const hook = () => {
        getAll().then(persons => {
            setPersons(persons);
        });
    };

    useEffect(hook, []);

    return (
        <div>
            <h1>The Coolest React Phonebook!!!</h1>
            <Filter handleFilter={handleFilter} />
            <div>
                <Alert message={success} className={'success'} />
                <Alert message={error} className={'danger'} />
                <PersonForm
                    handleNameChange={handleNameChange}
                    handleNumberChange={handleNumberChange}
                    newName={newName}
                    newNumber={newNumber}
                    addPerson={addPerson}
                />
                {persons.length > 0 ? (
                    <Persons
                        persons={persons}
                        filter={filter}
                        handleRemovePerson={handleRemovePerson}
                    />
                ) : (
                    <h1>The Phonebook is empty!</h1>
                )}
            </div>
        </div>
    );
};

export default App;
