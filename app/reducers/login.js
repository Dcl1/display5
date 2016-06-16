import * as types from '../actions/actionTypes';

const initialState = {
	id: 0,
	name: "Default"
};

export default function selectprofile(state = initialState, action = {}) {
	switch (action.type) {
		case types.SELECTPROFILE:
			console.log("Switch Profile " + action.name + " " + action.id + "");
			return {
				...state,
				id: action.id,
				name: action.name
			}
		default:
			return state;
	}
}