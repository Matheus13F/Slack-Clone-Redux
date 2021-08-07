import React from 'react'
import { auth } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AccessTime, Search, ExitToApp } from '@material-ui/icons';

import { ContainerHeader, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight } from './styles';

function Header() {
  const[user] = useAuthState(auth);

  return (
    <ContainerHeader>
      {/* PHOTO USER */}
      <HeaderLeft>
          <HeaderAvatar 
            src={user?.photoURL}
            alt={user?.displayName}
          />
          <AccessTime />            
      </HeaderLeft>

      {/* SEARCH */}
      <HeaderSearch>
        <Search />
        <input placeholder="Pesquise um canal" />
      </HeaderSearch>

      {/* LOGOUT */}
      <HeaderRight>
        <ExitToApp onClick={() => auth.signOut()} style={{cursor: 'pointer'}} />
      </HeaderRight>

    </ContainerHeader>
  )
}

export default Header
