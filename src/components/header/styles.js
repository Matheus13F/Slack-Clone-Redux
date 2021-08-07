import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export const ContainerHeader = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-collor);
  color: white;
`;

export const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  transition: ease all .3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.6;
  opacity: 1;
  border-radius: 8px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 3px 60px;
  color: gray;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    text-align: left;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.2;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
