import { LOGIN, LOGIN_FAIL, LOGIN_START, REGISTER, REGISTER_FAIL, REGISTER_START } from './../actions/userActions';

const INITIAL_STATE = {
    userId: null,
    userName: '',
    isLogedIn: false,
    isFetching: false
}

export const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_START:
            return { ...state, isFetching: true }
        case LOGIN_FAIL:
            return { ...state, isFetching: false }
        case LOGIN:
            return { ...state, userName: action.payload.userName, userId: action.payload.id, isLogedIn: true, isFetching: false }

        case REGISTER_START:
            return { ...state, isFetching: true }
        case REGISTER_FAIL:
            return { ...state, isFetching: false }
        case REGISTER:
            return { ...state, isFetching: false }

        default:
            return state;
    }
}


