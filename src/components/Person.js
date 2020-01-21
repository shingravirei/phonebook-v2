import React from 'react';

const Person = ({ name, number, id, handleRemovePerson }) => {
    return (
        <p>
            {name}: {number}{' '}
            <button onClick={handleRemovePerson(id, name)}>delete</button>
        </p>
    );
};

export default Person;
