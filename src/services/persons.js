import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseUrl);

    return request.then(reponse => reponse.data);
};

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson);

    return request.then(reponse => reponse.data);
};

const remove = id => axios.delete(`${baseUrl}/${id}`);

const update = (id, updatedPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson);

    return request.then(response => response.data);
};

export { getAll, create, remove, update };
