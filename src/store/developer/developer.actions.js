import developerActionTypes from "./developer.types";
import { Terawork } from "../../APIs/api.terawork";


export const getDevelopers = () => (dispatch) => {
	dispatch({ type: developerActionTypes.GET_DEVELOPER_PENDING })
	Terawork.get()
		.then(data => dispatch({type: developerActionTypes.GET_DEVELOPER_SUCCESS, payload: data}))
		.catch(error => dispatch({type: developerActionTypes.GET_DEVELOPER_FAILED, payload: error}))
}