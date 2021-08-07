import React from 'react'
import { MessageContainer, MessageInfo } from './styles'

function Message({ message, timestamp, user, userImage }) {
    return (
        <MessageContainer>
            <img src={userImage} alt="user"/>
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message
