import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const LoginInnercontainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
        animation: App-logo-float infinite 2s ease-in-out;
    }

    > button {
        color: white;
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #EB2D06 !important;
        
        img {
            margin-right: 20px;
        }
    }

    @keyframes App-logo-float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @media(max-width: 550px){
        padding: 60px;
    }
`;