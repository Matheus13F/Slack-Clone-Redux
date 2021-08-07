import styled from 'styled-components';

export const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;;
    }

    > form > button {
        display: none !important;
    }
`;
