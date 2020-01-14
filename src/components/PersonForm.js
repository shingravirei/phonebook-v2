import React from 'react';

const PersonForm = ({
    handleNameChange,
    handleNumberChange,
    newName,
    newNumber,
    addPerson
}) => {
    return (
        <>
            <h2>Add New Person</h2>
            <form onSubmit={addPerson}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        id={'name'}
                        value={newName}
                        onChange={handleNameChange}
                    />
                    <br />
                    <label htmlFor={'number'}>Number: </label>
                    <input
                        id={'number'}
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
        </>
    );
};

export default PersonForm;
