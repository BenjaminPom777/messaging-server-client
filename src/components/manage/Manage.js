import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { setNameStart } from './../../redux/actions/userActions';
import { getMessages } from './../../redux/actions/messagesActions';

import MessagesTableNew from './messagesTable';
export default function Manage() {

    const { user, messages } = useSelector(state => state)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMessages(user.userId))
    }, [user.userId,dispatch])   
    return (
        <div>
            
            Manage Profile            
            <MessagesTableNew />
        </div>
    )
}
