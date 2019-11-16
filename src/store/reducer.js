const defaultState = {
	active: 0,
	userName: '',
	passWord: ''
}

export default (state = defaultState, action) => {
	if (action.type == 'changeActive') {
		return {
			active: action.index
		}
	}
	if (action.type == 'returnHome') {
		return {
			active: 0
		}
	}
	if (action.type == 'goSort') {
		return {
			active: 1
		}
	}
	if (action.type == 'getUserName') {
		return {
			userName: action.userName,
		}
	}
	if (action.type == 'getPassWord') {
		return {
			userName: state.userName,
			passWord: action.passWord
		}
	}
	return state;
}