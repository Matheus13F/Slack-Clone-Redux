import styled from 'styled-components';

export const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  &:hover {
      opacity: 0.9;
      background-color: #340e36;
  }

  > h3 {
      font-weight: 500;
  }

  > h3 > span {
      padding: 15px;
  }
`;

export const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
