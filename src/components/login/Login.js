import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userRegister, userLogin } from './../../redux/actions/userActions';

export default function Login() {
    const dispatch = useDispatch();

    const { register, handleSubmit, errors, reset } = useForm();

    const submitLogin = (data) => {
        console.log('login: ', data)
        dispatch(userLogin(data))
        // reset()
    }

    const submitRegister = (data) => {
        dispatch(userRegister(data))
        console.log('register: ', data)
        // reset()
    }


    return (
        <form>
            {errors.receiverId && <span style={{
                color: 'red'
            }}>Required</span>}
            <input type="text" placeholder="Username" name="userName" ref={register({ required: true })}></input><br />
            {errors.subject && <span style={{
                color: 'red'
            }}>Required</span>}
            <input type="text" placeholder="Password" name="password" ref={register({ required: true })}></input><br />

            <button onClick={handleSubmit(submitLogin)}>Login</button>
            <button onClick={handleSubmit(submitRegister)}>Register</button>

            {/* <input type="submit" /> */}
        </form>
    )
}
