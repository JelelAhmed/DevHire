import developerActionTypes from "./developer.types";
import { DeveloperClient } from "../../APIs/api.terawork";


export const getDevelopers = () => (dispatch) => {
	dispatch({ type: developerActionTypes.GET_DEVELOPER_PENDING })
	DeveloperClient.get()
		.then(data => dispatch({type: developerActionTypes.GET_DEVELOPER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: developerActionTypes.GET_DEVELOPER_FAILED, payload: error}))
}


export const addFavorite = (developer) => ({
	type: developerActionTypes.ADD_FAVORITE,
	payload: developer
})