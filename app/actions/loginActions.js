import * as types from './actionTypes';

export function selectprofilethis(id, name) {
	return {
		type: types.SELECTPROFILE,
		id,
		name
	}
}