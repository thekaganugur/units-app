import { FETCH_UNIT, FETCH_UNITS, MODIFY_UNIT } from '../actions/index';

import _ from 'lodash';


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_UNITS:
            return _.mapKeys(action.payload.data, 'urn');   //For better parsing
        // [{urn: 2, title: "Hi"}, {urn: 13, title: "Bye"}] ---->
        //{ 
        //  2: {urn:2, title: "Hi"},
        //  13: {urn:13, title: "Bye"}
        //}


        case FETCH_UNIT:
            const unit = action.payload.data
            const newState = { ...state };
            newState[unit.urn] = unit;
            return newState;
        // return { ...state, [action.payload.data.urn]: action.payload.data };


        default:
            return state;
    }
}