import axios from 'axios';

export const FETCH_UNITS = 'fetch_units';
export const FETCH_UNIT = 'fetch_unit';
export const CREATE_UNITS = 'create_units';
export const DELETE_UNIT = 'delete_unit';
export const MODIFY_UNIT = 'modify_unit';

const ROOT_URL = 'http://localhost:3000/unit';  //TODO
//const API_KEY = '?key=kgn0';  //TODO


export function fetchUnits() {
    const request = axios.get(`${ROOT_URL}`);

    return {
        type: FETCH_UNITS,
        payload: request
    }
}


export function createUnits(values) {
    const request = axios.post(`${ROOT_URL}`, values);

    return {
        type: CREATE_UNITS,
        payload: request
    }
}

export function fetchUnit(urn) {
    const request = axios.get(`${ROOT_URL}/${urn}`);

    return {
        type: FETCH_UNIT,
        payload: request
    }
}
export function deleteUnit(urn, callback) {
    const request = axios.delete(`${ROOT_URL}/${urn}`)
        .then(() => callback());

    return {
        type: DELETE_UNIT,
        payload: urn
    }
}

export function modifyUnit(values, callback) {
    const request = axios.put(`${ROOT_URL}/${values.urn}`, values)
        .then(() => callback());

    return {
        type: MODIFY_UNIT,
        payload: request
    }
}