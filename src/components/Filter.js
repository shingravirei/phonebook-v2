import React from 'react';

const Filter = ({ handleFilter }) => (
    <>
        <input onChange={handleFilter} placeholder={'filter'} />
    </>
);

export default Filter;
