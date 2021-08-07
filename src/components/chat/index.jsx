import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../../features/appSlice'
import ChatInput from '../chatinput'
import { db } from '../../services/firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';

import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import Message from '../message';

import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages, ChatBottom } from './styles'

function Chat() {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  
  const [roomMessage, loading] = useCollection(
    roomId &&
    db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessage && (
        <>
          <Header>
            <HeaderLeft>
              <h4><strong>#{roomDetails?.data().name}</strong></h4>
              <StarBorderOutlined />
            </HeaderLeft>

            <HeaderRight>
              <p><InfoOutlined /> Details</p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessage?.docs.map(doc => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message 
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatRef}/>
          </ChatMessages>

          <ChatInput 
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
     
    </ChatContainer>
  )
}

export default Chat
