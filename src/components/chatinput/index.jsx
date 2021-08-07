import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { auth, db } from '../../services/firebase';
import firebase from 'firebase';

import { ChatInputContainer } from './styles'
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {
    const [inputMessage, setInputMessage] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: inputMessage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        })

        setInputMessage('');
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput
