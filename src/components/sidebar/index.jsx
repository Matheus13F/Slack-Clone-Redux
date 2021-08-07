import React from 'react'
import { Add, Create, ExpandMore, FiberManualRecord, InsertComment, Inbox, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess } from '@material-ui/icons';
import SidebarOption from '../sidebaroption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../../services/firebase';

import { SidebarContainer, SidebarHeader, SidebarInfo } from './styles';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const [channels] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);

  const  addChannel = () => {
        const channelName = prompt('Please, enter the channel Name');
        if(channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>My Channels</h2>
          <h3>
              <FiberManualRecord/>
              {user.displayName}
          </h3>
        </SidebarInfo>
        <Create onClick={addChannel}/>
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />

      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs.map(doc => (
        <SidebarOption 
          key={doc.id} 
          id={doc.id} 
          title={doc.data().name}
        />

      ))}
    </SidebarContainer>
  )
}

export default Sidebar
