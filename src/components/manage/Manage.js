import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { setNameStart } from './../../redux/actions/userActions';
import { getMessages } from './../../redux/actions/messagesActions';
import MessagesTable from './recievedMessagesTable';
import SentMessagesTable from './SentMessagesTable';
export default function Manage() {

    const { user, messages } = useSelector(store => store)
    const [selectedTable, setSelectedTable] = useState('recieved')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMessages(user.userId))
    }, [user.userId, dispatch])


    const changeMessagesType=(type)=>{
        setSelectedTable(type)
    }


    return (
        <div>
            <button onClick={()=>{changeMessagesType('recieved')}}>Recieved Messages</button>
            <button onClick={()=>{changeMessagesType('Sent')}}>Sent Messages</button>
            {
                selectedTable === 'recieved' ?
                    <MessagesTable /> : <SentMessagesTable />
            }
        </div>
    )
}
