
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import {
    GET_MESSAGES, GET_MESSAGES_START, GET_MESSAGES_FAIL,
    POST_MESSAGE, POST_MESSAGE_FAIL, POST_MESSAGE_START ,
    DELETE_MESSAGE, DELETE_MESSAGE_FAIL,DELETE_MESSAGE_START
} from '../actions/messagesActions';

import {
    REGISTER,REGISTER_FAIL,REGISTER_START,
    LOGIN,LOGIN_FAIL,LOGIN_START
}from '../actions/userActions';


function* getMessage(action) {
    try {
        const response = yield axios.get('http://localhost:4000/messages', { params: { id: action.payload } });
        yield put({ type: GET_MESSAGES, payload: response.data })
    } catch (error) {
        yield put({ type: GET_MESSAGES_FAIL, payload: error })
    }

}


function* postMessage(action) {
    try {
        const data = action.payload;
        const response = yield axios.post('http://localhost:4000/message', data);
        yield put({ type: POST_MESSAGE, payload: response.data })
    } catch (error) {
        yield put({ type: POST_MESSAGE_FAIL, payload: error })
    }
}


function* deleteMessage(action) {
    try {
        const data = action.payload;
        const response = yield axios.delete('http://localhost:4000/message', {params: data});
        yield put({ type: DELETE_MESSAGE, payload: response.data })
    } catch (error) {
        yield put({ type: DELETE_MESSAGE_FAIL, payload: error })
    }

}

function* register(action) {
    try {
        const data = action.payload;
        const response = yield axios.post('http://localhost:4000/register', data);
        yield put({ type: REGISTER, payload: response.data })
    } catch (error) {
        yield put({ type: REGISTER_FAIL, payload: error })
    }

}

function* login(action) {
    try {
        const data = action.payload;
        const response = yield axios.get('http://localhost:4000/login', {params: data});
        yield put({ type: LOGIN, payload: response.data })
    } catch (error) {
        yield put({ type: LOGIN_FAIL, payload: error })
    }

}



export function* mySaga() {
    yield takeEvery(GET_MESSAGES_START, getMessage);
    yield takeEvery(POST_MESSAGE_START, postMessage);
    yield takeEvery(REGISTER_START, register);
    yield takeEvery(LOGIN_START, login);    
    yield takeEvery(DELETE_MESSAGE_START, deleteMessage);    
}
