import styled from 'styled-components';

export const LoadingContainer = styled.div`
   display: grid;
   place-items: center;
   height: 100vh;
   width: 100%;
`;

export const LoadingContent = styled.div`
   text-align: center;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        height: 100px;
        padding: 20px;
        margin-bottom: 40px;
    }
`;
