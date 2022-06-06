import developerActionTypes from "./developer.types"

const INITIAL_STATE = {
	devs: null,
	isPending: false,
	onError: null
}



const developerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case developerActionTypes.GET_DEVELOPER_PENDING:
			return {
				...state,
				isPending: true
			}
		
			case developerActionTypes.GET_DEVELOPER_SUCCESS:
			return {
				...state,
				isPending: false,
				devs: action.payload.data.data.service_search_results.hits
			}

			case developerActionTypes.GET_DEVELOPER_FAILED:
			return {
				...state,
				onError: action.payload
			}
			
		default: 
			return state;
	}
}

export default developerReducer;